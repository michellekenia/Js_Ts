/*Escreva uma função chamada compararNumero que receberá dois parâmetros,
em seguida, retorne o número que for maior.
O retorno deverá conter essa mensagem:
"O maior número entre 5 e 10 é 10"
Passo a passo da função:
Criar função compararValor(parametro1, parametro2)
Inserir uma condição onde parametro1 é maior que parametro dois?
Se a condição for verdadeira, retornar "O maior número entre 5 e 10 é 10"
Se for falsa, retornar que a segundo parametro é maior que o primeiro. */


function compararNumero (parametro1, parametro2) {
    if(parametro1 > parametro2){
        return `O número ${parametro1} é maior que o número ${parametro2}.`
    } else if (parametro2 > parametro1) {
        return `O número ${parametro2} é maior que o número ${parametro1}.`
    } else {
        return `Os números são iguais.`
    }
}

let obterResultado = compararNumero(10,20)

console.log(obterResultado)

let estudantes = (estudante) => console.log(estudante)
estudantes("Jess")