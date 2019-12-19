const { defaults: tsjPreset } = require('ts-jest/presets');

module.exports = {
    ...tsjPreset,
    preset: 'react-native',
    setupFiles: ['./src/setupJest.js'],
    transform: {
        ...tsjPreset.transform,
    },
    transformIgnorePatterns: [
        
    ],
    testRegex: '/__tests__/.+\\.test\\.js?$',
    moduleFileExtensions: [
        'ts',
        'tsx',
        'js',
        'jsx',
        'json',
        'node',
    ],
    collectCoverageFrom: [
        '**/*.jsx',
        '**/*.js',
        '!src/Store.js',
        '!src/Config.js',
        '!src/images/index.js',
        '!src/@types/**/*.js',
        '!scripts/**/*.js',
    ],
    coverageReporters: [
        'text',
        'lcov',
    ],
    moduleNameMapper: {
        '^src(.*)': '<rootDir>/src/$1',
    },
    // globals: {
    //     'ts-jest': {
    //         babelConfig: true,
    //         tsConfig: 'tsconfig.test.json',
    //     },
    // },
    cacheDirectory: '.jest/cache',
};
