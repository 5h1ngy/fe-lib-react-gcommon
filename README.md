# lib-react-gcommon

[GitHub issues](https://img.shields.io/github/issues/5h1ngy/lib-react-gcommon)
[GitHub stars](https://img.shields.io/github/stars/5h1ngy/lib-react-gcommon)
[GitHub license](https://img.shields.io/github/license/5h1ngy/lib-react-gcommon)

## Table of Contents

1. [Description](#description)
2. [Installation](#installation)
3. [Usage](#usage)
4. [Documentation](#documentation)
5. [Contribute](#contribute)
6. [Bug Report](#bug-report)
7. [License](#license)
8. [Toolchain Features](#toolchain-features)

## Description

The `lib-react-gcommon` package provides a collection of common utilities and functions useful in developing React applications. It includes tools for drag-and-drop management, generating random strings, and more.

## Installation

To install the package, run the following command:

```bash
npm install lib-react-gcommon
```

or

```bash
yarn add lib-react-gcommon
```

## Usage

The package offers various functionalities that can be imported into your React projects. Here are some usage examples:

```javascript
// Example importing functions from dragging
import { initGroups, initItems, move, reorder } from 'lib-react-gcommon/dragging';

// Example importing functions from utils
import { generateRandomString } from 'lib-react-gcommon/utils';

// Use the functions as needed in your project
const groups = initGroups([...]);
const items = initItems([...]);
const movedData = move(source, destination, droppableSource, droppableDestination);
const reorderedData = reorder(list, startIndex, endIndex);
const randomString = generateRandomString();
```

## Documentation

For additional information on configuration and usage, refer to the official documentation available in the repository.

## Contribute

If you want to contribute to this project, follow the contribution guidelines in the CONTRIBUTING.md file.

## Bug Report

To report bugs, issues, or suggest improvements, open a new issue on GitHub.

## License

This project is licensed under the MIT License - see the LICENSE file for details.

You can copy and paste this text directly into your README.md file without making any modifications.

## Toolchain-Features

### 1. **Babel**
   - **Description:** Babel is a JavaScript compiler that allows you to use the latest ECMAScript features.
   - **Official Documentation:** [Babel Documentation](https://babeljs.io/docs/)

### 2. **Rollup**
   - **Description:** Rollup is a module bundler for JavaScript that creates smaller bundles for production.
   - **Official Documentation:** [Rollup Documentation](https://rollupjs.org/guide/en/)

### 3. **Browserslist**
   - **Description:** Browserslist is a config to share target browsers between different front-end tools.
   - **Official Documentation:** [Browserslist Documentation](https://github.com/browserslist/browserslist)

### 4. **Yarn**
   - **Description:** Yarn is a fast, reliable, and secure dependency management tool.
   - **Official Documentation:** [Yarn Documentation](https://yarnpkg.com/getting-started)

### 5. **Lodash**
   - **Description:** Lodash is a JavaScript utility library that provides helpful functions for common programming tasks.
   - **Official Documentation:** [Lodash Documentation](https://lodash.com/docs/)

### 6. **@babel/plugin-transform-runtime**
   - **Description:** Babel plugin for automatic polyfills and helpers.
   - **Official Documentation:** [Babel Plugin Transform Runtime Documentation](https://babeljs.io/docs/en/babel-plugin-transform-runtime)

### 7. **@rollup/plugin-babel**
   - **Description:** Rollup plugin to use Babel for transforming JavaScript files.
   - **Official Documentation:** [Rollup Plugin Babel Documentation](https://github.com/rollup/plugins/tree/master/packages/babel)

### 8. **@rollup/plugin-commonjs**
   - **Description:** Rollup plugin to convert CommonJS modules to ES6 modules.
   - **Official Documentation:** [Rollup Plugin CommonJS Documentation](https://github.com/rollup/plugins/tree/master/packages/commonjs)

### 9. **@rollup/plugin-node-resolve**
   - **Description:** Rollup plugin to resolve node_modules dependencies.
   - **Official Documentation:** [Rollup Plugin Node Resolve Documentation](https://github.com/rollup/plugins/tree/master/packages/node-resolve)