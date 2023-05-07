document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('sorteador').addEventListener('submit', function(e) {
        let qtdNumeros = Number(document.getElementById('qtd-numeros').value);
        let maxNumero = Number(document.getElementById('max-numero').value);
        let numeroAleatorio = 0;
        const numerosSorteados = [];
        document.getElementById('sorteados').innerHTML = "";
        e.preventDefault();

        for (let i = 0; i < qtdNumeros; i++) {
            numeroAleatorio = Math.floor(Math.random() * maxNumero) + 1;
            numerosSorteados.push(numeroAleatorio);
        }

        // Bubble Sort
        for (let i = 0; i < numerosSorteados.length - 1; i++) {
            for (let j = 0; j < numerosSorteados.length - i - 1; j++) {
                if (numerosSorteados[j] > numerosSorteados[j + 1]) {
                    // Swap
                    let temp = numerosSorteados[j];
                    numerosSorteados[j] = numerosSorteados[j + 1];
                    numerosSorteados[j + 1] = temp;
                }
            }
        }

        for (let i = 0; i < numerosSorteados.length; i++) {
            if (numerosSorteados[i] < 10) {
                document.getElementById('sorteados').innerHTML += `<span class="numero">0${numerosSorteados[i]}</span>` + "  ";
            } else {
                document.getElementById('sorteados').innerHTML += `<span class="numero">${numerosSorteados[i]}</span>` + "  ";
            }
        }

        document.getElementById('qtd-numeros').value = "";
        document.getElementById('max-numero').value = "";
    })
})