// Exemplos
let saldoConta = 1000
let pixDestinatario = parseFloat(prompt("Digite seu pix: "))
let valorPix = parseFloat(prompt("Digite o valor do pix: "))

if( valorPix <= saldoConta) {
  console.log("Transferencia efetuada")
  let saldoAtual = saldoConta - valorPix
  console.log("Saldo Atual: R$" + saldoAtual)
}
else {
  console.log("Saldo Insuficiente")
}

////////

var letra = prompt("Digite uma letra:");

if (letra.length === 1 && "aeiouAEIOU".includes(letra)) {
    console.log("É uma vogal");
} else {
    console.log("Não é uma vogal");
}

/////////

var letra = prompt("Digite uma letra").toLowerCase()
if(letra == 'a' || letra == 'e' || letra == 'i' || letra == 'o' || letra == 'u' ){
   console.log("Vogal")
}else{
   console.log("Letra digitada não é uma vogal")
}

//////////

var letterTyped = prompt('digite uma letra').toLowerCase()
var vowels = ["a", "e", "i", "o", "u"]

if( letterTyped[0].includes( ...vowels ) ){
  console.log("a letra é uma vogal")
} else {
  console.log("a letra não é uma vogal")
}

// https://codepen.io/DOUGLAS-CAVALCANTE-the-animator/pen/ZEdOZgw?editors=0011

// https://codepen.io/DOUGLAS-CAVALCANTE-the-animator/pen/VwJjOpp?editors=0011

//////////////

var name = prompt("qual seu nome?")
var age = parseInt(prompt("qual sua idade?"))


// dessa forma não precisa usar o else, pois o return nesse caso funciona de maneira parecida
function yourAge(){
    if( !name ) return "digite um nome válido"
    if( isNaN(age) ) return "digite uma idade válida"

    if( age < 13 )              return `${name}, Você é uma criança`
    if( age >= 13 && age <= 17) return `${name}, Você é um adolescente`
    if( age >= 18 && age <= 64) return `${name}, Você é um adulto`
    if( age > 64)               return `${name}, Você é um idoso`

}

console.log( yourAge() )