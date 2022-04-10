declare interface BuildManifest {
  scripts: Record<string, string>;
  styles: Record<string, string>;
}

declare interface BuildManifest {
  scripts: Record<string, string>;
  styles: Record<string, string>;
}

declare type GetServerSideProps<
  T extends Record<string, unknown> = Record<string, unknown>
> = () => Promise<{
  props: T;
}>;

declare interface SSRComponent {
  default: (props: Record<string, unknown>) => JSX.Element;
  getServerSideProps?: GetServerSideProps;
}

declare interface SSRData {
  props: Record<string, unknown>;
  location: string;
}

declare interface Window {
  SSR?: boolean;
  SSR_DATA?: SSRData;
}
