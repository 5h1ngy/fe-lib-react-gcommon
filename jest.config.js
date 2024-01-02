module.exports = {
    preset: 'ts-jest',
    testEnvironment: 'jsdom',
    transform: {
        '^.+\\.[t|j]sx?$': 'babel-jest',
    },
    setupFiles: ['<rootDir>/jest.setup.js'],
    transformIgnorePatterns: [
        "/node_modules/",
        "\\.pnp\\.[^\\/]+$",
    ],
};
