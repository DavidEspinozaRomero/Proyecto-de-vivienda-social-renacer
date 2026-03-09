export const socios = {
  maximo: 64,
  actual: 32,
  porcentaje: () => Math.round((socios.actual / socios.maximo) * 100),
}