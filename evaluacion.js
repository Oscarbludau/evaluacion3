let colors = [
    "rgb(240, 14, 128)",
    "rgb(190, 67, 228)",
    "rgb(40, 84, 30)",
    "rgb(160, 214, 240)",
    "rgb(20, 114, 18)",
    "rgb(180, 54, 228)",
];

let numeroCuadrados = 6;

let  pickedColor  = colors [3];

let clickedColor;

let tarjetas = document.querySelectorAll(".container > div");

let  colorDisplay = document.querySelector("#colorDisplay");

let mensaje = document.querySelector("#message");

let titulo = document.querySelector("#titulo");

let botonReset = document.querySelector("#reset");

let botonEasy  = document.querySelector("#easy");

let botonHard  = document.querySelector("#hard");

generateRandomColors(6);

pickColor();

colorearTarjetas();

comparaColores();


function colorearTarjetas(){
    for(let i = 0; i < tarjetas.length; i ++ ) {
        tarjetas[i].style.background = colors[i];
    }
}


function comparaColores(){
    for (let i = 0; i < tarjetas.length; i++){
    tarjetas[i].addEventListener("click", function(){
        clickedColor = tarjetas[i].style.background;
        if (clickedColor !== pickedColor) {
            tarjetas[i].style.background = "rgb(23,23,23)";
            mensaje.innerHTML = "intentelo nuevamente";
        } else {
            mensaje.innerHTML = "¡Correcto!";
            titulo.style.background = pickedColor;
            changeColors (pickedColor);
            botonReset.innerHTML = "play Again";
        }
        
    })
  }
}

function changeColors(colorCorrecto){
    for (let i = 0; i < tarjetas.length; i++){
         tarjetas[i].style.background = colorCorrecto;
    }
}

function pickColor() {
    let i = Math.floor(Math.random()*colors.length);
    pickedColor = colors[i];
    colorDisplay.innerHTML = pickedColor;
}

function randomColor(){
    let red = Math.floor(Math.random()*256);
    let green = Math.floor(Math.random()*256);
    let blue = Math.floor(Math.random()*256);
    return `rgb(${red}, ${green}, ${blue})`;
}

function generateRandomColors(nunCuadrados) {
    colors =[];
    for (let i = 0; i < nunCuadrados; i ++) {
        colors[i] = randomColor();

    }
    
}




function ocultarMostrar() {
    for (let i = 0; i < tarjetas.length; i++){
        if (tarjetas[i].style.background !== colors [i]){
            tarjetas[i].style.visibility = "hidden";     
        } else {
            tarjetas[i].style.visibility = "visible";
        }
    }
    
}

function reiniciar(){
    generateRandomColors(numeroCuadrados),
    pickColor();
    colorearTarjetas();
    botonReset.innerHTML = "nuevos colores";
    mensaje.innerHTML = "";
    titulo.style.background = "rgb(23,23,23)";
}


botonReset.addEventListener("click", function () {
    reiniciar();
})

botonEasy.addEventListener("click" , function(){
    botonEasy.classList.add("selected");
    botonHard.classList.remove("selected");
    numeroCuadrados = 3;
    reiniciar();
    ocultarMostrar();
})

botonHard.addEventListener("click" , function(){
    botonHard.classList.add("selected");
    botonEasy.classList.remove("selected");
    numeroCuadrados = 6;
    reiniciar();
    ocultarMostrar();
})






