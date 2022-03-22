import React from "react";
import { renderToString } from "react-dom/server";
import fetch from "node-fetch";

async function Html({ element }: { element: JSX.Element }): Promise<string> {
  const html = renderToString(element);
  const template = await (await fetch("http://localhost:3000")).text();
  return template.replace(/<div id=\"root\"\>\<\/div\>/, html);
}

export default Html;
