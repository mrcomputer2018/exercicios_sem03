/* Crie um algoritmo que solicite um número de 1 a 7 do usuário. Use um switch para mapear o
número a um dia da semana. Exemplo: 1: Domingo, 2: Segunda ….. */

const dia = parseInt(prompt("Digite um número de 1 a 7: "));

const isNumberBetween1And7 = (number) => number >= 1 && number <= 7;

if(isNaN(dia)) {
   alert("Digite um número válido")
}
else if(!isNumberBetween1And7(dia)){
   alert("Digite um número entre 1 e 7")
}
else {
    switch(dia){
        case 1:
           alert("Domingo")
            break;
        case 2:
           alert("Segunda")
            break;
        case 3:
           alert("Terça")
            break;
        case 4:
           alert("Quarta")
            break;
        case 5:
           alert("Quinta")
            break;
        case 6:
           alert("Sexta")
            break;
        case 7:
           alert("Sábado")
            break;
    }
}