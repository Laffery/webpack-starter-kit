import HelloWorld from "@/components/hello-world";

function Homepage(props: { mode?: "CSR" | "SSR" }) {
  return <HelloWorld page="src/pages/csr/index.tsx" mode={props.mode} />;
}

export default Homepage;
