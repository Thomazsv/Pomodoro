"use strict";
// Variaveis
let estudar = document.querySelector(".estudar");
let descansar = document.querySelector(".descansar");
let minutos = document.querySelector(".minutos");
let segundos = document.querySelector(".segundos");
let pontos = document.querySelector(".pontos")
let start = document.querySelector(".start");
let stop = document.querySelector(".stop");
const mcgorila = new Audio("gorila.mp3");
let contador = document.querySelector(".contador");
let botoes = document.querySelector("botoes");
// let bola;

// Função
stop.style.display = "none";
pontos.style.display = "none";
start.style.display = "none";
descansar.style.display = "none";
estudar.addEventListener("click", () => {
  contador.style.display = "flex";
  start.style.display = "inline";
  minutos.textContent = 25;  
  segundos.textContent = "0" + 0;
  estudar.style.display = "none";
  descansar.style.display = "inline";
  pontos.style.display = "inline";
})
descansar.addEventListener("click", () => {
  minutos.textContent = "0" + 5;
  segundos.textContent = "0" + 0;
  start.style.display = "inline";
  stop.style.display = "none";
  estudar.style.display = "inline";
  descansar.style.display = "none";
})
// -------------------------------------------
start.addEventListener("click",() => {
  setTimeout(segundos.textContent = 59, 1000);
  if(minutos.textContent != 0){
    minutos.textContent--;
    minutos.textContent = minutos.textContent < 10 ? "0" + minutos.textContent : minutos.textContent;
  }
  start.style.display = "none";
  stop.style.display = "inline";
  let bola = setInterval(function(){
    segundos.textContent--;
    segundos.textContent = segundos.textContent < 10 ? "0" + segundos.textContent : segundos.textContent;
    if (segundos.textContent <= 0){
      if (minutos.textContent > 0){
        segundos.textContent = 59;
        minutos.textContent--;
        minutos.textContent = minutos.textContent < 10 ? "0" + minutos.textContent : minutos.textContent;
      }else{
        mcgorila.play();
        clearInterval(bola);
        start.style.display = "inline";
        stop.style.display = "none";
        if(estudar.style.display == "none"){
          minutos.textContent = 25;  
          segundos.textContent = "0" + 0;
        }else{
          minutos.textContent = "0" + 5;
          segundos.textContent = "0" + 0;
        }
      }}
      },1000);
      stop.addEventListener("click", () => {
        clearInterval(bola);
        start.style.display = "inline";
        stop.style.display = "none";
        if(estudar.style.display == "none"){
          minutos.textContent = 25;  
          segundos.textContent = "0" + 0;
        }else{
          minutos.textContent = "0" + 5;
          segundos.textContent = "0" + 0;
        }
      })
      estudar.addEventListener("click", () => {
        clearInterval(bola);
        contador.style.display = "flex";
        start.style.display = "inline";
        stop.style.display = "none";
        minutos.textContent = 25;  
        segundos.textContent = "0" + 0;
        estudar.style.display = "none";
        descansar.style.display = "inline";
      })
      descansar.addEventListener("click", () => {
        clearInterval(bola);
        minutos.textContent = "0" + 5;
        segundos.textContent = "0" + 0;
        start.style.display = "inline";
        stop.style.display = "none";
        estudar.style.display = "inline";
        descansar.style.display = "none";
      })
  })



