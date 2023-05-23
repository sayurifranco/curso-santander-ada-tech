// COERÇÃO (CONVERSÃO) DE TIPOS 

// 1. COERÇÃO EXPLÍCITA (MANUAL)

const numero = 10;

console.log(numero, typeof numero);

const numeroEmFormatoDeString = String(numero);
console.log(numeroEmFormatoDeString, typeof numeroEmFormatoDeString);

console.log(Number('1321314'));
console.log(parseFloat('23224.234'));
console.log(parseInt('23224.234'));
console.log(Boolean(0));
console.log(Boolean(1)); // diferente de zero é true

console.clear();

// 2. COERÇÃO IMPLÍCITA (AUTOMÁTICA)

console.log(10 + '1');

// se não transformar para número, vai concatenar e não somar, 101

console.log(10 - '1'); // aqui ele subtrai
console.log('10' * 1);
console.log('10' / 1);
console.log('10' - 'asfaf'); // NaN = not a number

// Outros exemplos

// Qual a saída desse código?

let n = 1 + '1';    // 11

n = n - 1;

console.log(n);     // 10

// Qual a saída desse código?

console.log(2 + 3 + 4 + '5');     // 95

// Qual a saída desse código?

console.log('5' + 2 + 3 + 4);     // 5234

// Qual a saída desse código?

console.log('10' - '4' - '3' - 2 + '5');    // 15