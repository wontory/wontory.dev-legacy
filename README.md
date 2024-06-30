# wontory.dev

## What's inside?

This Turborepo includes the following packages/apps:

### Apps and Packages

- `blog`: a [Next.js](https://nextjs.org/) app for blog
- `www`: another [Next.js](https://nextjs.org/) app for main
- `@wontory/ui`: a stub React component library shared by both `blog` and `www` applications
- `@wontory/eslint-config`: `eslint` configurations (includes `eslint-config-next` and `eslint-config-prettier`)
- `@wontory/typescript-config`: `tsconfig.json`s used throughout the monorepo
- `@wontory/tailwindcss-config`: `tailwind-css` configurations
- `@wontory/utils`: utility functions collection used throughout the monorepo (includes `cn`)

Each package/app is 100% [TypeScript](https://www.typescriptlang.org/).

### Utilities

This Turborepo has some additional tools for you:

- [TypeScript](https://www.typescriptlang.org/) for static type checking
- [ESLint](https://eslint.org/) for code linting
- [Prettier](https://prettier.io) for code formatting
- [Husky](https://typicode.github.io/husky/) for git hooks

### Build

To build all apps and packages, run the following command:

```
cd wontory.dev
bun run build
```

### Develop

To develop all apps and packages, run the following command:

```
cd wontory.dev
bun run dev
```
