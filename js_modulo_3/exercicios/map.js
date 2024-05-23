let numeros = [1, 2, 3, 4, 5];

// Multiplicar cada número por 2
let numerosDobrados = numeros.map(numero => numero * 2);
console.log(numerosDobrados); // Saída: [2, 4, 6, 8, 10]

// Transformar cada número em uma string
let numerosComoString = numeros.map(numero => String(numero));
console.log(numerosComoString); // Saída: ["1", "2", "3", "4", "5"]




/*Retorne uma nova array com o id do produto, nome, tamanho e preço unitário que terá o acréscimo de 1.15 sobre o valor dos produtos.*/
 
  let produtos = [
    { id: 123, nome: 'Camiseta', cor: 'azul', tamanho: 'P', categoria: 'Vestuário', estoque: 10, disponivel: true, precoUnitario: 15 },
    { id: 125, nome: 'Regata', cor: 'azul', tamanho: 'GG', categoria: 'Vestuário', estoque: 0, disponivel: false, precoUnitario: 20 },
    { id: 456, nome: 'Calça', cor: 'preto', tamanho: 'GG', categoria: 'Vestuário', estoque: 1, disponivel: true, precoUnitario: 15 },
    { id: 982, nome: 'Tênis', cor: 'amarelo', tamanho: '38', categoria: 'Esportes', estoque: 2, disponivel: true, precoUnitario: 125 }
];

let listaNovosPrecos = produtos.map(produto => {
    return {
        id: produto.id,
        nome: produto.nome,
        tamanho: produto.tamanho,
        precoUnitario: produto.precoUnitario * 1.15
    };
});

console.log(listaNovosPrecos)

