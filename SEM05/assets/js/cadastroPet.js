
document.querySelector('form')
.addEventListener("submit", adicionarPet)

function adicionarPet(event) {
    event.preventDefault()

    const foto = document.getElementById('foto').value

    const inputNome = document.getElementById('nome').value

    const inputIdade = document.getElementById('idade').value

    const inputColor = document.getElementById('color').value

    const textareaDescricao = document.getElementById('descricao').value

    const selectEspecie = document.getElementById('especie').value

    const spanNome = document.getElementById("error-nome")

    console.log(inputNome)

    if(foto === '') {
        document.getElementById('foto').style.borderColor = "red"
        document.getElementById('foto').style.borderWidth = "2px"
        document.getElementById('error-foto').innerText = "Este campo é obrigatorio"
    }

    if(inputNome === '') {
        document.getElementById('nome').style.borderColor = "red"
        document.getElementById('nome').style.borderWidth = "2px"
        document.getElementById('error-nome').innerText = "Este campo é obrigatorio"
    }

    console.log("pet adicionado")
}

