var password = '4321'
var msg = "Digite sua senha"
do {

    var passwordTyped = prompt(msg)

    var samePassword = passwordTyped == password
   
    if( samePassword ) console.log("voce acertou a senha")
    else
    {
        msg = "Senha incorreta tente novamente"
    } 
   

} while ( !samePassword )

// Exemplo02
var senha = 4563

do {
   var senhaDigitada = prompt("Digite a senha")
   
   if(senhaDigitada == senha) {
     alert("Acesso permitido")
   }
   
} while (senhaDigitada != senha)