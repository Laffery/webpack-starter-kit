import express from "express";
import * as App from "../client/App";
import Html from "./utils/html";

const app = express();

const port = process.env.PORT ?? 3001;
app.listen(port, () => {
  console.log(`${new Date()} Server is running on http://localhost:${port}`);
});

app.get("/", (req, res) => {
  return res.json({ code: 200, message: "hello world!", data: 1 });
});

app.get("/app", async (req, res) => {
  res.end(
    await Html({
      default: App.default,
      getServerSideProps: App.getServerSideProps,
    })
  );
});
