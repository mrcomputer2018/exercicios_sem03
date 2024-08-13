/* 
    Crie uma função que retorne quanto de juros uma pessoa irá pagar e valor total do empréstimo
    usando juros simples.
    j = c . i . t
    m = c + j
*/

const form = document.querySelector('form');

const prev = document.querySelector('prev');

form.addEventListener("submit", function (event) {
    event.preventDefault();

    const capital = parseFloat(document.getElementById('capital').value);
    const taxa = parseFloat(document.getElementById('taxa').value);
    const tempo = parseFloat(document.getElementById('tempo').value);

    //validando capital
    if (capital === '') {
        prev.innerHTML = '<div class="alert alert-danger mt-5" role="alert">Capital não informado</div>';
        return;
    }

    //validando taxa
    if (taxa === '') {
        prev.innerHTML = '<div class="alert alert-danger mt-5" role="alert">Taxa não informada</div>';
        return;
    }

    //validando tempo
    if (tempo === '') {
        prev.innerHTML = '<div class="alert alert-danger mt-5" role="alert">Tempo não informado</div>';
        return;
    }

    const juros = calcularJuros(capital, taxa, tempo);
    const total = calcularTotal(capital, juros);
   
    prev.innerHTML = `
        <div class="modal" tabindex="-1">
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title">Resultados:</h5>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body">
                        <p>Juros: R$${juros.toFixed(2)}</p>
                        <p>Total: R$${total.toFixed(2)}</p>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-primary" data-bs-dismiss="modal">OK</button>
                    </div>
                </div>
            </div>
        </div>
    `;

    const modal = new bootstrap.Modal(document.querySelector('.modal'));
    modal.show();

});

form.addEventListener("reset", function () {
    prev.innerHTML = '';
});

function calcularJuros(capital, taxa, tempo) {
    taxa = taxa / 100;
    return capital * taxa * tempo;
}

function calcularTotal(capital, juros) {
    return parseFloat(capital) + parseFloat(juros);
}