var tentativasContador = 6;
var tentativas = 0;
var palavraOculta= "panela";
var palavraTamanho = 6;
var posicaoLetra = -1;




function achou(){
    var letraOculta = document.getElementById("letra_escolhida").value;
    alert("Buscando a letra " + letraOculta + " na palavra " + palavraOculta);
    alert(letraOculta);
    posicaoLetra = palavraOculta.indexOf(letraOculta);  
    if (posicaoLetra == -1){
        tentativas = tentativas + 1;
        alert("Você errou !. Já foram : " + tentativas + " tentativas");
    }
    if (tentativas == tentativasContador){
        alert("Voc}e errou " + tentativas + " vezes" + "Acabou!");
    }
}

function a() {
    document.getElementById("letra_escolhida").value = "A";
    achou();
  }
  function b() {
    document.getElementById("letra_escolhida").value = "B";
  }
  function c() {
    document.getElementById("letra_escolhida").value = "C";
  }
  function d() {
    document.getElementById("letra_escolhida").value = "D";
  }
  function e() {
    document.getElementById("letra_escolhida").value = "E";
  }
  function f() {
    document.getElementById("letra_escolhida").value = "F";
  }
  function g() {
    document.getElementById("letra_escolhida").value = "G";
  }
  function h() {
    document.getElementById("letra_escolhida").value = "H";
  }
  function i() {
    document.getElementById("letra_escolhida").value = "I";
  }
  function j() {
    document.getElementById("letra_escolhida").value = "J";
  }
  function k() {
    document.getElementById("letra_escolhida").value = "K";
  }
  function l() {
    document.getElementById("letra_escolhida").value = "L";
  }
  function m() {
    document.getElementById("letra_escolhida").value = "M";
  }
  function n() {
    document.getElementById("letra_escolhida").value = "N";
  }
  function o() {
    document.getElementById("letra_escolhida").value = "O";
  }
  function p() {
    document.getElementById("letra_escolhida").value = "P";
  }
  function q() {
    document.getElementById("letra_escolhida").value = "Q";
  }
  function r() {
    document.getElementById("letra_escolhida").value = "R";
  }
  function s() {
    document.getElementById("letra_escolhida").value = "S";
  }
  function t() {
    document.getElementById("letra_escolhida").value = "T";
  }
  function u() {
    document.getElementById("letra_escolhida").value = "U";
  }
  function v() {
    document.getElementById("letra_escolhida").value = "V";
  }
  function x() {
    document.getElementById("letra_escolhida").value = "X";
  }
  function w() {
    document.getElementById("letra_escolhida").value = "W";
  }
  function y() {
    document.getElementById("letra_escolhida").value = "Y";
  }
  function z() {
    document.getElementById("letra_escolhida").value = "Z";
  }
  function ç() {
    document.getElementById("letra_escolhida").value = "Ç";
  }