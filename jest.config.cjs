/** @type {import("jest").Config} */
module.exports = {
    testEnvironment: "node",
    roots: ["<rootDir>/src/js"],
    testMatch: ["**/__tests__/**/*.test.js"],
    transform: {
        "^.+\\.js$": "babel-jest",
    },
};
