//forEach (para cada) -> Executa uma função em cada elemento do array de forma individual. Não altera o array original e nem retorna um valor, deixando esse trabalho a cargo da função escolhida.

const notas = [10, 6.5, 8, 7.5]

let somaDasNotas = 0

//callback
// notas.forEach(nota => {
//   somaDasNotas += nota
// })

notas.forEach(function(nota){
  somaDasNotas += nota
})

let media = somaDasNotas/notas.length

console.log(media)