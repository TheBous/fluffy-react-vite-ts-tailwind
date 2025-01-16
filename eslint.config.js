// eslint.config.js
import js from "@eslint/js";
import tsPlugin from "@typescript-eslint/eslint-plugin";
import tsParser from "@typescript-eslint/parser";
import importPlugin from "eslint-plugin-import";
import jestPlugin from "eslint-plugin-jest";
import jsdocPlugin from "eslint-plugin-jsdoc";
import jsoncPlugin from "eslint-plugin-jsonc";
import reactPlugin from "eslint-plugin-react";
import reactHooksPlugin from "eslint-plugin-react-hooks";
import sortKeysFixPlugin from "eslint-plugin-sort-keys-fix";
import spellcheckPlugin from "eslint-plugin-spellcheck";
import globals from "globals";

export default [
    {
        ignores: ["**/dist/**", "src/main.tsx", "vite.config.ts"],
    },
    js.configs.recommended,
    {
        files: ["**/*.{ts,tsx}"],
        languageOptions: {
            parser: tsParser,
            parserOptions: {
                ecmaFeatures: {
                    jsx: true,
                },
                project: "./tsconfig.json",
            },
            globals: {
                ...globals.browser,
                ...globals.node,
                describe: "readonly",
                expect: "readonly",
                indexedDB: "readonly",
                it: "readonly",
                jest: "readonly",
                test: "readonly",
            },
        },
        plugins: {
            import: importPlugin,
            jest: jestPlugin,
            jsdoc: jsdocPlugin,
            jsonc: jsoncPlugin,
            react: reactPlugin,
            "react-hooks": reactHooksPlugin,
            "sort-keys-fix": sortKeysFixPlugin,
            spellcheck: spellcheckPlugin,
            "@typescript-eslint": tsPlugin,
        },
        rules: {
            "array-bracket-newline": ["error", "consistent"],
            "array-bracket-spacing": ["error", "never"],
            "array-callback-return": "error",
            "array-element-newline": [
                "error",
                {
                    ArrayExpression: "consistent",
                    ArrayPattern: { minItems: 3 },
                },
            ],
            "arrow-spacing": "error",
            "brace-style": ["error", "1tbs"],
            camelcase: ["error", { ignoreDestructuring: true, properties: "never" }],
            "comma-dangle": ["error", "never"],
            "comma-spacing": [
                "error",
                {
                    after: true,
                    before: false,
                },
            ],
            curly: ["error", "all"],
            "default-case": "off",
            eqeqeq: ["error", "always"],
            "func-call-spacing": ["error", "never"],
            "function-call-argument-newline": ["error", "consistent"],
            "import/first": "off",
            "import/order": [
                "error",
                { groups: ["builtin", "external", "internal", "parent", "sibling", "index"] },
            ],
            indent: ["error", "tab", { SwitchCase: 1, ignoredNodes: ["ConditionalExpression"] }],
            "jest/no-mocks-import": "off",
            "jsdoc/newline-after-description": 0, // Required for VS Code auto formatting
            "jsdoc/require-hyphen-before-param-description": 1,
            "jsdoc/require-jsdoc": [
                "error",
                {
                    require: {
                        ArrowFunctionExpression: true,
                        ClassExpression: true,
                        FunctionDeclaration: true,
                        FunctionExpression: true,
                        MethodDefinition: true,
                    },
                },
            ],
            "jsonc/sort-keys": "error",
            "keyword-spacing": ["error", { after: true, before: true }],
            "max-len": [
                "error",
                {
                    code: 120,
                    ignorePattern: '".*": ".*"', // Ignore pattern for strings in JSON as they can't be broken into multiple lines
                },
            ],
            "no-console": "error",
            "no-dupe-else-if": "error",
            "no-extend-native": "off",
            "no-nested-ternary": "error",
            "no-useless-escape": "off",
            "no-var": "error",
            "object-curly-newline": ["error", { consistent: true, multiline: true }],
            "object-curly-spacing": ["error", "always"],
            "object-property-newline": ["error", { allowAllPropertiesOnSameLine: true }],
            "padding-line-between-statements": [
                "error",
                // Always one empty line before return statement
                {
                    blankLine: "always",
                    next: "return",
                    prev: "*",
                },
                // Always one empty line between methods
                {
                    blankLine: "always",
                    next: ["block-like", "multiline-block-like"],
                    prev: ["block-like", "multiline-block-like"],
                },
                // Avoid more than one empty line
                {
                    blankLine: "never",
                    next: "empty",
                    prev: "empty",
                },
            ],
            "prefer-const": "error",
            quotes: ["error", "double"],
            radix: "off",
            "react-hooks/exhaustive-deps": "error",
            "react-hooks/rules-of-hooks": "error",
            "react/react-in-jsx-scope": "off",
            semi: ["error", "always"],
            "sort-keys": [
                "error",
                "asc",
                {
                    caseSensitive: true,
                    minKeys: 2,
                    natural: false,
                },
            ],
            "sort-keys-fix/sort-keys-fix": "error",
            "space-before-blocks": "error",
            "space-infix-ops": ["error", { int32Hint: false }],
            "spellcheck/spell-checker": [
                "error",
                {
                    minLength: 4,
                    skipWords: ["datasource", "apis"],
                },
            ],
            // Added this so test files don't give error when accessing DOM elements using DOM API
            "testing-library/no-node-access": "off",
            // TypeScript-specific rules
            "no-unused-vars": "off",
            "@typescript-eslint/no-unused-vars": "error",
            "@typescript-eslint/explicit-function-return-type": "off",
        },
        settings: { react: { version: "detect" } },
    },
];
