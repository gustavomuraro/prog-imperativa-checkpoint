const Curso = require('./cursos');

// Instanciando objeto Curso.
const programacao = new Curso('Programação', 7, 12,12);

// Cadastrando alunos no curso programação:
programacao.cadastrarAluno('Jonas', 'Nascimento', '10/10/2000');
programacao.cadastrarAluno('Davi', 'Santos', '11/10/1999');
programacao.cadastrarAluno('Alice', 'Nascimento', '10/02/2001');
programacao.cadastrarAluno('Maria', 'Peres', '10/08/1998');
programacao.cadastrarAluno('Luiz', 'Carvalho', '01/03/1996');
programacao.cadastrarAluno('Marcos', 'Prado', '22/06/2002');
programacao.cadastrarAluno('Marlene', 'Ferreira', '29/03/1997');
programacao.cadastrarAluno('Tiago', 'Sena', '10/10/1995');
programacao.cadastrarAluno('Jose', 'Abreu', '07/09/2000');
programacao.cadastrarAluno('Leticia', 'Silva', '06/12/2001');


// Add notas para cada alunos:
programacao.buscarPorNome('Jonas', 'Nascimento').addNotas(8,6,9,10);
programacao.buscarPorNome('Davi', 'Santos').addNotas(5,6,5,5);
programacao.buscarPorNome('Alice', 'Nascimento').addNotas(8,6,9,10);
programacao.buscarPorNome('Maria', 'Peres').addNotas(8,6,9,10);
programacao.buscarPorNome('Luiz', 'Carvalho').addNotas(3,0,9,7);
programacao.buscarPorNome('Marcos', 'Prado').addNotas(8,6,9,10);
programacao.buscarPorNome('Marlene', 'Ferreira').addNotas(8,6,9,10);
programacao.buscarPorNome('Tiago', 'Sena').addNotas(5,6,5,10);
programacao.buscarPorNome('Jose', 'Abreu').addNotas(8,6,9,10);
programacao.buscarPorNome('Leticia', 'Silva').addNotas(10,6,9,10);

// Registrando faltas para Jonas Nascimento.
programacao.registrarFaltaParaAlunoX('Jonas', 'Nascimento');
programacao.registrarFaltaParaAlunoX('Jonas', 'Nascimento');
programacao.registrarFaltaParaAlunoX('Jonas', 'Nascimento');
programacao.registrarFaltaParaAlunoX('Jonas', 'Nascimento');
programacao.registrarFaltaParaAlunoX('Jonas', 'Nascimento');
programacao.registrarFaltaParaAlunoX('Jonas', 'Nascimento');

// Imprimindo as informaçoes do curso.
programacao.printInfo();

// Imprimindo a quantidade de faltas de um aluno.
console.log(`Faltas de Jonas Nascimento: ${programacao.buscarPorNome('Jonas', 'Nascimento').qtdFaltas}`);

// Imprimindo a média geral da turma 
console.log(`\nA média geral da turma é: ${programacao.mediaGeral().toFixed(2)}\n`);

// Media de notas do aluno Jonas Nascimento.
programacao.pritMediaDoAlunoX('Jonas','Nascimento');

// Imprimindo a lista de aprovados.
console.log(`\nLista de aprovados no curso de ${programacao.nome} :\n${programacao.listaAprovados().join(',\n')}\n`)

// Imprimindo a lista de reprovados.
console.log(`\nLista de reprovados no curso de ${programacao.nome} :\n${programacao.listaReprovados().join(',\n')}\n`)