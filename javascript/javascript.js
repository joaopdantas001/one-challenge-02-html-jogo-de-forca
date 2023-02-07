var palavra = "palavra";
var tamanho = palavra.length;
var letraProcurada = 'l';
var palavraOculta = new Array(tamanho);
var tentativas = 6;

for(i = 0; i < tamanho; i++){
    palavraOculta[i] = "_"; 
} 


function buscarLetraNaPalavraOculta(){

    let letra = letraProcurada;
    let quantidadeDeLetrasEncontradas = 0;
    
    for(i = 0; i < tamanho; i++){
        if(palavra[i] == letra){
            palavraOculta[i] = letra;
            quantidadeDeLetrasEncontradas++;  
        } 
    }
    console.log(quantidadeDeLetrasEncontradas);
}

    





