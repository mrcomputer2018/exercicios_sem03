const form = document.querySelector('form')

function adicionarPet(event) {
    event.preventDefault()

    const inputNome = document.getElementById('nome')

    const inputIdade = document.getElementById('idade')

    const inputColor = document.getElementById('color')

    const textareaDescricao = document.getElementById('descricao')

    console.log("pet adicionado")
}

form.addEventListener("submit", adicionarPet)