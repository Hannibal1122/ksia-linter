module.exports = {
    extends: ["./.eslintrc.js"],
    overrides: [
        {
            files: ["*.ts"],
            rules: {
                "@angular-eslint/no-empty-lifecycle-method": "off",
            },
        },
        {
            files: ["*.component.html"],
            extends: ["plugin:@angular-eslint/template/recommended"],
        },
        {
            files: ["*.component.ts"],
            extends: ["plugin:@angular-eslint/template/process-inline-templates"],
        },
    ],
};
