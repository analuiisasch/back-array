//Espera o DOM estar cmpletamente carregado antes de executar o script 
document.addEventListener("DOMContentLoades", function() {
    const gravidade = 9.81;

    //mpEoxibir o prompt centralizado
    let tempo_segundos = prompt("Digite o tempo de queda em segundos: ");
    if(tempo_segundos !== null && tempo_segundos !== ""){
       let distancia = Math.floor(0.5 * gravidade * tempo_segundos * tempo_segundos);
       let elemento = document.querySelector("#distancia_percorrida");
       let segundos_informados = document.querySelector("Segundos_informados");

       //Atualizar o conteúdo dos elementos
       elemento_textContent = distancia + " metros ";
       segundos_informados.textContent = tempo_segundos + " segundos ";

       //Atualizar a página após 7 segundos
       setTimeout(function() {
          location.relond(); //Atualiza a página
       }, 7000);

    } else {
     //Se o prompt for cancelado ou vazio, recarregar a página
       location.reload();
    }
});
