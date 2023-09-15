class Aluno {
    constructor(nome, nota) {
        this.nome = nome;
        this.nota = nota;
    }

    estaAprovado() {
        return this.nota >= 6;
    }
}

const alunos = [
    new Aluno("João", 7),
    new Aluno("Maria", 5),
    new Aluno("Pedro", 8),
    new Aluno("Ana", 6),
    new Aluno("Carlos", 4),
];

const alunosAprovados = alunos.filter((aluno) => aluno.estaAprovado());
const nomesAlunosAprovados = alunosAprovados.map(({ nome }) => nome);

console.log("Alunos Aprovados: ");
console.log(alunosAprovados);
console.log(`Parabéns aos alunos: ${nomesAlunosAprovados}`);