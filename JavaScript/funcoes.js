// FUNÇÕES

// Para reaproveitar trechos de código. Facilitar manutenção

// COMO ENVIAR PARÂMETROS PARA AS FUNÇÕES?

function saudacao(nome, curso='JavaScript') {
    console.log(`Olá, ${nome}! Seja bem-vindo(a) ao nosso curso básico de ${curso}!`)
}

saudacao('Leticia')
saudacao('Marcos', 'HTML & CSS')

// RETORNO DA FUNÇÃO

function soma(numero1, numero2) {
    console.log('Soma =', numero1 + numero2)
}

soma(10, 20)

function soma(numero1, numero2) {
    return numero1 + numero2
}

const resultado = soma(10, 20);

console.log(`A média dos dois valores é: ${resultado/2}`);

console.clear();

function maiorDoQue50 (numero) {
    if (numero > 50) {
        return true
    } 
    return false
}

maiorDoQue50 (51);
