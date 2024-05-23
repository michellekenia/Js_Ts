
let totalValor = investmentos.reduce((total, investimento) =>{


    let { principal, taxa } = investimento; 
 
    let totalAnos = 5
    let montanteTotal = principal * Math.pow((1 + taxa ),totalAnos)
 
     return total + montanteTotal
 }, 0)
 
 console.log(totalValor)
