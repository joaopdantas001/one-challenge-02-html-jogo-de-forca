var palavra = "alface";
var tamanho = palavra.length;
var letraProcurada = 'l';
var palavraOculta = new Array(tamanho);
var tentativas = 6;

for(i = 0; i < tamanho; i++){
    palavraOculta[i] = "_"; 
} 


function buscarLetraNaPalavraOculta_a(){
    var letra = document.getElementById("a").value;
    let quantidadeDeLetrasEncontradas = 0;

    for(i = 0; i < tamanho; i++){
        if(palavra[i] == letra){
            palavraOculta[i] = letra;
            quantidadeDeLetrasEncontradas++;  
        } 
    }
    console.log("foram achadas " + quantidadeDeLetrasEncontradas + " letras " + letra);
    if(quantidadeDeLetrasEncontradas == 0){
        tentativas--;
    }
    document.getElementById("tentativas").innerHTML = tentativas;
    if (tentativas == 0) {
        console.log("acabou!");
    }
    document.getElementById("palavraOculta").innerHTML = palavraOculta;
}


function buscarLetraNaPalavraOculta_b(){
    var letra = document.getElementById("b").value;
    let quantidadeDeLetrasEncontradas = 0;

    for(i = 0; i < tamanho; i++){
        if(palavra[i] == letra){
            palavraOculta[i] = letra;
            quantidadeDeLetrasEncontradas++;  
        } 
    }
    console.log("foram achadas " + quantidadeDeLetrasEncontradas + " letras " + letra);
    if(quantidadeDeLetrasEncontradas == 0){
        tentativas--;
    }
    document.getElementById("tentativas").innerHTML = tentativas;
    if (tentativas == 0) {
        console.log("acabou!");
    }
    document.getElementById("palavraOculta").innerHTML = palavraOculta;
}

 
function buscarLetraNaPalavraOculta_c(){
    var letra = document.getElementById("c").value;
    let quantidadeDeLetrasEncontradas = 0;

    for(i = 0; i < tamanho; i++){
        if(palavra[i] == letra){
            palavraOculta[i] = letra;
            quantidadeDeLetrasEncontradas++;  
        } 
    }
    console.log("foram achadas " + quantidadeDeLetrasEncontradas + " letras " + letra);
    if(quantidadeDeLetrasEncontradas == 0){
        tentativas--;
    }
    document.getElementById("tentativas").innerHTML = tentativas;
    if (tentativas == 0) {
        console.log("acabou!");
    }
    document.getElementById("palavraOculta").innerHTML = palavraOculta;
}

function buscarLetraNaPalavraOculta_d(){
    var letra = document.getElementById("d").value;
    let quantidadeDeLetrasEncontradas = 0;
    
    for(i = 0; i < tamanho; i++){
        if(palavra[i] == letra){
            palavraOculta[i] = letra;
            quantidadeDeLetrasEncontradas++;  
        } 
    }
    console.log("foram achadas " + quantidadeDeLetrasEncontradas + " letras " + letra);
    if(quantidadeDeLetrasEncontradas == 0){
        tentativas--;
    }
    document.getElementById("tentativas").innerHTML = tentativas;
    if (tentativas == 0) {
        console.log("acabou!");
    }
    document.getElementById("palavraOculta").innerHTML = palavraOculta;
}

function buscarLetraNaPalavraOculta_e(){
    var letra = document.getElementById("e").value;
    let quantidadeDeLetrasEncontradas = 0;
    
    for(i = 0; i < tamanho; i++){
        if(palavra[i] == letra){
            palavraOculta[i] = letra;
            quantidadeDeLetrasEncontradas++;  
        } 
    }
    console.log("foram achadas " + quantidadeDeLetrasEncontradas + " letras " + letra);
    if(quantidadeDeLetrasEncontradas == 0){
        tentativas--;
    }
    document.getElementById("tentativas").innerHTML = tentativas;
    if (tentativas == 0) {
        console.log("acabou!");
    }
    document.getElementById("palavraOculta").innerHTML = palavraOculta;
}

function buscarLetraNaPalavraOculta_f(){
    var letra = document.getElementById("f").value;
    let quantidadeDeLetrasEncontradas = 0;
    
    for(i = 0; i < tamanho; i++){
        if(palavra[i] == letra){
            palavraOculta[i] = letra;
            quantidadeDeLetrasEncontradas++;  
        } 
    }
    console.log("foram achadas " + quantidadeDeLetrasEncontradas + " letras " + letra);
    if(quantidadeDeLetrasEncontradas == 0){
        tentativas--;
    }
    document.getElementById("tentativas").innerHTML = tentativas;
    if (tentativas == 0) {
        console.log("acabou!");
    }
    document.getElementById("palavraOculta").innerHTML = palavraOculta;
}

function buscarLetraNaPalavraOculta_g(){
    var letra = document.getElementById("g").value;
    let quantidadeDeLetrasEncontradas = 0;
    
    for(i = 0; i < tamanho; i++){
        if(palavra[i] == letra){
            palavraOculta[i] = letra;
            quantidadeDeLetrasEncontradas++;  
        } 
    }
    console.log("foram achadas " + quantidadeDeLetrasEncontradas + " letras " + letra);
    if(quantidadeDeLetrasEncontradas == 0){
        tentativas--;
    }
    document.getElementById("tentativas").innerHTML = tentativas;
    if (tentativas == 0) {
        console.log("acabou!");
    }
    document.getElementById("palavraOculta").innerHTML = palavraOculta;
}

function buscarLetraNaPalavraOculta_h(){
    var letra = document.getElementById("h").value;
    let quantidadeDeLetrasEncontradas = 0;
    
    for(i = 0; i < tamanho; i++){
        if(palavra[i] == letra){
            palavraOculta[i] = letra;
            quantidadeDeLetrasEncontradas++;  
        } 
    }
    console.log("foram achadas " + quantidadeDeLetrasEncontradas + " letras " + letra);
    if(quantidadeDeLetrasEncontradas == 0){
        tentativas--;
    }
    document.getElementById("tentativas").innerHTML = tentativas;
    if (tentativas == 0) {
        console.log("acabou!");
    }
    document.getElementById("palavraOculta").innerHTML = palavraOculta;
}



