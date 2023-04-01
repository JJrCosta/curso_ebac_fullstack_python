const valorA = document.querySelector('.campo-a').value;
const valorB = document.querySelector('.campo-b').value;
let verificaCampo = document.querySelectorAll('input');

document.addEventListener('focusout', (verificaCampo) => {
    if (verificaCampo) {
        document.querySelector('input').classList.add('vazio-invalido');
    }
}) 