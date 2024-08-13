const prompt = require("prompt-sync")();

switch (prompt("Digite o número da operação desejada: \n" +
        "1 - Área do Triângulo \n" + 
        "2 - Perimetro do Triangulo \n" + 
        "3 - Area do Retangulo.\n\n")) {
    case "1":
        const base = parseFloat(prompt("Digite o valor da base: "));
        const altura = parseFloat(prompt("Digite o valor da altura: "));
        console.log(`A área do triângulo é: ${areaTriangulo(base, altura)}`);
        break;
    case "2":
        const lado1 = parseFloat(prompt("Digite o valor do lado 1: "));
        const lado2 = parseFloat(prompt("Digite o valor do lado 2: "));
        const lado3 = parseFloat(prompt("Digite o valor do lado 3: "));
        console.log(`O perimetro do triângulo é: ${perimetroTriangulo(lado1, lado2, lado3)}`);
        break;
    case "3":
        const baseRetangulo = parseFloat(prompt("Digite o valor da base: "));
        const alturaRetangulo = parseFloat(prompt("Digite o valor da altura: "));
        console.log(`A área do retângulo é: ${areaRetangulo(baseRetangulo, alturaRetangulo)}`);
        break;
    case "4":
        const baseRetangulo2 = parseFloat(prompt("Digite o valor da base: "));
        const alturaRetangulo2 = parseFloat(prompt("Digite o valor da altura: "));
        console.log(`O perimetro do retângulo é: ${perimetroRetamgulo(baseRetangulo2, alturaRetangulo2)}`);
        break;
    default:
        console.log("Opção inválida");
        break;
}

function areaTriangulo(base, altura){
    return (base * altura) / 2;
}

function perimetroTriangulo(lado1, lado2, lado3){
    return lado1 + lado2 + lado3;
}

function areaRetangulo(base, altura){
    return base * altura;
}

function perimetroRetamgulo(base, altura) {
    return 2 * (base + altura);
}