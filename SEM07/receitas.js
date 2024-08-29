import dadosReceitas from "./receitas.json" with {type: "json"}

function exibirReceitas(){
    // exercício: renderizar a primeira receita no corpo da div
    const receita = dadosReceitas.receitas[0]

    const div = document.getElementById("receita")

    const titulo = document.createElement("h1")
    titulo.innerText = receita.nome
    div.appendChild(titulo)

    const listaIngredientes = document.createElement("ul")
    
    receita.ingredientes.map((ingrediente) => {
        const li = document.createElement("li")
        li.innerText = ingrediente
        listaIngredientes.appendChild(li)
    })

    div.appendChild(listaIngredientes)

    const listaInstrucoes = document.createElement("ul")

    receita.instrucoes.map((instrucao) => {
        const li = document.createElement("li")
        li.innerText = instrucao
        listaInstrucoes.appendChild(li)
    })

    div.appendChild(listaInstrucoes)

    const imagem = document.createElement("img")
    imagem.src = receita.imagem
    imagem.width = '240'

    div.appendChild(imagem)
}

exibirReceitas()

/* function criarDom ({ imagem, nome, ingredientes, instrucoes  }){
    
    const name = document.createElement('h2')
    name.innerText = nome

    const img = document.createElement('img')
    img.src = imagem

    const ingH2 = document.createElement('h2')
    ingH2.innerText = "ingredientes"

    const ingredientesLista = document.createElement('ul')
    
    ingredientes.forEach( ing => {
        const li = document.createElement('li')
        li.innerText = ing
        ingredientesLista.appendChild( li ) 
    })

    const passosH2 = document.createElement('h2')
    passosH2.innerText = "passos"

    const passosLista = document.createElement('ul')
    
    instrucoes.forEach( ing => {
        const li = document.createElement('li')
        li.innerText = ing
        passosLista.appendChild( li ) 
    })

    const div = document.createElement('div')

    div.append(name, img, ingH2, ingredientesLista, passosH2, passosLista)

    return div
}


function exibirreceita( index ){
    const receita = receitas.receitas[ index ]
    if( !receita ) throw Error("essa receita não existe")
    const div = criarDom( receita )

    document.getElementById('receitas').appendChild( div )
}

exibirreceita( 0 ) */


/* function carregarDados() {
    fetch('dados.json')
        .then(response => response.json()) 
        .then(data => {
            renderizarResultado(data);
        })
        .catch(error => console.error('Erro ao carregar o arquivo JSON:', error));
  }
  
  function renderizarResultado(dados) {
    let divResultado = document.getElementById("resultado");
    divResultado.innerHTML = "";
    dados.forEach(item => {
        let itemDiv = document.createElement("div");
        itemDiv.textContent = Sabor: ${item.sabor}, Ingredientes: ${item.ingredientes};
        divResultado.appendChild(itemDiv);
    });
  } */