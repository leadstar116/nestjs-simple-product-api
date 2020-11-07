export interface Currency {
  name: string,
  symbol: string,
  symbolNative: string,
  decimalDigits: number,
  rounding: number,
  code: string,
  namePlural: string,
  countries: string[]
}

export interface ConversionRate {
  name: string,
  rate: number,
}