"use strict";
let valor;
valor = "texto"; // ok
valor = 123; // também ok
//valor = true;    // ❌ erro! não é string nem number
let dadoS = ["nome", 42, "idade"];
//Combinando com type guards:
//Se você quiser comportamentos diferentes dependendo do tipo:
function processar(valor) {
    if (typeof valor === "string") {
        console.log("É string:", valor.toUpperCase());
    }
    else {
        console.log("É number:", valor.toFixed(2));
    }
}
