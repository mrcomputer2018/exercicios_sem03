function calcularMediaNotas(notaUm, notaDois, notaTres, notaQuatro) {
    var mediaNotas = (notaUm + notaDois + notaTres + notaQuatro) / 4
    return mediaNotas
}

const form = document.getElementById('calculadora');

const prev = document.querySelector('prev');

const input = document.querySelector('input');

form.addEventListener('submit', function (event) {
    event.preventDefault()

    const primeiraNota = parseFloat(document.getElementById('primeiraNota').value)
    const segundaNota = parseFloat(document.getElementById('segundaNota').value)
    const terceiraNota = parseFloat(document.getElementById('terceiraNota').value)
    const quartaNota = parseFloat(document.getElementById('quartaNota').value)

    //validando se os campos sao numeros
    if (isNaN(primeiraNota) || isNaN(segundaNota) || isNaN(terceiraNota) || isNaN(quartaNota)) {
        prev.innerHTML = '<div class="alert alert-danger mt-5" role="alert">Digite um numero!!!</div>'
        return
    }

    // validando notas
    if((primeiraNota < 0 || primeiraNota > 10) || (segundaNota < 0 || segundaNota > 10) || (terceiraNota < 0 || terceiraNota > 10) || (quartaNota < 0 || quartaNota > 10)) {
        prev.innerHTML = '<div class="alert alert-danger mt-5" role="alert">Nota invalida!!!</div>'
        return
    }

    if(primeiraNota === '' || segundaNota === '' || terceiraNota === '' || quartaNota === '') {
        prev.innerHTML = '<div class="alert alert-danger mt-5" role="alert">Nota não informada!!!</div>'
        return
    }

    const media = calcularMediaNotas(primeiraNota, segundaNota, terceiraNota, quartaNota)

    alert(media)

    if(media > 0 && media < 5) { 
        prev.innerHTML = `
            <div class="modal" tabindex="-1">
                <div class="modal-dialog">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title">Media do Aluno:</h5>
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div class="modal-body">
                            <p>
                                <strong>${media.toFixed(2)}</strong>
                                <span class="badge text-bg-danger ms-2">Reprovado</span>
                            </p>
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-primary" data-bs-dismiss="modal">OK</button>
                        </div>
                    </div>
                </div>
            </div>
        `;
    }
    else if(media >= 5 && media < 7) {
        prev.innerHTML = `
            <div class="modal" tabindex="-1">
                <div class="modal-dialog">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title">Media do Aluno:</h5>
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div class="modal-body">
                            <p>
                                <strong class="me-1">${media.toFixed(2)}</strong>
                                <span class="badge text-bg-danger ms-2">
                                    em Recuperação
                                </span>
                            </p>
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-primary" data-bs-dismiss="modal">OK</button>
                        </div>
                    </div>
                </div>
            </div>
        `;
    }
    else if(media >= 7 && media <= 10) { 
        prev.innerHTML = `
            <div class="modal" tabindex="-1">
                <div class="modal-dialog">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title">Media do Aluno:</h5>
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div class="modal-body">
                            <p>
                                <strong>${media.toFixed(2)}</strong> 
                                <span class="badge text-bg-success ml-2">Aprovado</span>
                            </p>
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-primary" data-bs-dismiss="modal">OK</button>
                        </div>
                    </div>
                </div>
            </div>
        `;
    }

    const modal = new bootstrap.Modal(document.querySelector('.modal'));
    modal.show();
})

form.addEventListener("reset", function () {
    prev.innerHTML = '';
});

input.addEventListener("click", function () {
    prev.innerHTML = '';
});