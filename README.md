# Getting Started with Webpack Starter Kit

> Typescript is supported! \
> Server Side Render is supported!

## Features

- Webpack@5
- React@17 / React@18
- Typescript
- SSR

## Motivation

As a fresh man in front-end field, lots of technology run into my eyes, such as [Next.js](https://github.com/vercel/next.js). Even though they are powerful and convenient enough for normal development, it isn't benefit to a programmer's growth in the long run.\
For easier react development experience, I create these templates from scratch, with the latest tool chains from dev to build to production.

## CLI

We provide a command tool named `create-app`, we recommend that you install this package globally, run with

```sh
npm i -g @laffery/webpack-starter-kit
```

Run `npx create-app -h` to look up usages:

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

Now you can feel free to run `npx create-app my-app` to create you own app and enjoy coding!

## Available Templates

- [react-ts](./packages/react-typescript-template/)
- [react-ssr-ts](./packages/react-ssr-typescript-template/)
- [react18-ts](./packages/react18-typescript-template/)
- [react18-ssr-ts](./packages/react18-ssr-typescript-template/)

You can see more details in the [manifest file](./template.manifest.json)
