# Webpack React SSR Typescript Template

> Server-Side Render is supported

## Available Scripts

In the project directory, you can run:

### `yarn dev`

Runs the app in the development mode. \
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `yarn start`

Runs the app in the production mode. \
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

### `yarn build`

Builds the app for production to the `dist` folder. \
The client side code is built in `dist/client` folder, and the server side code is built in `dist/server` folder. \
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes. \
Your app is ready to be deployed!

## SSR

There are several pages in the example project.

- [`/`](http://localhost:3000/): homepage(SSR)
- [`ssr`](http://localhost:3000/ssr): SSR page
  - [`foo`](http://localhost:3000/ssr/foo): SSR sub page
- [`csr`](http://localhost:3000/csr): CSR page
  - [`bar`](http://localhost:3000/csr/bar): CSR sub page

You can try them on their own page. \
Even though the SSR pages are rendered on the server side, they can response to events as the CSR pages do after `hydrating` on the client side.

### Developing SSR page

You need do nothing to define a SSR page, but only to export an async function named `getServerSideProps`, and define data-fetch logic in it, we will automatically fetch the data and inject to somewhere client can access directly, which will be seen as a `props` argument to invoke the relative page component.

```tsx
import { GetServerSideProps } from "app";
import HelloWorld from "@/components/hello-world";

export default function Homepage(props: { mode?: "CSR" | "SSR" }) {
  return <HelloWorld page="src/pages/ssr/index.tsx" {...props} />;
}

export const getServerSideProps: GetServerSideProps = async () => {
  return { props: { mode: "SSR" } };
};
```

As the above page says, you will see "CSR" on the page while the page is rendered in client side, otherwise you will see "SSR" on the page while the page is rendered in server side.

## Route

### Conventional routing is supported

Similar to `Next.js`, we also have a file-system based router built on the concept of pages.
When a file is added to the pages directory, it's automatically available as a route.
The files inside the pages directory can be used to define most common patterns.
