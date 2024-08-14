const form = document.querySelector('form')

form.addEventListener("submit", adicionarPet)

function adicionarPet(event) {
    event.preventDefault()

    const inputNome = document.getElementById('nome').value

    const inputIdade = document.getElementById('idade').value

    const inputColor = document.getElementById('color').value

    const textareaDescricao = document.getElementById('descricao').value

    const selectEspecie = document.getElementById('especie').value

    const spanNome = document.getElementById("error-nome")

    console.log(inputNome)

    if(inputNome === '') {
        inputNome.style.borderColor = "red"
        spanNome.innerText = "Este campo é obrigatorio"
    }

    console.log("pet adicionado")
}

