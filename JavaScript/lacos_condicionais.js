// LAÇOS CONDICIONAIS

const input = require('readline-sync');

const numeroSorteado = 5;

let numero = Number(input.question('Qual numero voce escolhe? '));

console.log(numero, typeof numero)

if (numero === numeroSorteado) {
    console.log('Você acertou!');
} else {
    console.log ('Você errou!');
}

while (numero !== numeroSorteado) {
    console.log('Você errou o número. Tente novamente... ')
    numero = Number(input.question('Qual numero voce escolhe? '));
} 

console.log('Você acertou!');