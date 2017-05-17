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
        "quotes": ["error", "single", { "allowTemplateLiterals": true }],
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
        "import/prefer-default-export": 0,
        "import/no-extraneous-dependencies": 0,
        "import/extensions": 0,

        "comma-dangle": ["error", {
          "arrays": "only-multiline",
          "objects": "only-multiline",
          "imports": "only-multiline",
          "exports": "only-multiline",
          "functions": "ignore"
        }],

        "no-restricted-syntax": ["error",
          {
            "selector": "ForInStatement",
            "message": "for..in loops iterate over the entire prototype chain, which is virtually never what you want. Use Object.{keys,values,entries}, and iterate over the resulting array."
          },
          {
            "selector": "LabeledStatement",
            "message": "Labels are a form of GOTO; using them makes code confusing and hard to maintain and understand."
          },
          {
            "selector": "WithStatement",
            "message": "`with` is disallowed in strict mode because it makes code impossible to predict and optimize."
          }
        ],
    }
};
