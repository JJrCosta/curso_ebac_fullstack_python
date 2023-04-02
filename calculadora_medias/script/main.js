const listaNotas = [];
let linhas = ''

document.getElementById('form').addEventListener('submit', function(e) {
    e.preventDefault();

    criaLinha();
    adicionaLinha();
    atualizaMedias();
})

function criaLinha() {
    const nomeAtividade = document.getElementById('nome-atividade');
    const notaAtividade = document.getElementById('nota-atividade');

    listaNotas.push(parseFloat(notaAtividade.value));

    let linha = '<tr>';
    linha += `<td>${nomeAtividade.value}</td>`;
    linha += `<td>${notaAtividade.value}</td>`;
    linha += `<td><img src="./img/${notaAtividade.value >= 7 ? 'aprovado' : 'reprovado'}.png"></td>`;
    linha += '</tr>';

    linhas = linha;

    nomeAtividade.value = '';
    notaAtividade.value = '';
}

function adicionaLinha() {
    document.getElementById('tabela').innerHTML += linhas;
}

function atualizaMedias() {
    const notaMedia = calculaMedia();

    document.getElementById('nota-final').innerHTML = notaMedia
    document.getElementById('status-final').innerHTML = notaMedia >= 7 ? '<span class="aprovado">Aprovado</span>' : '<span class="reprovado">Reprovado</span>'
}

function calculaMedia() {
    let somaNotas = 0;

    for (let i = 0; i < listaNotas.length; i++) {
        somaNotas += listaNotas[i];
    }
    return somaNotas/listaNotas.length;
}
