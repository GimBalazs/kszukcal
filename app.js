
//Gimesi Balázs
//2022.04.10
//Szoft E 1/3

const calcGomb = document.querySelector("#calcGomb");
var p = document.querySelector("#kaloria")
const fatElem = document.querySelector("#fat");
const weightElem = document.querySelector("#weight");
calcGomb.addEventListener('click', () => {
    console.log("müködik a gomb")
    let weight = Number(weightElem.value);
    let fat = Number(fatElem.value/100);
    let kaloria = Number(370)+Number(21,6)*(Number(1)-fat)*weight
    p.textContent = kaloria;
} );