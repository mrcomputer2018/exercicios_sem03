function cadastrarGato(event) {
    event.preventDefault()

    const name         = document.getElementById('catName').value
    const age          = document.getElementById('catAge').value
    const description  = document.getElementById('catDescription').value
    const image        = document.getElementById('catImage').value
    const color        = document.getElementById('catColor').value

    const cat  = {
        name, 
        age, 
        description, 
        image, 
        color
    }

    const cats = []

    cats.push(cat)

    localStorage.setItem('perfil', JSON.stringify(cats))
}

function alterarImagem(event) {
    const valorUrl = event.srcElement.value
    // const img = document.getElementById('catImage').value
    document.getElementById('catImagePreview').src = valorUrl
    document.getElementById('catImagePreview').style.borderRadius = '50%'    
}

document
.getElementById("catForm")
.addEventListener("submit", cadastrarGato )

document
.getElementById("catImage")
.addEventListener("input", alterarImagem)   