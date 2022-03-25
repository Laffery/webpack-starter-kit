# Webpack React SSR Typescript Template

> Server-Side Render is supported

## Available Scripts

In the project directory, you can run:

### `yarn dev`

Runs the app in the development mode. \
Open [http://localhost:3000](http://localhost:3000) to view it in the browser. \

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

You can try them on their page. \
However, the SSR pages cannot render react hooks now, so they are totally static pages, improvement is on the way coming.
