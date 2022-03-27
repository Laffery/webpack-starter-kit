import { GetServerSideProps } from "app";
import HelloWorld from "../../components/hello-world";

function Homepage(props: { mode?: "CSR" | "SSR" }) {
  return <HelloWorld page="src/pages/ssr/index.tsx" mode={props.mode} />;
}

export default Homepage;

export const getServerSideProps: GetServerSideProps = async () => {
  return { props: { mode: "SSR" } };
};
