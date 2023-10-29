//1//
const cambio = function (nuovoContenuto){
    let x = document.querySelector("h1");
    x.innerText= nuovoContenuto;
}
//2//
const pagina = function (nuovoColore){
    let y = document.querySelector("body");
    let z = document.querySelector("h1");
    y.style="background-color:" + nuovoColore;
    z.style.color= "blue" + nuovoColore;
}
//3//
const indirizzo = function(idFittizio){
    let f = document.querySelector(".indirizio");
    f.innerText = idFittizio;
}
indirizzo("VIA VIncenzini 13, BeRliNo");
//4//
const classe = function(){
    let link = document.querySelectorAll("a");
    for(let i = 0; i<link.length; i++){
  link[i].classList.add("coloret");
    }
}
classe()
//5//
const togli = function(){
    let imagines = document.querySelectorAll("img");
    for(let i = 0; i<imagines.length; i++){
        imagines[i].toggleAttribute("ombra");
    }
}
togli()
//6//
const prezzo = function(){
    let euro = document.querySelectorAll(".prezzo");
    for(let i = 0; i<euro.length; i++){
        euro[i].style.color= rgb Math.round(Math.random()*108),Math.round(Math.random()*255),Math.round(Math.random()*88); 
       }
}
prezzo();

   
