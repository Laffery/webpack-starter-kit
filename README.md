# Getting Started with Webpack Starter Kit

> Typescript is supported! \
> Server Side Render is supported!

## Features

- Webpack@5
- React@17 / React@18
- TypeScript
- SSR

## Motivation

As a fresh man in front-end field, lots of technology run into my eyes, such as [Next.js](https://github.com/vercel/next.js). Even though they are powerful and convenient enough for normal development, it isn't benefit to a programmer's growth in the long run.\
For easier react development experience, I create these templates from scratch, with the latest tool chains from dev to build to production.

## CLI

### Install

```sh
# npm
npm i -g @laffery/webpack-starter-kit

# or yarn
yarn add -g @laffery/webpack-starter-kit

# or pnpm
pnpm add -g @laffery/webpack-starter-kit
```

### Create app

Run `npx create-webpack-app -h` to look up usages:

```txt
Usage: create app <name> [options]

Arguments:
  name                     project name (default: "my-app")
  template                 template name (default: "react-ts")

Options:
  -V, --version            output the version number
  -O, --output <string>    output directory (default: ".")
  -l, --list               list all templates available
  -t, --template <string>  project template name
  -h, --help               display help for command
```

Now you can feel free to run the following command to create you own app and enjoy coding!

```sh
# npm
npm create @laffery/webpack-app@latest

# or yarn
yarn create @laffery/webpack-app

# or pnpm
pnpm create @laffery/webpack-app
```

## Available Templates

- [react-ts](./packages/react-typescript-template/)
- [react-ssr-ts](./packages/react-ssr-typescript-template/)
- [react18-ts](./packages/react18-typescript-template/)
- [react18-ssr-ts](./packages/react18-ssr-typescript-template/)

You can see more details in the [manifest file](./template.manifest.json)
