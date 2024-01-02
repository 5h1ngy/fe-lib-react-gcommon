module.exports = {
    ignore: [
        "**/__tests__", // ignore the whole test directory
        "**/*.test.js" // ignore test files only
    ],
    presets: [
        [
            // https://babeljs.io/docs/babel-preset-env
            "@babel/preset-env",
            {
                /**
                 * LOOSE MODE
                 * Babel’s loose mode transpiles ES6 code to ES5 code that is less faithful to ES6 semantics [...]
                 * https://babeljs.io/docs/babel-preset-env#loose
                 */
                loose: true,
                /**
                 * ES MODULES
                 * Enable transformation of ES module syntax to another module type. Note that cjs is just an alias for commonjs.
                 * Setting this to false will preserve ES modules
                 * https://babeljs.io/docs/babel-preset-env#modules
                 */
                modules: false,
                /**
                 * POLYFILL
                 * This option configures how @babel/preset-env handles polyfills.
                 * When either the usage or entry options are used, @babel/preset-env will add direct references to core-js modules as bare imports (or requires).
                 * This means core-js will be resolved relative to the file itself and needs to be accessible.
                 * https://babeljs.io/docs/babel-preset-env#usebuiltins
                 * https://stackoverflow.com/questions/52625979/confused-about-usebuiltins-option-of-babel-preset-env-using-browserslist-integ
                 */
                useBuiltIns: "usage",
                /**
                 * BROWSER LIST
                 * For browser- or Electron-based projects, we recommend using a .browserslistrc file to specify targets.
                 * https://babeljs.io/docs/babel-preset-env#browserslist-integration
                 * https://github.com/browserslist/browserslist
                 */
                corejs: "3.33.2"
            },
        ]
    ],
    plugins: [
        [
            "@babel/plugin-transform-runtime",
            {
                /**
                 * POLYFILL
                 * false, 2, 3 or { version: 2 | 3, proposals: boolean }, defaults to false.
                 * By default, @babel/plugin-transform-runtime doesn't polyfill proposals.
                 * If you are using corejs: 3, you can opt into this by enabling using the proposals: true option.
                 * https://babeljs.io/docs/babel-plugin-transform-runtime#corejs
                 */
                corejs: 3,
                proposals: true,
                /**
                 * RUNTIME VERSION
                 * By default transform-runtime assumes that @babel/runtime@7.0.0 is installed.
                 * If you have later versions of @babel/runtime (or their corejs counterparts e.g. @babel/runtime-corejs3) installed or listed as a dependency,
                 * transform-runtime can use more advanced features.
                 * https://babeljs.io/docs/babel-plugin-transform-runtime#version
                 */
                version: "^7.23.2"
            }
        ]
    ]
};