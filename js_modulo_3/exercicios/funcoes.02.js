/* Exercícios de Cursos de Programação:
Crie uma Lista de Cursos:
Crie um array de objetos representando diferentes cursos de programação, cada objeto deve conter informações como o título do curso, a duração, o nível de dificuldade e a linguagem de programação associada.
Filtrando Cursos por Nível de Dificuldade:
Escreva uma função que receba a lista de cursos e um nível de dificuldade e retorne apenas os cursos que correspondam a esse nível.*/

const cursos = [
    { titulo: "JavaScript Básico", duracao: "4 semanas", nivel: "Iniciante", linguagem: "JavaScript" },
    { titulo: "Node.js Avançado", duracao: "6 semanas", nivel: "Avançado", linguagem: "JavaScript" },
    { titulo: "Python para Data Science", duracao: "8 semanas", nivel: "Intermediário", linguagem: "Python" },
];


function filtrarPorNivel (curso, nivel) {

    let nivelamento = cursos.filter(curso => curso.nivel === "Iniciante")
    return nivelamento

}

let cursosIniciantes = filtrarPorNivel(cursos, "Iniciante")

console.log(cursosIniciantes)