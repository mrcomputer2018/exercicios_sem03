
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

    if(inputIdade === '') {
        document.getElementById('idade').style.borderColor = "red"
        document.getElementById('idade').style.borderWidth = "2px"
        document.getElementById('error-idade').innerText = "Este campo é obrigatorio"
    }

    if(inputColor === '') {
        document.getElementById('color').style.borderColor = "red"
        document.getElementById('color').style.borderWidth = "2px"
        document.getElementById('error-color').innerText = "Este campo é obrigatorio"
    }

    if(textareaDescricao === '') {
        document.getElementById('descricao').style.borderColor = "red"
        document.getElementById('descricao').style.borderWidth = "2px"
        document.getElementById('error-descricao').innerText = "Este campo é obrigatorio"
    }

    if(selectEspecie === '') {
        document.getElementById('especie').style.borderColor = "red"
        document.getElementById('especie').style.borderWidth = "2px"
        document.getElementById('error-especie').innerText = "Este campo é obrigatorio"
    }

    console.log("pet adicionado")
}

