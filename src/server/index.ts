import express from "express";
import App from "../client/App";
import Html from "./utils/html";

const app = express();

const port = process.env.PORT ?? 3001;
app.listen(port, () => {
  console.log("server is running on port", port);
});

app.get("/", (req, res) => {
  return res.json({ code: 200, message: "hello world!", data: 1 });
});

app.get("/app", async (req, res) => {
  res.end(await Html({ element: App() }));
});
