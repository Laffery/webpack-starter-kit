import { SSRComponent } from "app";
import ReactDOMServer from "react-dom/server";

const PUBLIC_URL = "/_static";

interface DocumentProps {
  title: string;
  scripts: string[];
  styles: string[];
  element: SSRComponent;
}

class Document {
  private title: string;
  private scripts: string[];
  private styles: string[];
  private element: SSRComponent;
  private ssr: boolean = false;
  private ssr_data: { props: { [key: string]: any } } = { props: {} };

  constructor({
    title = "React App",
    scripts = [],
    styles = [],
    element = { default: () => <div>Loading...</div> },
  }: Partial<DocumentProps>) {
    this.title = title;
    this.scripts = scripts;
    this.styles = styles;
    this.element = element;
    this.ssr = element.getServerSideProps !== undefined;
  }

  protected async InitializedSSRComponent(component?: SSRComponent) {
    if (!component || !component.getServerSideProps) return null;
    const { default: App, getServerSideProps } = component;

    // Server side data fetching
    const { props } = await getServerSideProps();
    this.ssr_data = { props };

    return <App {...props} />;
  }

  protected generateInjectFunction(): string {
    if (!this.ssr) return "";
    return `
      (function () {
        window.SSR = true;
        window.SSR_DATA = ${JSON.stringify(this.ssr_data)};
      })()
    `;
  }

  public async render() {
    const { title, scripts, styles, element } = this;
    const Page = await this.InitializedSSRComponent(element);

    return (
      <html lang="en">
        <head>
          <meta charSet="UTF-8" />
          <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1.0"
          />
          <link rel="manifest" href={`${PUBLIC_URL}/manifest.json`} />
          <link rel="apple-touch-icon" href={`${PUBLIC_URL}/logo192.png`} />
          <link rel="shortcut icon" href={`${PUBLIC_URL}/favicon.ico`} />
          <title>{title}</title>
          <script
            defer
            type="text/javascript"
            dangerouslySetInnerHTML={{ __html: this.generateInjectFunction() }}
          />
          {scripts.map((script, index) => (
            <script
              defer
              key={index}
              src={`${PUBLIC_URL}/${script}`}
              type="text/javascript"
            />
          ))}
          {styles.map((stylesheet, index) => (
            <link
              key={index}
              href={`${PUBLIC_URL}/${stylesheet}`}
              rel="stylesheet"
            />
          ))}
        </head>
        <body>
          <div id="root">{Page}</div>
          <noscript>You need to enable JavaScript to run this app.</noscript>
        </body>
      </html>
    );
  }

  public async renderToString() {
    return (
      "<!DOCTYPE html>\n" + ReactDOMServer.renderToString(await this.render())
    );
  }
}

export default Document;
