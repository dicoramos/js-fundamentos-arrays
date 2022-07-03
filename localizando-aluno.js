const alunos = ['João', 'Juliana', 'Caio', 'Ana']
const mediasDosAlunos = [10,7,9,6]

let listaDeNotasEAlunos = [alunos, mediasDosAlunos]

const exibeNomeNota = (nomeDoAluno) => {
    if (listaDeNotasEAlunos[0].includes(nomeDoAluno)){ //faz a busca pelo valor -> boleano
        let indice = listaDeNotasEAlunos[0].indexOf (nomeDoAluno)  //Localiza e retorna o índice referente à primeira ocorrência de determinado valor em um array. Caso não exista nenhuma ocorrência do valor, retorna -1
        return listaDeNotasEAlunos[0][indice] + ', sua média é ' + listaDeNotasEAlunos[1][indice]
    } else {
        return "Aluno não está cadastrado"
    }
}

console.log(exibeNomeNota("Ana"))