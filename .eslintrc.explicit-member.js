module.exports = {
    extends: ["./.eslintrc.js"],
    overrides: [
        {
            files: ["*.ts"],
            rules: {
                '@typescript-eslint/explicit-member-accessibility': ["warn", 
                    {
                        accessibility: 'explicit',
                        overrides: {
                            accessors: 'explicit',
                            constructors: 'no-public',
                            methods: 'explicit',
                            properties: 'off',
                            parameterProperties: 'explicit',
                        },
                    },
                ],
            },
        },
    ],
};
