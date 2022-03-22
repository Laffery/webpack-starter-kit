import { renderToString } from "react-dom/server";
import fetch from "node-fetch";
import { GetServerSideProps } from "../../shared/lib/getServerSideProps";

async function Html<T>({
  default: Element,
  getServerSideProps,
}: {
  default: (props: { [key: string]: any }) => JSX.Element;
  getServerSideProps: GetServerSideProps<T>;
}): Promise<string> {
  const { props } = await getServerSideProps();
  const html = renderToString(Element(props));
  const template = await (
    await fetch(`http://localhost:${process.env.PORT ?? 3000}`)
  ).text();
  return template.replace(/<div id=\"root\"\>\<\/div\>/, html);
}

export default Html;
