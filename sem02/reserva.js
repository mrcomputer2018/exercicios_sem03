

/* const numeroHospedes = parseInt(prompt("Digite o numero de hospedes:"))

if(numeroHospedes === 1) {
   alert("quarto 1")
}
else if (numeroHospedes === 2) {
    alert("quarto 2")
}
else {
    alert("Nao tem quarto disponivel")
} */

/*2-faça um algoritmo que receba dois números e ao final mostre a soma, subtração, multiplicação e a divisão dos números lidos */

const numeroUm = parseInt(prompt("Digite um numero:"))
const numeroDois = parseInt(prompt("Digite outro numero:"))

const operacao = prompt("Digite a operação: ")

if(operacao === "soma"){
    const soma = numeroUm + numeroDois
    console.log(soma)
}
else if (operacao === "subtracao") {
    const subtracao = numeroUm - numeroDois
    console.log(subtracao)
}
else if (operacao === "divisao") {
    const divisao = numeroUm / numeroDois
    console.log(divisao)
}
else if (operacao === "multiplicacao") {
    const divisao = numeroUm / numeroDois
    console.log(divisao)
}
else {
    console.log("Esta operacao nao existe.")
}
