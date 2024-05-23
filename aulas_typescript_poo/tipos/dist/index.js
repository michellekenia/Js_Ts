"use strict";
// let nome = "Lisandra"
// let nome: string
// nome = "Lisandra"
// console.log("Olá")
//Sem definir um tipo pro array 
const produtos1 = ["camisa", "calça", 7];
//Definindo um tipo pro array
const produtos2 = ["camisa", "calça"];
const produtos3 = ["string", "numeros", 100];
//tuplas são estruturas de arrays mais rígidas, onde a ordem do tipo é necessária
let pessoa;
pessoa = ["João", 25];
//Enum
var DiasDaSemana;
(function (DiasDaSemana) {
    DiasDaSemana["segunda"] = "Segunda feira";
    DiasDaSemana["ter\u00E7a"] = "Ter\u00E7a feira";
    DiasDaSemana["quarta"] = "Quarta feira";
})(DiasDaSemana || (DiasDaSemana = {}));
const diaDeFolga = DiasDaSemana.segunda;
//objeto 
const professora = { nome: "Lis", idade: 30 };
//objeto 
var MateriaisEnum;
(function (MateriaisEnum) {
    MateriaisEnum["historia"] = "Hist\u00F3ria";
    MateriaisEnum["geografia"] = "Geografia";
    MateriaisEnum["matematica"] = "Matem\u00E1tica";
})(MateriaisEnum || (MateriaisEnum = {}));
const bea = {
    nome: "Beatriz",
    idade: 18,
    materias: [MateriaisEnum.geografia, MateriaisEnum.matematica],
    isMatriculado: true,
    documentos: { cpf: "12345", rg: "505050" }
};
//percorrer e mostrar todo o Enum
for (let i in MateriaisEnum) {
    console.log(i);
}
bea.materias.map((el) => console.log(el));
//mostrar o que o objeto bea tem do Enum materias 
