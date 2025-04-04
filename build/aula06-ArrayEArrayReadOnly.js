"use strict";
// Array sintaxe 
let numeros = [1, 2, 3];
numeros.push(4); // ✅ ok
numeros[0] = 10; // ✅ ok
// ou
let nomes = ["Bruno", "Maria"];
// readOnlyArray
let letras = ["a", "b", "c"];
// letras[0] = "z";     // ❌ Erro!
// letras.push("d");    // ❌ Erro!
// Ele só permite leitura com métodos como map, filter, forEach, etc.
// mas nunca modificação direta.
// ✅Pode:
// acessar elementos
// iterar (forEach, map, filter, etc.)
// ❌ Não pode:
// push, pop, splice, sort, reverse, etc.
// exemplo pratico
function imprimirNomes(nomes) {
    nomes.forEach(nome => console.log(nome));
    // nomes.push("Lucas"); // ❌ Erro de compilação
}
