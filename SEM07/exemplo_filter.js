const pessoas = [
    { nome: "Ana" },
    { nome: "Bento" },
    { nome: "Monica" },
    { nome: "Eduardo" },
    { nome: "Carlos" },
    { nome: "Waldeir" },
    { nome: "Leandro" },
    { nome: "Luam" },
]
const pessoasfiltradas = pessoas.filter((pessoaAtual) => { 
    return pessoaAtual.nome.includes("a") 
})

console.log(pessoasfiltradas)
