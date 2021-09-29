// Construtor para alunos:
function Alunos(nome, sobrenome, nascimento){
  this.nome = nome;
  this.sobrenome = sobrenome;
  this.nascimento = nascimento;
  this.qtdFaltas = 0;
  this.notas = [];

  // Calcula a media de notas do aluno.
  this.calcularMedia=function(){
      return (this.notas.reduce((acum, nota)=>acum+nota,0)/this.notas.length);
  };

  // Incrementa 1 à quantidade de faltas.
  this.incFaltas=()=>this.qtdFaltas++;

  // Adiciona novas notas à lista de notas do aluno.
  this.addNotas = function(...notas){
      return this.notas.push(...notas);
  }
}

module.exports=Alunos;