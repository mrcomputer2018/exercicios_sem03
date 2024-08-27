const numeros = [1, 2, 3, 4, 5];

const numrosPares = []

const numerosPares = numeros.map((numero) => {
    if(numero % 2 === 0) {
        numerosPares.push(numero);
    }
})

console.log(numerosPares); // [2, 4]