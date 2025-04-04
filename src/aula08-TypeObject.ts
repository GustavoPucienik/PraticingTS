// O tipo object em TypeScript é um pouco traiçoeiro! 
// Ele não é o mesmo que um objeto com propriedades bem definidas. 
// Bora entender melhor. 👇

// O object é um tipo genérico que aceita qualquer valor que não seja um tipo primitivo (string, number, boolean, null, undefined, symbol, bigint).

let qualquerObjeto: object;

qualquerObjeto = { nome: "Gustavo", idade: 25 }; // ✅ Ok
qualquerObjeto = [1, 2, 3];                      // ✅ Ok (arrays são objetos em JS)
qualquerObjeto = new Date();                     // ✅ Ok

//qualquerObjeto = "Texto";  // ❌ Erro: string não é um objeto
//qualquerObjeto = 123;      // ❌ Erro: number não é um objeto
//qualquerObjeto = null;     // ❌ Erro: null não é um objeto

// 🛑 Cuidado! object NÃO define a estrutura do objeto
// Se você tentar acessar propriedades específicas, TypeScript não sabe que elas existem:
let pessoaI: object = { nome: "Gustavo", idade: 25 };

//c onsole.log(pessoa.nome); // ❌ Erro: propriedade 'nome' não existe no tipo 'object'
// Isso acontece porque object só garante que é um objeto, mas não define suas propriedades.

//✅ Melhor usar um tipo específico ou interface
interface Pessoa {
  nome: string;
  idade: number;
}

let pessoaII: Pessoa = { nome: "Gustavo", idade: 25 };

//também recebe funções
let algo: object;

algo = function () {
  console.log("Sou uma função!");
}; // ✅ Ok!

algo = () => console.log("Arrow function!"); // ✅ Ok também


// 🔥 Quando usar object?
// Quase nunca! Normalmente, é melhor usar um tipo mais específico (type, interface) ou Record<string, any>
// se for algo mais dinâmico.
