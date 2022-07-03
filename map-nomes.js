//PADRONIZAR COM APENAS LETRAS MAIÚSCULAS

let nomes = ["ana Julia","Caio vinicius","BIA silva"]

const nomesAtualizados = nomes.map(nome => nome.toUpperCase())
//O método toUpperCase() retorna o valor da string convertido para letras maiúsculas. toUpperCase() não altera o valor da string original.
console.log(nomesAtualizados)