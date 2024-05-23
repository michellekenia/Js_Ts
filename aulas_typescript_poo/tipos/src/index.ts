// let nome = "Lisandra"

// let nome: string
// nome = "Lisandra"

// console.log("Olá")

//Sem definir um tipo pro array 
const produtos1 = ["camisa", "calça", 7]

//Definindo um tipo pro array
const produtos2: string [] = ["camisa", "calça"]
// const produtos3: number [] = [10, 20]

//o type é uma palavra resercado para se criar um tipo novo 
type novoTipo = Array<string | number>
const produtos3: novoTipo = ["string", "numeros", 100] 

//tuplas são estruturas de arrays mais rígidas, onde a ordem do tipo é necessária
let pessoa: [string, number] 
pessoa = ["João", 25]

//Enum
enum DiasDaSemana {
    segunda = "Segunda feira",
    terça = "Terça feira",
    quarta = "Quarta feira"
}

const diaDeFolga: DiasDaSemana = DiasDaSemana.segunda

//objeto 
const professora: {nome:string, idade: number} = {nome: "Lis", idade: 30}

//objeto 
enum MateriaisEnum {
    historia = "História",
    geografia = "Geografia",
    matematica = "Matemática"
}

//interrogação faz o campo ser opcional 
type AlunoProps = {
    nome: string, 
    idade?: number, 
    materias: MateriaisEnum[],
    isMatriculado: boolean,
    documentos: {cpf: string, rg: string}
}

const bea: AlunoProps = {
    nome: "Beatriz",
    idade: 18,
    materias: [MateriaisEnum.geografia, MateriaisEnum.matematica],
    isMatriculado: true,
    documentos: {cpf: "12345", rg: "505050"}

}

//percorrer e mostrar todo o Enum
for (let i in MateriaisEnum) {
    console.log(i)
}

bea.materias.map((el) => console.log(el))
//mostrar o que o objeto bea tem do Enum materias 

