module.exports = {
  "extends": ["taro/react"],
  "rules": {
    "react/jsx-uses-react": "off",
    "react/react-in-jsx-scope": "off",
      "no-unused-vars": [
          "error",
          {
              "varsIgnorePattern": "Taro"
          }
      ],
      "react/jsx-filename-extension": [
          1,
          {
              "extensions": [".js", ".jsx", ".tsx"]
          }
      ],
      "react/jsx-indent-props": [4, "tab"],
      "jsx-quotes": "off",
      "indent": [
          "error",
          4,
          {
              "SwitchCase": 1,
              "VariableDeclarator": 1,
              "outerIIFEBody": 1,
              "MemberExpression": 1,
              "FunctionDeclaration": {
                  "parameters": 1,
                  "body": 1
              },
              "FunctionExpression": {
                  "parameters": 1,
                  "body": 1
              },
              "CallExpression": {
                  "arguments": 1
              },
              "ArrayExpression": 1,
              "ObjectExpression": 1,
              "ImportDeclaration": 1,
              "flatTernaryExpressions": false,
              "ignoreComments": false
          }
      ]
  },
    "parser": "babel-eslint"
}
