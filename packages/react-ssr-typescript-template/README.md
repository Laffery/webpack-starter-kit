# Webpack React SSR Typescript Template

> Server-Side Render is supported

## Available Scripts

In the project directory, you can run:

### `yarn dev`

Runs the app in the development mode. \
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

What's more, a server based on Express is running on [http://localhost:3001](http://localhost:3001), which is mapped into [http://localhost:3000/api](http://localhost:3000/api). \
Now you can try `SSR` at the example url [http://localhost:3000/api/app](http://localhost:3000/api/app).

### `yarn start`

Runs the app in the production mode. \
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

### `yarn build`

Builds the app for production to the `dist` folder. \
The client side code is built in `dist/client` folder, and the server side code is built in `dist/server` folder. \
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes. \
Your app is ready to be deployed!
