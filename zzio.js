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

