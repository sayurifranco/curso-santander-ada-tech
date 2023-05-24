// OBJETOS

// COMO CRIAR UM OBJETO NO JAVASCRIPT?

let pessoa = {
    nome: 'Leticia',
    idade: 30,
}

console.log(pessoa);
console.log(pessoa.nome);
console.log(pessoa['nome']);
console.log(pessoa.idade);

// COMO ADICIONAR UM PAR CHAVE-VALOR?

pessoa.altura = 1.55;

console.log(pessoa);


// COMO REMOVER UM PAR CHAVE-VALOR?

delete pessoa.altura;

console.log(pessoa);

// COMO PERCORRER?

for (let chave in pessoa) {
    console.log(chave)
}