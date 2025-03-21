export default [
  {
    rules: {
      // 'no-console': 'error'
      indent: ["error", 2],
      "keyword-spacing": "error",
      "no-multiple-empty-lines": "error",
      "eol-last": ["error", "always"],
      semi: ["error", "always"],
      "no-trailing-spaces": "error", //Não haver muitos espaços no código
      "operator-assignment": "error", //evita redundancia de código, como: variavel = variavel + 1(variavel += 1)
      "no-inner-declarations": [
        //Não permitir funções criadas internamente e sim com o escopo global;
        "error",
        "functions",
        { blockScopedFunctions: "disallow" },
      ],
    },
  },
];
