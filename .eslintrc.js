module.exports = {
  "extends": "airbnb-base",
  "plugins": ["jest"],
  "rules": {
    "import/prefer-default-export": "off",
    "import/first": "off",
    "import/no-unresolved": "off",
    "import/extensions": "off",
  },
  "env": {
    "jest/globals": true,
  },
};
