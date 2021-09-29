const Alunos=require('./alunos');

// Construtor para cursos.
function Cursos(nome,notaAprovacao,maxFaltas,duracao){
    this.nome=nome;
    this.notaAprovacao=notaAprovacao;
    this.maxFaltas=maxFaltas;
    // A duração do curso se dá em meses.
    this.duracao=duracao;

    // Sempre que a função cadastrarAluno() for chamada um novo Aluno será instanciado e armazenado no array abaixo.
    this.listaAlunos=[];

    this.printInfo=()=>{
        console.log(`\nNome do curso: ${this.nome}\n`,
                    `Nota minima para aprovação: ${this.notaAprovacao}\n`,
                    `Maximo de faltas toleradas: ${this.maxFaltas}\n`,
                    `Duração do curso em meses: ${this.duracao}\n`);
    }
    
    // Adiciona um novo aluno à lista de alunos.
    this.cadastrarAluno=function(nome, sobrenome, nascimento){
        this.listaAlunos.push(new Alunos(nome, sobrenome, nascimento));
    }

    // Busca um aluno pelo seu nome e sobrenome. Retorna um objeto.
    this.buscarPorNome=function(nome, sobrenome){
        return this.listaAlunos.find(elem=>elem.nome==nome&&elem.sobrenome==sobrenome)
    }

    // Retorna a média geral da turma.
    this.mediaGeral=function(){
        const total=this.listaAlunos.reduce((acum,aluno)=>acum+aluno.calcularMedia(),0);
        return total/this.listaAlunos.length;
    }

    // Imprime a media de notas de determinado aluno, caso exista
    // params: nome, sobrenome
    this.pritMediaDoAlunoX=function(nome,sobrenome){
        const media=this.buscarPorNome(nome, sobrenome).calcularMedia();
        console.log(`A média do aluno ${nome} ${sobrenome} é ${media}`);
    }

    // Registra uma nova falta para um aluno X
    this.registrarFaltaParaAlunoX=function(nome,sobrenome){
        this.buscarPorNome(nome,sobrenome).incFaltas();
    }

    // Busca um aluno pelo seu nome e sobrenome e retorna true se aprovado e false se não.
    this.situacao=function(nome, sobrenome){
        const aluno = this.buscarPorNome(nome, sobrenome);
        const media = aluno.calcularMedia()
        let status=false;

        if(aluno.qtdFaltas==maxFaltas)
            media>this.notaAprovacao*1.1?status=true:status=false;
        else if(aluno.qtdFaltas<maxFaltas&&media>=this.notaAprovacao)
            status=true

        return status;
    }

    // Percorre a lista de estudantes e retorna um array de booleanos com os resultados se os alunos aprovaram ou não.
    this.resultadoFidal=function(){
        let result=[];
        this.listaAlunos.forEach(aluno=>result.push(this.situacao(aluno.nome,aluno.sobrenome)));
        return result;
    }

    // Retorna uma lista com o nome dos alunos aprovados
    this.listaAprovados=function(){
        let aprovados=[];
        let resultadoFinal=this.resultadoFidal();
        this.listaAlunos.forEach((aluno,index)=>resultadoFinal[index]==true?aprovados.push(`${aluno.nome} ${aluno.sobrenome}`):'')
        return aprovados;
    }

    // Retorna uma lista com o nome dos alunos reprovados
    this.listaReprovados=function(){
        let reprovados=[];
        let resultadoFinal=this.resultadoFidal();
        this.listaAlunos.forEach((aluno,index)=>resultadoFinal[index]==false?reprovados.push(`${aluno.nome} ${aluno.sobrenome}`):'')
        return reprovados;
    }

}

module.exports=Cursos;