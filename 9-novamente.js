const alunos = ['joão', 'ana', 'caio', 'Lara', 'Marjorie', 'Leo']

//splice = significa emendar, juntar 
// o primeiro indica o índice do primeiro elemento a retirar e o segundo indica
//o índice do último
// O metódo splice altera o array original (diferente do splice)


alunos.splice(1,1)
console.log(alunos)

alunos.splice(1,2,"Rodrigo")//Permite um terceiro parâmetro 
console.log(alunos)


