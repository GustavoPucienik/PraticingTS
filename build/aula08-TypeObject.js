"use strict";
// O tipo object em TypeScript é um pouco traiçoeiro! 
// Ele não é o mesmo que um objeto com propriedades bem definidas. 
// Bora entender melhor. 👇
// O object é um tipo genérico que aceita qualquer valor que não seja um tipo primitivo (string, number, boolean, null, undefined, symbol, bigint).
let qualquerObjeto;
qualquerObjeto = { nome: "Gustavo", idade: 25 }; // ✅ Ok
qualquerObjeto = [1, 2, 3]; // ✅ Ok (arrays são objetos em JS)
qualquerObjeto = new Date(); // ✅ Ok
//qualquerObjeto = "Texto";  // ❌ Erro: string não é um objeto
//qualquerObjeto = 123;      // ❌ Erro: number não é um objeto
//qualquerObjeto = null;     // ❌ Erro: null não é um objeto
// 🛑 Cuidado! object NÃO define a estrutura do objeto
// Se você tentar acessar propriedades específicas, TypeScript não sabe que elas existem:
let pessoaI = { nome: "Gustavo", idade: 25 };
let pessoaII = { nome: "Gustavo", idade: 25 };
//também recebe funções
let algo;
algo = function () {
    console.log("Sou uma função!");
}; // ✅ Ok!
algo = () => console.log("Arrow function!"); // ✅ Ok também
// 🔥 Quando usar object?
// Quase nunca! Normalmente, é melhor usar um tipo mais específico (type, interface) ou Record<string, any>
// se for algo mais dinâmico.
