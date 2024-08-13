/* const cat = localStorage.getItem('perfil') // null

if (cat) {
    const catObj = JSON.parse(cat)

    catObj.forEach(cat => {
        const catName = document.getElementById('catName')
        const catAge = document.getElementById('catAge')
        const catDescription = document.getElementById('catDescription')
        const catImage = document.getElementById('catImage')
        const catColor = document.getElementById('catColor')

        catName.value = cat.name
        catAge.value = cat.age
        catDescription.value = cat.description
        catImage.value = cat.image
        catColor.value = cat.color

        document.getElementById('catImagePreview').src = cat.image
        document.getElementById('catImagePreview').style.borderRadius = '50%'
    })
}
else {
    alert('Não há gato cadastrado')
} */

// https://github.com/DEVinHouse-Clamed-V3/gatopage

function carregarDados() {
   const dados = JSON.parse(localStorage.getItem('perfil'))

    if (dados) {
    
        document.getElementById('name').innerText = cat.name
        document.getElementById('catAge').innerText = cat.age
        document.getElementById('catDescription').innerText = cat.description
        document.getElementById('catImagePreview').src = cat.image
        document.getElementById('catColor').innerText = cat.color
        document.getElementById('catImagePreview').style.borderRadius = '50%'
    
    }
    else {
        alert('Não há gato cadastrado')
    }
}

window.onload = carregarDados
