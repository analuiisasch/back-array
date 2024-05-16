//Definindo um array de frutas
 var frutas = ['Maçã', 'Banana', 'Laranja', 'Pêssego', 'Abacaxi'];

 //Removendo o último elemento do array usando o método pop
 var ultimaFruta = frutas.pop();

 console.log('Array após remover o último elemento:', frutas); //Saída: ['Maça', 'Banana', 'Laranja'
 console.log('Última fruta removida:', ultimaFruta); //Saída: 'Abacaxi'

 //Removendo o primeiro elemento do array usando o método shift
 var primeiraFruta = frutas.shift();
 console.log('Array após remover o primeiro elemento:', frutas);//Saída: ['Banana', 'Laranja',]
 console.log('Primeira fruta removida:', primeiraFruta);//Saída: 'Maçã'
