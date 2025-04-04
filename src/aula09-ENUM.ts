// 🧭 O que é enum?
// enum (de "enumeration") é um tipo especial que define um conjunto de constantes nomeadas. 
// Serve pra quando você tem valores fixos e quer dar nomes legíveis pra eles.

enum DiaDaSemana {
  Segunda,
  Terca,
  Quarta,
  Quinta,
  Sexta,
  Sabado,
  Domingo,
}

let hoje: DiaDaSemana = DiaDaSemana.Sexta;

console.log(hoje); // 4
//Por padrão, o enum começa no 0 e vai incrementando.


//Com valores personalizados:
enum Status {
  Sucesso = 200,
  NaoAutorizado = 401,
  NaoEncontrado = 404,
}

let resposta: Status = Status.Sucesso;

console.log(resposta); // 200
//Acesso reverso (numérico):
console.log(Status[200]); // Sucesso

//Enum de string:
//Se quiser que o enum use strings ao invés de números:

enum Cor {
  Vermelho = "vermelho",
  Verde = "verde",
  Azul = "azul",
}

let corFavorita: Cor = Cor.Azul;

console.log(corFavorita); // "azul"

// Quando usar enum?
// Quando você tem um conjunto fixo de valores (status, categorias, dias da semana…)

// Quando quer legibilidade e segurança de tipo

// Quando não quer ficar usando string "mágica" ou números soltos

// 🧨 Dica extra: const enum
const enum Direcao {
  Norte,
  Sul,
  Leste,
  Oeste,
}

let d: Direcao = Direcao.Sul;

//Com const enum, o TypeScript remove completamente o enum no JS final, gerando código mais leve.
