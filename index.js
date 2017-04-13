module.exports = {
    env: {
        'browser': true
    },
    globals: {
        'require': true,
        'module': true
    },
    parser: 'babel-eslint',
    extends: ['eslint-config-airbnb'].map(require.resolve),
    rules: {
        'max-len': [2, 120],
        'no-debugger': 1,
        'max-nested-callbacks': [1, 3],
        'no-console': 1,
        'indent': [2, 4, {'SwitchCase': 1}],
        'react/jsx-indent': [2, 4],
        'react/jsx-indent-props': [2, 4],
        'jsx-quotes': [2, 'prefer-single'],
        'arrow-parens': [2, 'always'],
        'max-depth': [1, 4],
        'react/prefer-es6-class': 0,
        'react/prop-types': [2, {'ignore': ['eventStream', 'children']}],
        'complexity': [1, 15],
        'import/no-unresolved': 0,
        'arrow-body-style': 0,
        'no-param-reassign': 0,
        'no-empty-pattern': 0,
        "no-duplicate-imports": 0,
        "import/no-duplicates": 2,
        "import/no-commonjs": 2,
        "import/extensions": 0,
    }
};
