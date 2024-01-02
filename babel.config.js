// babel.config.js
module.exports = (api) => {
    const isCommonJS = api.env('commonjs');

    return {
        ignore: [
            "**/__tests__",
            "**/*.test.js"
        ],
        presets: [
            [
                "@babel/preset-env",
                {
                    loose: true,
                    modules: isCommonJS ? 'commonjs' : false,
                    useBuiltIns: "usage",
                    corejs: "3.33.2"
                },
            ],
        ],
        plugins: [
            [
                "@babel/plugin-transform-runtime",
                {
                    corejs: 3,
                    proposals: true,
                    version: "^7.23.2",
                },
            ],
        ],
    };
};
