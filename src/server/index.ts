import express from "express";
import App from "./App";
import ReactDomServer from "react-dom/server";

const app = express();

const port = process.env.PORT ?? 3001;
app.listen(port, () => {
  console.log("server is running on port", port);
});

app.get("/", (req, res) => {
  return res.json({ code: 200, message: "hello world!", data: 1 });
});

app.get("/app", (req, res) => {
  return res.end(ReactDomServer.renderToString(App));
});
