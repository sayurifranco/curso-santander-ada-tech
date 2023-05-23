// ARRAYS

// COMO CRIAR UM ARRAY?

let arr = ['Leticia', 30, 1.54, true];

// 0, 1, 2, 3
console.log(arr);


// COMO ACESSAR OS ELEMENTOS DO ARRAY

console.log('Primeiro elemento: ', arr[0]);
console.log('Segundo elemento: ', arr[1]);
console.log('Terceiro elemento: ', arr[2]);
console.log('Quarto elemento: ', arr[3]);

// COMO OBTER O TAMANHO DO ARRAY

console.log('Tamanho do array: ', arr.lenght);

// PERCORRENDO ARRAYS

for (let i = 0; i < arr.lenght; i++) {
    console.log(arr[i]);
}

console.clear();

for (let elemento of arr) {
    console.log(elemento);
}

console.clear();

for (let indice in arr) {
    console.log(indice);
}