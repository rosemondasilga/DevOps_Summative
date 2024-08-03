// eslint.config.js
export default [
    {
      files: ["**/*.js"], // Lint all .js files in the project
      languageOptions: {
        ecmaVersion: 2021, // Specify the ECMAScript version to lint
        sourceType: "module", // Specify the source type (script or module)
      },
      rules: {
        "no-console": "warn", // Warn on console.log statements
        "eqeqeq": "error", // Enforce strict equality (=== and !==)
        "indent": ["error", 2], // Enforce consistent indentation (2 spaces)
        "quotes": ["error", "single"], // Enforce single quotes for strings
        "semi": ["error", "always"], // Enforce semicolons at the end of statements
        // Add more rules as needed
      },
    },
    {
      files: ["**/*.test.js"], // Lint all .test.js files
      rules: {
        "no-unused-expressions": "off", // Turn off no-unused-expressions for test files
        // Add specific rules for test files if necessary
      },
    },
  ];
  