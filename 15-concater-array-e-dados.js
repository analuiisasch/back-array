const arrayOriginal = ["Maria", "Carlos", "Eduardo", "Samanta"]
const arrayConcat = arrayOriginal.concat("André", "Fernanda")
console.log(arrayOriginal)
console.log(arrayConcat)
//Com o exemplo acima, vemos que o JavaScript concatena o array principal e as strings de texto
//Passadas como parámetro para criar outro array, mantendo o original sem alterações.
const arrayOriginal_2 = ["Maria", "Carlos", "Eduardo", "Samanta"]
const arrayConcat2 = arrayOriginal_2.concat(["André", "Fernanda"], ["Ricardo","Ana"],
  ["Marcelo", "Bia"])
 console.log(arrayOriginal_2)
 console.log(arrayConcat2)
 //Podemos passar mais de um array como parãmetro para que seus elementos sejam concatenados em
 //um único array, junto com o que está sendo chamado com o método (no caso, arrayoriginal)



resposta 

4) ['Maria', 'Carlos', 'Eduardo', 'Samanta']
15-concater-array-e-dados.js:3
(6) ['Maria', 'Carlos', 'Eduardo', 'Samanta', 'André', 'Fernanda']
15-concater-array-e-dados.js:4
(4) ['Maria', 'Carlos', 'Eduardo', 'Samanta']
15-concater-array-e-dados.js:10
(10) ['Maria', 'Carlos', 'Eduardo', 'Samanta', 'André', 'Fernanda', 'Ricardo', 'Ana', 'Marcelo', 'Bia']
