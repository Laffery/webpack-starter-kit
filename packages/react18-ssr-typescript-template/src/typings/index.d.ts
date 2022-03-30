declare module "app" {
  interface BuildManifest {
    scripts: Record<string, string>;
    styles: Record<string, string>;
  }

  interface BuildManifest {
    scripts: Record<string, string>;
    styles: Record<string, string>;
  }

  type GetServerSideProps<T extends Record<string, any> = Record<string, any>> =
    () => Promise<{ props: T }>;

  interface SSRComponent {
    default: (props: { [key: string]: any }) => JSX.Element;
    getServerSideProps?: GetServerSideProps;
  }
}

declare interface Window {
  SSR?: boolean;
  SSR_DATA?: { props: { [key: string]: any } };
}
