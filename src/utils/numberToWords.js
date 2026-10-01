const UNITS = [
  "", "uno", "dos", "tres", "cuatro", "cinco",
  "seis", "siete", "ocho", "nueve",
];

const TEENS = [
  "diez", "once", "doce", "trece", "catorce",
  "quince", "diecisiete", "dieciocho", "diecinueve",
];

const TWENTIES = [
  "veinte", "veintiuno", "veintidos", "veintitres", "veinticuatro",
  "veinticinco", "veintiseis", "veintisiete", "veintiocho", "veintinueve",
];

const TENS = [
  "", "diez", "veinte", "treinta", "cuarenta",
  "cincuenta", "sesenta", "setenta", "ochenta", "noventa",
];

const HUNDREDS = [
  "", "ciento", "doscientos", "trescientos", "cuatrocientos",
  "quinientos", "seiscientos", "setecientos", "ochocientos", "novecientos",
];

function convertTens(n) {
  if (n < 10) return UNITS[n];
  if (n < 20) return TEENS[n - 10];
  if (n < 30) return TWENTIES[n - 20];

  const ten = Math.floor(n / 10);
  const remainder = n % 10;
  if (remainder === 0) return TENS[ten];
  return `${TENS[ten]} y ${UNITS[remainder]}`;
}

function convertHundreds(n) {
  if (n === 100) return "cien";

  const hundred = Math.floor(n / 100);
  const remainder = n % 100;

  let result = "";
  if (hundred > 0) result += HUNDREDS[hundred];
  if (remainder > 0) result += (result ? " " : "") + convertTens(remainder);
  return result;
}

export function numberToWords(n) {
  const num = Number(n);

  if (!Number.isInteger(num) || num < 1 || num > 1000) {
    throw new Error("El numero debe ser un entero entre 1 y 1000.");
  }
  if (num === 1000) return "mil";
  return convertHundreds(num);
}
