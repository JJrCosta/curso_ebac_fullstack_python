const listaAtividades = [];
const listaNotas = [];
const notaMinima = parseFloat(prompt('Informe a nota de corte (0 à 10):'))
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

    if (listaAtividades.includes(nomeAtividade.value)) {
        alert('Atividade já incluída.')
    } else {
        listaAtividades.push(nomeAtividade.value);
        listaNotas.push(parseFloat(notaAtividade.value));

        let linha = '<tr>';
        linha += `<td>${nomeAtividade.value}</td>`;
        linha += `<td>${notaAtividade.value}</td>`;
        linha += `<td><img src="./img/${notaAtividade.value >= notaMinima ? 'aprovado' : 'reprovado'}.png"></td>`;
        linha += '</tr>';

        linhas += linha;
    }
    
    nomeAtividade.value = '';
    notaAtividade.value = '';
}

function adicionaLinha() {
    const novaLinha = document.getElementById('tabela');
    novaLinha.innerHTML = linhas;
}

function atualizaMedias() {
    const notaMedia = calculaMedia();

    document.getElementById('nota-final').innerHTML = notaMedia.toFixed(1)
    document.getElementById('status-final').innerHTML = notaMedia >= notaMinima ? '<span class="aprovado">Aprovado</span>' : '<span class="reprovado">Reprovado</span>'
}

function calculaMedia() {
    let somaNotas = 0;

    for (let i = 0; i < listaNotas.length; i++) {
        somaNotas += listaNotas[i];
    }
    return somaNotas/listaNotas.length;
}