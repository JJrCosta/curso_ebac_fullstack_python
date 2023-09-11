// Classe abstrata Livro
function Livro(titulo, autor, anoPublicacao, preco) {
    this.titulo = titulo;
    this.autor = autor;
    this.anoPublicacao = anoPublicacao;
    this.preco = preco;
}

// Classe derivada LivroFisico
function LivroFisico(titulo, autor, anoPublicacao, preco, taxaEnvio) {
    Livro.call(this, titulo, autor, anoPublicacao, preco);
    this.taxaEnvio = taxaEnvio;

    this.calcularPrecoFinal = function() {
        return this.preco + this.taxaEnvio;
    }
}

// Classe derivada LivroDigital
function LivroDigital(titulo, autor, anoPublicacao, preco, formato) {
    Livro.call(this, titulo, autor, anoPublicacao, preco);
    this.formato = formato;
    
    this.calcularPrecoFinal = function() {
        return this.preco;
    }
}

// Criando instâncias de objetos
const livro1 = new LivroFisico("Aventuras de Sherlock Holmes", "Sir Arthur Conan Doyle", 1892, 35.99, 5.0);
const livro2 = new LivroDigital("JavaScript: The Good Parts", "Douglas Crockford", 2008, 19.99, "PDF");
const livro3 = new LivroFisico("O Senhor dos Anéis", "J.R.R. Tolkien", 1954, 45.99, 6.0);

// Usando os métodos das classes
console.log("Livro 1 - Preço Final (com envio): $" + livro1.calcularPrecoFinal());
console.log("Livro 2 - Preço Final: $" + livro2.calcularPrecoFinal());
console.log("Livro 3 - Preço Final (com envio): $" + livro3.calcularPrecoFinal());
