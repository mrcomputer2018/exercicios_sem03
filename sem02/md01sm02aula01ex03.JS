/* Neste exercício, você criará um programa em JavaScript que solicitará ao usuário a entrada de quatro
notas. O objetivo do programa é somar essas notas e determinar se o usuário está de recuperação ou se
passou o ano. Se a soma das quatro notas for menor que 24, o usuário estará de recuperação; caso
contrário, ele terá passado
Passos do Exercício:
1. Solicitar Notas: O programa deve usar a função prompt para pedir ao usuário que insira quatro notas, uma por vez.
2. Verificar Validade das Notas: Após a entrada de cada nota, o programa deve verificar se os valores inseridos são
números válidos.
3. Calcular a Soma: Se todas as entradas forem válidas, o programa deve somar as quatro notas.
4. Determinar o Resultado: Com base na soma das notas, o programa deve exibir uma mensagem indicando se o
usuário está de recuperação ou se passou. */

const primeiraNota = parseFloat(prompt("Digite a primeira nota:"))
const segundaNota = parseFloat(prompt("Digite a segunda nota:"))
const terceiraNota = parseFloat(prompt("Digite a terceira nota:"))
const quartaNota = parseFloat(prompt("Digite a quarta nota:"))

if(isNaN(primeiraNota) || isNaN(segundaNota) || isNaN(terceiraNota) || isNaN(quartaNota)) {
    console.log("Os valores são invalidos!!!")
}

const notaTotal =  primeiraNota + segundaNota + terceiraNota +  quartaNota

if(notaTotal < 24) {
    console.log("reprovado")
}
else {
    console.log("Aprovado")
}
