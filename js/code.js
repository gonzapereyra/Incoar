"use strict";
let btnEnviar = document.getElementById ("enviarform");
let inputCaptcha=document.getElementById ("captcha");
let RdoCorrecto=document.getElementById ("correcto");
let RdoIncorrecto=document.getElementById ("incorrecto");
let captchaRandom=document.getElementById ("num-captcha");

let valorCaptchaRandom;

btnEnviar.addEventListener("click",verificarFormulario);
refrescarCaptcha()
// Cada vez que recargue la pag se refresque se cargue el captcha
function refrescarCaptcha (){
     //genero numero ramdon y lo guardo en la variable global
    valorCaptchaRandom = Math.ceil(Math.random() * 100000);
    console.log(valorCaptchaRandom);
    captchaRandom.innerHTML= valorCaptchaRandom;
}

//Despues del click:
function verificarFormulario (e){
    e.preventDefault();
    //Guardo el valor ingresado en una variable
    let valorIngresado=document.getElementById ("captcha").value;

    //Si el valor ingresado es igual al del captcha hacer:
    // Poner en div correcto la afirmación
    if (valorIngresado==valorCaptchaRandom) {
       RdoCorrecto.innerHTML="Formulario enviado exitosamente.";
    }
    else{
        RdoIncorrecto.innerHTML="Volvé a intentarlo.";
    }
} 
