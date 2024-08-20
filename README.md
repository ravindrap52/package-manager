## Overview
Using this web application, you can search for and fetch packages. By default, the search will use `"*"`, but users can search for specific packages using the search box. The search results are sorted automatically.

I have added the API key to the environment file because this is a prototype application.
I have also added place holder content for most of the navigation links.

# Project Setup Guide

## Prerequisites for Development

Since the `create-react-app` is deprecated, I used Vite to set up the project. Vite uses the latest ESLint v9.x, which has dropped support for Node.js versions less than v18.18 and v19. More information on this can be found [here](https://eslint.org/docs/latest/use/migrate-to-9.0.0#drop-old-node).

Given this, I chose Node.js 20, which is currently active and will be in maintenance until April 2026. You can find more information [here](https://nodejs.org/en/about/previous-releases).

### How to Check Node Version

Open your terminal and type the following command:

```bash
node -v
```
If the version is less than `20.16.0`, you need to install NVM (Node Version Manager).

### How to Install NVM

#### For Windows,Linux and macOS:

Follow the link [install nvm](https://www.freecodecamp.org/news/node-version-manager-nvm-install-guide/)

After successfully installing NVM, use the following command to check the Node.js version:

```bash
node -v
```
Yarn as a Package Manager
This project uses Yarn as a package manager. If Yarn is not installed, use the command below to install it:

```bash
npm install --global yarn
```
You can verify that Yarn is installed by running:
```bash
yarn --version
```
### Cloning the Repository
To clone the repository, use the following command:
```bash
git clone https://github.com/ravindrap52/package-manager.git
```
### Installation
To install the dependencies by running, use the following command:
```bash
cd package-manager
yarn install
```
### Running the Development Server
To start the development server, run:
```bash
yarn run dev
```
#### Browser will open and it navigate to http://localhost:5173.

### Building for Production
To build the project for production, use:
```bash
yarn run build
```
### Testing
To test the project, use:
```bash
yarn run test
```