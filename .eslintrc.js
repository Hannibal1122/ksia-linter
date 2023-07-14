module.exports = {
    root: true,
    overrides: [
        {
            files: ["*.ts"],
            parserOptions: {
                project: ["tsconfig.*?.json"],
                createDefaultProgram: true,
            },
            plugins: ["@typescript-eslint", "decorator-position"],
            extends: [
                "plugin:@typescript-eslint/eslint-recommended",
                "plugin:@typescript-eslint/recommended",
                "google",
                "plugin:prettier/recommended",
            ],
            rules: {
                "new-cap": "off",
                "require-jsdoc": "off",
                "valid-jsdoc": "off",
                "no-empty-function": "off",
                "guard-for-in": "off",
                "@typescript-eslint/no-empty-function": "off",
                "no-unused-vars": "error",
                "@typescript-eslint/no-unused-vars": "error",
                "max-len": ["error", { code: 120 }],
                "lines-between-class-members": ["error", "always", { "exceptAfterSingleLine": true }],
                curly: "error",
                'decorator-position/decorator-position': [
                    'error',
                    {
                        printWidth: 100,
                        properties: 'prefer-inline',
                        methods: 'above',
                    }
                ]
            },
        },
        {
            files: ["*.html"],
            plugins: ["html"],
            rules: {
                "max-len": ["error", { code: 140 }],
            },
        },
    ],
};
