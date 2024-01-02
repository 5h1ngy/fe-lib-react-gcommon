/**
 * @file Babel configuration file for transpiling JavaScript code.
 * @param {import('@babel/core').API} api - Babel API object.
 * @return {import('@babel/core').TransformOptions} - Babel configuration options.
 * @see {@link https://babeljs.io/docs/en/config-files} for official Babel documentation.
 */

module.exports = (api) => {
    // Determine if the environment is set to commonjs.
    const isCommonJS = api.env('commonjs');

    return {
        // Files and directories to ignore during transpilation.
        ignore: [
            "**/__tests__",
            "**/*.test.js"
        ],

        // Babel presets for transpilation settings.
        presets: [
            [
                // Use @babel/preset-env for environment-based transpilation.
                "@babel/preset-env",
                {
                    loose: true,  // Enable "loose" mode for less strict output.
                    modules: isCommonJS ? 'commonjs' : false,  // Configure module format.
                    useBuiltIns: "usage",  // Use polyfills based on usage.
                    corejs: "3.33.2"  // Specify the version of core-js.
                },
            ],
        ],

        // Babel plugins for additional transpilation features.
        plugins: [
            [
                // Use @babel/plugin-transform-runtime for efficient runtime support.
                "@babel/plugin-transform-runtime",
                {
                    corejs: 3,  // Specify the version of core-js.
                    proposals: true,  // Enable support for ECMAScript proposals.
                    version: "^7.23.2",  // Specify the version of @babel/runtime-corejs3.
                },
            ],
        ],
    };
};
