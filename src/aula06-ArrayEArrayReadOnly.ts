// Array sintaxe 
let numeros: number[] = [1, 2, 3];
numeros.push(4); // ✅ ok
numeros[0] = 10; // ✅ ok

// ou
let nomes: Array<string> = ["Bruno", "Maria"];

// readOnlyArray
let letras: ReadonlyArray<string> = ["a", "b", "c"];
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
function imprimirNomes(nomes: ReadonlyArray<string>) {
  nomes.forEach(nome => console.log(nome));
  // nomes.push("Lucas"); // ❌ Erro de compilação
}

