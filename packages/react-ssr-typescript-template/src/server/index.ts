import express from "express";
import * as App from "../client/App";
import Html from "./utils/html";
import path from "path";

const app = express();

const port = process.env.PORT ?? 3000;

/** __dirname is dist/server */
app.use("/", express.static(path.resolve(__dirname, "../client")));

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});

app.get("/ssr", async (_req, res) => {
  res.end(
    await Html({
      default: App.default,
      getServerSideProps: App.getServerSideProps,
    })
  );
});
