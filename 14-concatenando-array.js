const nomes = ["Ana", "Juliana", "Leonardo" ];
const idades =[30,35,28];
const faculdade = [false, true, true];
const funcionarios = [nomes, idades, faculdade];
 if(funcionarios[2][0]=== false){
      console.log(`A funcionária ${funcionarios[0][0]}, possui ${funcionarios [1][0]}
anos e não possui faculdade `)
 }

 //o array funcionários é um array de duas dimençoes
 //há 3 arrays dentro dele, e para acesar os valores em funcionarios precisamos de 2 cochetes"[] []"".
 //O primeiro colchete será usado para escolher qual dos 3 arrays dentro de funcionários
 //Será acessado, podendo ser:
 //0->nomes
 //1->idades
 //2->faculdades
 //O segundo colchete será usado para acessar a informação dentro do array escolhido
 //outra forma de chamar os arrays de 2 dimensões é matrizes.Matrizes podem ser vizualizadas
 //Como uma tabela do Excel, onde cada campo representa um elemento, e precisamos de uma linha
 //E uma coluna para acessar um campo. Então, as linhas são o primeiro e a coluna o
 //segundo colchete.
