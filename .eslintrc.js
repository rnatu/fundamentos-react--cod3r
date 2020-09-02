module.exports = {
    env: {
        browser: true,
        es2020: true,
    },
    extends: [
        'plugin:react/recommended',
        'airbnb',
        'prettier',
        'prettier/react',
    ],
    parser: 'babel-eslint',
    parserOptions: {
        ecmaFeatures: {
            jsx: true,
        },
        ecmaVersion: 11,
        sourceType: 'module',
    },
    plugins: ['react', 'prettier', 'react-hooks'],
    rules: {
        'prettier/prettier': 'error',
        'react/jsx-filename-extension': 0,
        'import/prefer-default-export': 0,
        'react-hooks/rules-of-hooks': 'error',
        'react-hooks/exhaustive-deps': 'warn',
        'react/prefer-stateless-function': 0,
        'react/state-in-constructor': 0,
        'react/destructuring-assignment': 0,
        'react/prop-types': 0,
        'react/no-access-state-in-setstate': 0,
        'jsx-a11y/label-has-associated-control': 0
    },
};
