import { SSRComponent } from "../shared/lib/ssrComponent";

const PUBLIC_URL = "/_static";

interface DocumentProps {
  title: string;
  scripts: string[];
  styles: string[];
  Element: JSX.Element | string | null;
}

export async function InitializedSSRComponent(component?: SSRComponent) {
  if (!component || !component.getServerSideProps) return null;
  const { default: App, getServerSideProps } = component;

  // Server side render
  const { props } = await getServerSideProps();
  return <App {...props} />;
}

function Document({
  title = "React App",
  scripts = [],
  styles = [],
  Element,
}: Partial<DocumentProps>) {
  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="manifest" href={`${PUBLIC_URL}/manifest.json`} />
        <link rel="apple-touch-icon" href={`${PUBLIC_URL}/logo192.png`} />
        <title>{title}</title>
        {scripts.map((script) => (
          <script
            defer
            src={`${PUBLIC_URL}/${script}`}
            type="text/javascript"
          />
        ))}
        {styles.map((href) => (
          <link href={`${PUBLIC_URL}/${href}`} rel="stylesheet" />
        ))}
      </head>
      <body>
        <noscript>You need to enable JavaScript to run this app.</noscript>
        <div id="root">{Element}</div>
      </body>
    </html>
  );
}

export default Document;
