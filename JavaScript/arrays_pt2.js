// ARRAYS PARTE 2 - MÉTODOS DE ARRAYS

let arr1 = [30, 12, 45, 34, 29];
let arr2 = [];

// FATIAMENTO - SLICE

console.log(arr1.slice(0, 2));
console.log(arr1.slice(2));

// ADICIONANDO ELEMENTOS: PUSH | UNSHIFT

console.log('Antes de adicionar com o push: ', arr2);

arr2.push(10, 20, 30);
arr2.push(40);

console.log('Depois de adicionar com o push: ', arr2);

console.log('Antes de adicionar com unshift: ', arr2);

arr2.unshift(50);

console.log('Depois de adicionar com unshift: ', arr2);

// REMOVENDO ELEMENTOS: POP | SHIFT

console.log('Antes de remover com o pop: ', arr2);

const elementoRemovido = arr2.pop();

console.log('Depois de remover com o pop: ', arr2);
console.log('O elemento removido foi ', elementoRemovido);

console.log('Antes de remover com o shift: ', arr2);

arr2.shift();

console.log('Depois de remover com o shift: ', arr2);

console.clear();

// CONCATENANDO ARRAYS: CONCAT

console.log('arr1', arr1);
console.log('arr2', arr2);

console.log(arr1.concat(arr2));
console.log(arr2.concat(arr1));

console.clear();

// BUSCANDO ELEMENTOS: indexOf | lastIndexOf

console.log(arr1);

let indiceDoElemento34 = arr1.indexOf(34);
console.log(indiceDoElemento34);

let indiceDoElemento35 = arr1.indexOf(35);
console.log(indiceDoElemento35);

let arr3 = [1, 2, 3, 3, 5, 3];

console.log(arr3.indexOf(3)); // primeiro 3 no índice 2
console.log(arr3.lastIndexOf(3)); // último 3 no índice 2

console.clear();

// DESCOBRINDO A EXISTÊNCIA DE UM ELEMENTO: INCLUDES    

console.log(arr1);

console.log(arr1.includes(10)); // não tem 10 na array
console.log(arr1.includes(12)); // tem 12 na array

// INVERTENDO ARRAYS: REVERSE

const arrInvertido = arr1.reverse();

console.log(arrInvertido);