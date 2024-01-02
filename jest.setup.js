// jest.setup.js
import 'core-js/stable';
import 'regenerator-runtime/runtime';

module.exports = {
    preset: 'ts-jest',
    transform: {
        '^.+\\.[t|j]sx?$': 'babel-jest',
    },
    testEnvironment: 'jsdom',
};
