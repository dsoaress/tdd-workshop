import type { Config } from "jest";

const config: Config = {
  moduleFileExtensions: ["js", "json", "ts"],
  testRegex: ".*\\.*spec\\.ts$",
  transform: {
    ".+\\.(t|j)s$": "ts-jest",
  },
  collectCoverageFrom: ["<rootDir>/src/**/*.ts"],
  coverageDirectory: "./coverage",
  testEnvironment: "node",
  passWithNoTests: true,
};

export default config;
