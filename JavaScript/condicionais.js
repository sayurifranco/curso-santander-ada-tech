// ESTRUTURAS CONDICIONAIS

const idade = 20;

if (idade >= 18) {
    console.log('Você é maior de idade!')
} else {
    console.log('Você é menor de idade!')
}   


// Se média >= 7, Aprovado
// Se média < 7,  e média >= 5, Recuperação
// Se média < 5, Reprovado

console.clear(); // Limpando as saídas anteriores

let media = 7;

if (media >= 7) {
    console.log ('Aprovado');
} else if (media < 7 && media >= 5) {
    console.log ('Recuperação');
} else {
    console.log ('Reprovado');
}

