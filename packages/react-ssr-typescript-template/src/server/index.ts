import express from "express";
import fs from "fs-extra";
import path from "path";
import urlParse from "url-parse";
import Document from "./document";
import services from "./services";
import { BuildManifest, SSRComponent } from "app";

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

// serverless api
app.use("/api", services);

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});

app.get("/*", async (req, res) => {
  const { pathname } = urlParse(req.url);
  if (
    !Object.keys(manifest.scripts).includes(pathname) ||
    !Object.keys(manifest.styles).includes(pathname)
  )
    return res.end("404 Not Found");

  const component: SSRComponent = require(`../client/pages${pathname}`);

  const scripts = [manifest.scripts.main, manifest.scripts[pathname]];
  const styles = [manifest.styles.main];

  const document = new Document({
    scripts,
    styles,
    element: component,
  });

  res.end(await document.renderToString());
});
