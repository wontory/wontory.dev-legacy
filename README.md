![wontory.dev](https://tech-orbit.wontory.dev/api?title=wontory.dev&tech=Turborepo,PNPM,TypeScript,Next.js,Tailwind%20CSS,Hashnode&size=900&duration=30)

## What's inside?

This Turborepo includes the following packages/apps:

### Apps and Packages

- `blog`: a [Next.js](https://nextjs.org/) app for blog
- `www`: another [Next.js](https://nextjs.org/) app for main
- `@wontory/ui`: a stub React component library shared by both `blog` and `www` applications
- `@wontory/typescript-config`: `tsconfig.json`s used throughout the monorepo
- `@wontory/tailwindcss-config`: `tailwind-css` configurations
- `@wontory/util`: utility functions collection used throughout the monorepo (includes `cn`)
- `@wontory/lib`: libraries used throughout the monorepo (includes `lenis`, `next-view-transitions`)

Each package/app is 100% [TypeScript](https://www.typescriptlang.org/).

### Utilities

This Turborepo has some additional tools for you:

- [TypeScript](https://www.typescriptlang.org/) for static type checking
- [Biome](https://biomejs.dev/) for code linting & formatting
- [Husky](https://typicode.github.io/husky/) for git hooks

### Build

To build all apps and packages, run the following command:

```
cd wontory.dev
pnpm build
```

### Develop

To develop all apps and packages, run the following command:

```
cd wontory.dev
pnpm dev
```
