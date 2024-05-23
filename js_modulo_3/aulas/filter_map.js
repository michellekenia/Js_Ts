// //exemplo carros 
// let carros = [
//   { modelo: "Toyota Corolla", ano: 2020, precoDia: 100, disponivel: true },
//   { modelo: "Honda Civic", ano: 2019, precoDia: 90, disponivel: true },
//   { modelo: "Ford Focus", ano: 2018, precoDia: 80, disponivel: false },
//   { modelo: "Chevrolet Cruze", ano: 2019, precoDia: 85, disponivel: true },
//   { modelo: "Volkswagen Golf", ano: 2020, precoDia: 95, disponivel: true }
// ];

// let carrosDisponiveis = carros.filter(carrosDisponivel => carrosDisponivel.disponivel)
// console.log("filter" , carrosDisponiveis)

// let precoLocacao = carros.map(preco => preco.precoDia)
// console.log("map", precoLocacao)



/*Desafio: Filtrando Investimentos por Taxa
Descrição:
// Suponha que você tenha uma lista de investimentos e deseja filtrá-los com base em uma taxa de juros mínima especificada.

// Investimentos:
// Você possui uma lista de investimentos, onde cada investimento é representado por um objeto com duas propriedades:
// principal (o valor principal do investimento) e taxa (a taxa de juros anual expressa em decimal).*/







const investments = [
    { principal: 1000, taxa: 0.05 },
    { principal: 2000, taxa: 0.03 },
    { principal: 1500, taxa: 0.06 }
  ];

let taxaMinima = 0.06
