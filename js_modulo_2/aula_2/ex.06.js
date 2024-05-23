//Condicionais

const a1 = 15
const a2 = 15
const a3 = 15

const etriangulo = a1 + a2 + a3 === 180

if (etriangulo && a1 === a2 && a2 === a3) {
    return console.log("Esse triângulo é equilátero.")
}
else if (etriangulo && a1 === a2 || a1 === a3 || a2 ===a3) {
    return console.log("Esse triângulo é isósceles.")
}
else if (etriangulo && a1 !== a2 && a2!== a3) {
    return console.log("Esse triângulo é escaleno.")
}
else {
    console.log("Esses ângulos não formam um triângulo.")
}
   
