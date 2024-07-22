module.exports = {
  // Usa o ts-jest como preset para testar os arquivos .ts com Jest
  preset: "ts-jest",

  // Define o ambiente de testes
  testEnvironment: "node",

  // Define o diretório raiz dos testes e módulos
  roots: ["<rootDir>/tests"],

  // Transforma os arquivos .ts e .tsx em .js usando o ts-jest
  transform: {
    "^.+\\.tsx?$": "ts-jest",
  },

  // Extensões que ele deve buscar
  testRegex: "((\\.|/)(test|spec))\\.tsx?$",

  // Arquivos que ele deve reconhecer para rodar os testes
  moduleFileExtensions: ["ts", "tsx", "js", "jsx", "json", "node"],
};
