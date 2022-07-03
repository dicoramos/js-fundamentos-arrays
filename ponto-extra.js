const notas = [10, 9, 8, 7, 6]

const notasAtualizadas = notas.map( nota => nota == 10 ? nota : ++nota)
//O método map() invoca a função callback passada por argumento para cada elemento do Array e devolve um novo Array como resultado.
console.log(notasAtualizadas)