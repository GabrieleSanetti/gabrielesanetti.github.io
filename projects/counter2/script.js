"use strict";
const result = document.querySelector("#result"); // Selezione dell'elemento con id "result"
const cont = document.querySelector(".cont");
const checkboxDif = document.querySelector("#negative");
const differenza = document.querySelector("#differenza");

let num = 0;
// Funzione che agiunge un numero alla variabile "num" e la stampa assegnandola alla constante "result"
function sum() {
  num++;
  result.textContent = num;
}

// Funzione che rimuove un numero alla variabile "num"
function dif() {
  num--;
  result.textContent = num;
}

// Funzione che se attivata impedisce di andare sotto lo zero
function noNegative() {
  if (num === 0 && checkboxDif.checked === true) {
    return;
  } else {
    dif();
  }
}

function checkboxUnder0() {
  if (num < 0) {
    checkboxDif.disabled = true;
  } else if (num >= 0) {
    checkboxDif.disabled = false;
  }
}

function ActivateNoNegativeF() {
  checkboxDif.addEventListener("click", () => {
    differenza.classList.replace("dif", "neg");
  });
}

document.addEventListener("DOMContentLoaded", function () {
  result.textContent = num; // Stampa subito il valore della variabile "num"
  checkboxDif.checked = false; // Rimozione della spunta al checkbox se fosse spuntato al caricamento della pagina
  checkboxDif.disabled = false; // Rendere abilitato il checkbox al caricamento della pagina

  cont.addEventListener("click", (event) => {
    const clickedEle = event.target;

    if (clickedEle.classList.contains("sum")) {
      sum();
      // Controllo dell'evento click sul pulsante; se trova sum come classe aggiunge 1 al valore della variabile "num"
      //Avrei potuto inserire direttemante num++ all'interno ma ho preferito richiamare una funzione per comodità per modifiche future
    }

    if (clickedEle.classList.contains("dif")) {
      dif();
    } // Controllo dell'evento click sul pulsante; se trova dif come classe sottrae 1 al valore della variabile "num"

    if (clickedEle.classList.contains("neg")) {
      noNegative();
    }
    ActivateNoNegativeF();
    checkboxUnder0();
  });
});
