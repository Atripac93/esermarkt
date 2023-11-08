//1//
const cambio = function(cambioContenuto){
    let cambiare = document.querySelector("h1");
    cambiare.innerText = cambioContenuto;
}

//2//
const pagina = function(cambioSfondo){
    let cambioColor = document.querySelector("body");
    cambioColor.style="background-color:" + cambioSfondo;
}
//3//
const indirizzo = function(cambioIndirizzo){
    let indircambio = document.querySelector(".indirizio");
    indircambio.innerText = cambioIndirizzo;
}
indirizzo("Via XXIV")
//4//
const link = function(cambioLink){
    let cambios = document.querySelectorAll("a");
    for(let i = 0; i<cambios.length; i++){
        cambios[i].classList.add("coco");
    }
}
link()
//5//
const togli = function(){
    let imagines = document.querySelectorAll("img");
    for(let i = 0; i<imagines.length; i++){
        imagines[i].toggleAttribute("ombra");
    }
}
togli()
//6//
const mostraValue = function(){
    let dimmi = document.querySelectorAll("input")
    for(let i = 0; i<dimmi.length; i++)
     console.log(dimmi[i].value)
}

const mostraTesto = function(){
    const mostra = document.querySelector(".pippo")
    console.log(mostra.value)
}

const dammiColor = function(){
    const dammi = document.querySelector(".mostraColore")
  console.log(dammi.value)
  const h2 = document.querySelector("h2")
  h2.style.color = dammi.value
}

const hola = function (changEvent) {
    console.log(changEvent.target.value)
}