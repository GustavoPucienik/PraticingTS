"use strict";
// Uma tupla é basicamente um array com um número fixo de elementos,
// onde cada elemento pode ter um tipo diferente.
// Array normal:
let numeroS = [1, 2, 3];
// Tupla:
let usuario = ["Gustavo", 25];
// exemplo pratico
// coordenadas
let coordenadas = [10.5, 20.3];
// Retornar múltiplos valores de uma função
function getUsuario() {
    return ["Gustavo", 28];
}
const [nome, idade] = getUsuario();
// TypeScript 4+ permite rotular os elementos da tupla:
let produto = ["Camisa", 49.9];
// Se passar valores a mais ou fora da ordem, vai dar erro:
let dados = ["Texto", 10]; // ok
// let errado: [string, number] = [10, "Texto"]; // ❌ erro
//Métodos como push e pop ainda funcionam, mas o TS pode não reclamar
let tuplaI = ["Oi", 123];
tuplaI.push("Novo"); // [ 'Oi', 123, 'Novo' ]
//console.log(tupla); // TypeScript não reclama, mas foge da ideia de tupla fixa
//Se quiser evitar isso, você pode usar as const ou readonly
const tuplaII = ["Oi", 123];
