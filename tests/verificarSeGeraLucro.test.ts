import { verificarSeGeraLucro } from "../src/utils";

describe("Testes para verificarSeGeraLucro", () => {
  it("deve garantir que não terá lucro", () => {
    // Arrange
    const valorVenda = 5;
    const valorCusto = 30;

    // Act
    const lucro = verificarSeGeraLucro(valorVenda, valorCusto);

    // Assert
    expect(lucro).toBe(false);
  });

  it("deve garantir que terá lucro", () => {
    // Arrange
    const valorVenda = 20;
    const valorCusto = 10;

    // Act
    const lucro = verificarSeGeraLucro(valorVenda, valorCusto);

    // Assert
    expect(lucro).toBe(true);
  });

  // it("deve garantir que não terá lucro", () => {
  //   // Arrange
  //   const valorVenda = 70;
  //   const valorCusto = 70;

  //   // Act
  //   const lucro = verificarSeGeraLucro(valorVenda, valorCusto);

  //   // Assert
  //   expect(lucro).toBe(false);
  // });
});
