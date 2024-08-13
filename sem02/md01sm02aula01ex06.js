/* Crie um algoritmo que solicite dois números e uma operação do usuário (+, -, *, /). Use um switch
para realizar a operação correspondente. Exibir o resultado da operação. */

const primeiroNumero = parseFloat(prompt("Digite o primeiro número: "));
const segundoNumero = parseFloat(prompt("Digite o segundo número: "));
const operacao = prompt("Digite a operação (+, -, *, /): ");

const isOperationValid = (operation) => operation === "+" || operation === "-" || operation === "*" || operation === "/";

if(isNaN(primeiroNumero) || isNaN(segundoNumero)){
    console.log("Digite um número válido")
}
else if(!isOperationValid(operacao)){
    console.log("Digite uma operação válida")
}
else {
    switch(operacao){
        case "+":
            console.log(primeiroNumero + segundoNumero)
            break;
        case "-":
            console.log(primeiroNumero - segundoNumero)
            break;
        case "*":
            console.log(primeiroNumero * segundoNumero)
            break;
        case "/":
            console.log(primeiroNumero / segundoNumero)
            break;
    }
}   