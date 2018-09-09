# Webpack SASS Babel Template
My personal WSB template

## Installation:
1. Download and install [Nodejs](https://nodejs.org/).
2. Clone the repo and enter the directory.
    `git clone https://github.com/jamiephan/webpack-sass-babel-template.git`
    `cd webpack-sass-babel-template`
3. Install all the dependencies with `npm` command:
    `npm install`
    
## Commands:
`npm run build:prod`
This will automatically build the bundle once. The entry file is `./src/script/index.js`, with production ready code (minified).

`npm run build:dev`
This will automatically build the bundle once. The entry file is `./src/script/index.js`. The code is not minified and will have the `--verbose` switch for webpack.

`npm run watch`
This will watch the file changes in `./src` and automatically build the bundle with dev build (not minified). This is a continuous monitoring, to stop it, use the `Ctrl + C` key combination.

## Linting
The template uses `ESLint` for linting, as well as have autofix when save for **VS Code**. 
It also have JSDoc linting enabled. 
