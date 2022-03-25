import { renderToString } from "react-dom/server";
import express from "express";
import fs from "fs-extra";
import path from "path";
import queryString from "query-string";
import urlParse from "url-parse";
import Document, { InitializedSSRComponent } from "./document";
import { BuildManifest } from "../shared/lib/manifest";
import { SSRComponent } from "./../shared/lib/ssrComponent";

const app = express();

/** __dirname is dist/server */
const PUBLIC_URL = path.resolve(__dirname, "../static");

const manifest: BuildManifest = fs.readJSONSync(
  path.join(PUBLIC_URL, "build.manifest.json")
);

const port = process.env.PORT ?? 3000;

app.use("/_static", async (req, res, next) => {
  express.static(PUBLIC_URL, {})(req, res, () => {
    // prevent _static to be rendered as page
    if (/^\/$/.test(req.url)) return res.end(req.url);
    return next();
  });
});

app.use("/api", async (req, res) => {
  return res.end("Hello Api Caller");
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});

app.get("/*", async (req, res) => {
  const { pathname, query } = urlParse(req.url);
  console.debug(pathname, queryString.parse(query));
  if (
    !Object.keys(manifest.scripts).includes(pathname) ||
    !Object.keys(manifest.styles).includes(pathname)
  )
    return res.end(renderToString(Document({ Element: "404 Not Found" })));

  const component: SSRComponent = require(`../client/pages${pathname}`);
  const ssr = component.getServerSideProps !== undefined;

  const scripts = [manifest.scripts.main, manifest.scripts[pathname]];
  const styles = [manifest.styles.main];

  if (ssr) {
    // without main script
    scripts.shift();
  }

  res.end(
    "<!DOCTYPE html>\n" +
      renderToString(
        Document({
          scripts,
          styles,
          Element: await InitializedSSRComponent(component),
        })
      )
  );
});
