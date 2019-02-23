module.exports = {
  'env': {
    'browser': true,
    'jest': true,
    'es6': true,
    'node': true,
  },
  'extends': [
    'airbnb',
  ],
  'rules': {
    "react/jsx-filename-extension": "off",
    "react/prop-types": "off",
    "import/no-named-as-default": "off",
    "import/prefer-default-export": "off"
  },
  "parser": "babel-eslint",
  'parserOptions': {
    'ecmaFeatures': {
      'jsx': true,
      "ecmaVersion": 2018,
    }
  }
};