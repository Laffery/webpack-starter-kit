import { GetServerSideProps } from "./getServerSideProps";

export interface SSRComponent {
  default: (props: { [key: string]: any }) => JSX.Element;
  getServerSideProps?: GetServerSideProps;
}
