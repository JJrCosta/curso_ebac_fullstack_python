const form = document.querySelector('.valida-form');
const campoA = document.querySelector('.campo-a');
const campoB = document.querySelector('.campo-b');

function validaCampo() {
    
    if (campoA.value != '' && campoB.value != '') {
        document.querySelector('input').style = ''
        if (campoB.value > campoA.value) {
            document.querySelector('.msg').classList.remove('error')
            document.querySelector('.msg').classList.add('success');
            document.querySelector('.msg').innerHTML = '<p>Sucesso na validação!</p>';
        } else {
            document.querySelector('.msg').classList.remove('success')
            document.querySelector('.msg').classList.add('error');
            document.querySelector('.msg').innerHTML = '<p>Falha na validação!</p>';
        }
    } else {
        document.querySelector('.msg').classList.remove('success');
        document.querySelector('.msg').classList.add('error');
        document.querySelector('.msg').innerHTML = '<p>Preencha os campos vazios.</p>';
        document.querySelector('input').style.border = '2px solid red';
    }
    campoA.value = '';
    campoB.value = '';
}

form.addEventListener('submit', function(e) {
    e.preventDefault();
    validaCampo()
})
