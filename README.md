# React GraphQL Academy

This is the root repository for the React GraphQL Academy website, CMS, and design system. This repository contains multiple packages managed with [lerna.js](https://lerna.js.org/) and [yarn workspaces](https://classic.yarnpkg.com/en/docs/workspaces/)

## Getting Started

First, install all the dependencies. ⚠️ Don't do `yarn` or `npm install`, instead run:

```console
yarn bootstrap
```

This will run lerna and install all the dependencies of all the repositories

## Website

The website is under the www folder. The website is built with Gatsby.js.

### Running the website

After [installing the dependencies](#getting-started), from the root repository (meaning, this folder) run:

```console
yarn start
```

More info about the website [here](/www)

## CMS

The CMS is under the /cms folder. The CMS is built with Sanity.io.

### Running the CMS

After [installing the dependencies](#getting-started), from the root repository (meaning, this folder) run:

```console
yarn start:cms
```

More info about the CMS [here](/cms)

## UI Component Library

Our design system is implemented in a UI component library under the packages folder. It's built with Lerna (1 package per component), TypeScript, and styled-system. It's documented with Docz + Gatsby under /packages/docs.

### Running the Design System

After [installing the dependencies](#getting-started), from the root repository (meaning, this folder) run:

```console
yarn start:docs
```

More info about the design system documentation [here](/packages)

## Serverless

The serverless functions are under the /serverless folder. It uses Google Cloud Functions.

### Running the serverless functions

⚠️ The serverless package is not using Lerna at the moment because it requires Node.js v8 due to Google Cloud Functions and the other packages use Node.js v10+

First install the dependencies, run `cd serverless && yarn`. Then:

```console
yarn dev
```

More info about the Serverless [here](/serverless)
