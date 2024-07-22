export function verificarSeGeraLucro(
  valorVenda: number,
  valorCusto: number
): boolean {
  return valorVenda > valorCusto;
}
