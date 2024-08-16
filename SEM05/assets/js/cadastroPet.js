
document.querySelector('form')
.addEventListener("submit", adicionarPet)

document.querySelector('input')
.addEventListener("click", limparErrors)

document.querySelector('textarea')
.addEventListener("click", limparErrors)

document.querySelector('select')
.addEventListener("click", limparErrors)

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

    if(inputColor === '#000000') {
        document.getElementById('color').style.borderColor = "red"
        document.getElementById('color').style.borderWidth = "2px"
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

    if(foto !== '' && inputNome !== '' && inputIdade !== '' && textareaDescricao !== '' && selectEspecie !== '') {
        const pet = {
            id: crypto.randomUUID(),
            foto: foto,
            nome: inputNome,
            idade: inputIdade,
            color: inputColor,
            descricao: textareaDescricao,
            especie: selectEspecie
        }

        const pets = JSON.parse(localStorage.getItem('pets')) || []

        pets.push(pet)

        localStorage.setItem('pets', JSON.stringify(pets))

        /* document.getElementById('foto').value = ''
        document.getElementById('nome').value = ''
        document.getElementById('idade').value = ''
        document.getElementById('color').value = '#000000'
        document.getElementById('descricao').value = ''
        document.getElementById('especie').value = '' */

        // limpando formulario
        document.getElementById('form-pet').reset();

        alert('Pet cadastrado com sucesso!')

        console.log(pets)
    }
}

function limparErrors() {
    document.getElementById('foto').style.borderColor = ""
    document.getElementById('foto').style.borderWidth = ""
    document.getElementById('error-foto').innerText = ""

    document.getElementById('nome').style.borderColor = ""
    document.getElementById('nome').style.borderWidth = ""
    document.getElementById('error-nome').innerText = ""

    document.getElementById('idade').style.borderColor = ""
    document.getElementById('idade').style.borderWidth = ""
    document.getElementById('error-idade').innerText = ""

    document.getElementById('color').style.borderColor = ""
    document.getElementById('color').style.borderWidth = ""

    document.getElementById('descricao').style.borderColor = ""
    document.getElementById('descricao').style.borderWidth = ""
    document.getElementById('error-descricao').innerText = ""

    document.getElementById('especie').style.borderColor = ""
    document.getElementById('especie').style.borderWidth = ""
    document.getElementById('error-especie').innerText = ""
}

