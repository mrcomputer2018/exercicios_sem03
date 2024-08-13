/* Passos:
1. Solicitar Peso e Altura: Peça ao usuário para inserir seu peso (em kg) e altura (em metros)
usando a função prompt.
2. Calcular o IMC: Use a fórmula IMC = peso / (altura * altura) para calcular o IMC.
3. Classificar o IMC: Com base no valor do IMC, classifica em:
○ Abaixo do peso: IMC < 18.5
○ Peso normal: 18.5 ≤ IMC < 24.9
○ Sobrepeso: 24.9 ≤ IMC < 29.9
○ Obesidade grau 1: 29.9 ≤ IMC < 34.9
○ Obesidade grau 2: 34.9 ≤ IMC < 39.9
○ Obesidade grau 3: IMC ≥ 40
4. Mostrar Resultado: Exiba o IMC calculado e a classificação correspondente. */

const peso = parseFloat(prompt("Digite seu peso (em kg):"))

const altura = parseFloat(prompt("Digite sua altura (em metros):"))

const isNumberPositive = (number) => number > 0

if(isNaN(peso) || isNaN(altura)){
   alert("Digite um número válido")
}
else if(!isNumberPositive(peso) || !isNumberPositive(altura)){
   alert("Digite um número positivo")
}
else {
    const IMC = peso / (altura * altura)

    if(IMC > 0 && IMC < 18.5){
       alert(`IMC: ${IMC.toFixed(2)} - Abaixo do peso`)
    }
    else if(IMC >= 18.5 && IMC < 24.9){
       alert(`IMC: ${IMC.toFixed(2)} - Peso normal`)
    }
    else if(IMC >= 24.9 && IMC < 29.9){
       alert(`IMC: ${IMC.toFixed(2)} - Sobrepeso`)
    }
    else if(IMC >= 29.9 && IMC < 34.9){
       alert(`IMC: ${IMC.toFixed(2)} - Obesidade grau 1`)
    }
    else if(IMC >= 34.9 && IMC < 39.9){
       alert(`IMC: ${IMC.toFixed(2)} - Obesidade grau 2`)
    }
    else{
       alert(`IMC: ${IMC.toFixed(2)} - Obesidade grau 3`)
    }   
}

// Fim do código.