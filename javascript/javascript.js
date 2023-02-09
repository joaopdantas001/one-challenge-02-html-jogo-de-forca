const palavras = [
  "abobora",
  "acelga",
  "agriao",
  "alcachofra",
  "alface",
  "alho",
  "almeirao",
  "aspargo",
  "batatas",
  "berinjela",
  "bertalha",
  "beterraba",
  "brocolis",
  "bardana",
  "cara",
  "cebola",
  "cenoura",
  "chicoria",
  "chuchu",
  "couve",
  "ervilha",
  "escarola",
  "espinafre",
  "fava",
  "feijoes",
  "inhame",
  "jilo",
  "lentilha",
  "mandioca",
  "maxixe",
  "milho",
  "mostarda",
  "nabo",
  "palmito",
  "pepino",
  "pimentao",
  "quiabo",
  "rabanete",
  "repolho",
  "rucula",
  "salsa",
  "salsao",
  "taioba",
  "tomate",
  "vagem",
];
var tamanhoArray = palavras.length;
var palavraEcolhida;
var letraProcurada;
var tentativas = 6;
var palavraEcolhida = palavras[getNumeroAleatorio(1, tamanhoArray)];
var tamanhoPalavraEcolhida = palavraEcolhida.length;
var palavraOculta = new Array(tamanhoPalavraEcolhida);

for (i = 0; i < tamanhoPalavraEcolhida; i++) {
  palavraOculta[i] = "_";
  document.getElementById("palavraOculta").innerHTML = palavraOculta;
}

function getNumeroAleatorio(min, max) {
  return parseInt(Math.random() * (max - min) + min);
}

function getLetrasEncontradas(quantidadeDeLetrasEncontradas, letra) {
  for (i = 0; i < tamanhoPalavraEcolhida; i++) {
    if (palavraEcolhida[i] == letra) {
      palavraOculta[i] = letra;
      quantidadeDeLetrasEncontradas++;
    }
  }
  console.log(
    "foram achadas " + quantidadeDeLetrasEncontradas + " letras " + letra
  );
  if (quantidadeDeLetrasEncontradas == 0) {
    tentativas--;
  }
  document.getElementById("tentativas").innerHTML = tentativas;
  if (tentativas == 0) {
    console.log("acabou!");
    document.location.reload(true);
  }
  document.getElementById("palavraOculta").innerHTML = palavraOculta;
}

function buscarLetraNaPalavraOculta_a() {
  var letra = document.getElementById("a").value;
  var quantidadeDeLetrasEncontradas = 0;

  getLetrasEncontradas(quantidadeDeLetrasEncontradas, letra);
}

function buscarLetraNaPalavraOculta_b() {
  var letra = document.getElementById("b").value;
  let quantidadeDeLetrasEncontradas = 0;

  getLetrasEncontradas(quantidadeDeLetrasEncontradas, letra);
}

function buscarLetraNaPalavraOculta_c() {
  var letra = document.getElementById("c").value;
  let quantidadeDeLetrasEncontradas = 0;

  getLetrasEncontradas(quantidadeDeLetrasEncontradas, letra);
}

function buscarLetraNaPalavraOculta_d() {
  var letra = document.getElementById("d").value;
  let quantidadeDeLetrasEncontradas = 0;

  getLetrasEncontradas(quantidadeDeLetrasEncontradas, letra);
}

function buscarLetraNaPalavraOculta_e() {
  var letra = document.getElementById("e").value;
  let quantidadeDeLetrasEncontradas = 0;

  getLetrasEncontradas(quantidadeDeLetrasEncontradas, letra);
}

function buscarLetraNaPalavraOculta_f() {
  var letra = document.getElementById("f").value;
  let quantidadeDeLetrasEncontradas = 0;

  getLetrasEncontradas(quantidadeDeLetrasEncontradas, letra);
}

function buscarLetraNaPalavraOculta_g() {
  var letra = document.getElementById("g").value;
  let quantidadeDeLetrasEncontradas = 0;

  getLetrasEncontradas(quantidadeDeLetrasEncontradas, letra);
}

function buscarLetraNaPalavraOculta_h() {
  var letra = document.getElementById("h").value;
  let quantidadeDeLetrasEncontradas = 0;

  getLetrasEncontradas(quantidadeDeLetrasEncontradas, letra);
}

function buscarLetraNaPalavraOculta_i() {
  var letra = document.getElementById("i").value;
  let quantidadeDeLetrasEncontradas = 0;

  getLetrasEncontradas(quantidadeDeLetrasEncontradas, letra);
}

function buscarLetraNaPalavraOculta_j() {
  var letra = document.getElementById("j").value;
  let quantidadeDeLetrasEncontradas = 0;

  getLetrasEncontradas(quantidadeDeLetrasEncontradas, letra);
}

function buscarLetraNaPalavraOculta_k() {
  var letra = document.getElementById("k").value;
  let quantidadeDeLetrasEncontradas = 0;

  getLetrasEncontradas(quantidadeDeLetrasEncontradas, letra);
}

function buscarLetraNaPalavraOculta_l() {
  var letra = document.getElementById("l").value;
  let quantidadeDeLetrasEncontradas = 0;

  getLetrasEncontradas(quantidadeDeLetrasEncontradas, letra);
}

function buscarLetraNaPalavraOculta_m() {
  var letra = document.getElementById("m").value;
  let quantidadeDeLetrasEncontradas = 0;

  getLetrasEncontradas(quantidadeDeLetrasEncontradas, letra);
}

function buscarLetraNaPalavraOculta_n() {
  var letra = document.getElementById("n").value;
  let quantidadeDeLetrasEncontradas = 0;

  getLetrasEncontradas(quantidadeDeLetrasEncontradas, letra);
}

function buscarLetraNaPalavraOculta_o() {
  var letra = document.getElementById("o").value;
  let quantidadeDeLetrasEncontradas = 0;

  getLetrasEncontradas(quantidadeDeLetrasEncontradas, letra);
}

function buscarLetraNaPalavraOculta_p() {
  var letra = document.getElementById("p").value;
  let quantidadeDeLetrasEncontradas = 0;

  getLetrasEncontradas(quantidadeDeLetrasEncontradas, letra);
}

function buscarLetraNaPalavraOculta_q() {
  var letra = document.getElementById("q").value;
  let quantidadeDeLetrasEncontradas = 0;

  getLetrasEncontradas(quantidadeDeLetrasEncontradas, letra);
}

function buscarLetraNaPalavraOculta_r() {
  var letra = document.getElementById("r").value;
  let quantidadeDeLetrasEncontradas = 0;

  getLetrasEncontradas(quantidadeDeLetrasEncontradas, letra);
}

function buscarLetraNaPalavraOculta_s() {
  var letra = document.getElementById("s").value;
  let quantidadeDeLetrasEncontradas = 0;

  getLetrasEncontradas(quantidadeDeLetrasEncontradas, letra);
}

function buscarLetraNaPalavraOculta_t() {
  var letra = document.getElementById("t").value;
  let quantidadeDeLetrasEncontradas = 0;

  getLetrasEncontradas(quantidadeDeLetrasEncontradas, letra);
}

function buscarLetraNaPalavraOculta_u() {
  var letra = document.getElementById("u").value;
  let quantidadeDeLetrasEncontradas = 0;

  getLetrasEncontradas(quantidadeDeLetrasEncontradas, letra);
}

function buscarLetraNaPalavraOculta_v() {
  var letra = document.getElementById("v").value;
  let quantidadeDeLetrasEncontradas = 0;

  getLetrasEncontradas(quantidadeDeLetrasEncontradas, letra);
}

function buscarLetraNaPalavraOculta_x() {
  var letra = document.getElementById("x").value;
  let quantidadeDeLetrasEncontradas = 0;

  getLetrasEncontradas(quantidadeDeLetrasEncontradas, letra);
}

function buscarLetraNaPalavraOculta_y() {
  var letra = document.getElementById("y").value;
  let quantidadeDeLetrasEncontradas = 0;

  getLetrasEncontradas(quantidadeDeLetrasEncontradas, letra);
}

function buscarLetraNaPalavraOculta_z() {
  var letra = document.getElementById("z").value;
  let quantidadeDeLetrasEncontradas = 0;

  getLetrasEncontradas(quantidadeDeLetrasEncontradas, letra);
}

function buscarLetraNaPalavraOculta_ç() {
  var letra = document.getElementById("ç").value;
  let quantidadeDeLetrasEncontradas = 0;

  getLetrasEncontradas(quantidadeDeLetrasEncontradas, letra);
}
