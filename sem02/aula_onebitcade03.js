// and &&
// or ||

let idade = 18;
let paisPresentes = false;
let comprouBilhete = false;

const podeViajar = (idade >= 18 || paisPresentes) && comprouBilhete;

console.log(`Pode viajar: ${podeViajar}`);

//switch
let paisDeOrigem = prompt("Qual o seu país de origem?");

switch (paisDeOrigem) { 
    case "Brasil":
        console.log("Você é Brasileiro");
        break;
    case "EUA":
        console.log("Você é Americano");
        break;
    default:
        console.log("Você é Estrangeiro");
}

//Estruturas de repetição
//for
for (let i = 0; i <= 10; i++) {
    console.log(i);
}

//while
let a = 0;

while (a <= 10) {
    console.log(a);
    a++;
}

//do while
let i = 0;
do {
    console.log(i);
    i++;
}
while (i <= 10);
