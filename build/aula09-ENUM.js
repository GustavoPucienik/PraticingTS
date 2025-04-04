"use strict";
// 🧭 O que é enum?
// enum (de "enumeration") é um tipo especial que define um conjunto de constantes nomeadas. 
// Serve pra quando você tem valores fixos e quer dar nomes legíveis pra eles.
var DiaDaSemana;
(function (DiaDaSemana) {
    DiaDaSemana[DiaDaSemana["Segunda"] = 0] = "Segunda";
    DiaDaSemana[DiaDaSemana["Terca"] = 1] = "Terca";
    DiaDaSemana[DiaDaSemana["Quarta"] = 2] = "Quarta";
    DiaDaSemana[DiaDaSemana["Quinta"] = 3] = "Quinta";
    DiaDaSemana[DiaDaSemana["Sexta"] = 4] = "Sexta";
    DiaDaSemana[DiaDaSemana["Sabado"] = 5] = "Sabado";
    DiaDaSemana[DiaDaSemana["Domingo"] = 6] = "Domingo";
})(DiaDaSemana || (DiaDaSemana = {}));
let hoje = DiaDaSemana.Sexta;
console.log(hoje); // 4
//Por padrão, o enum começa no 0 e vai incrementando.
//Com valores personalizados:
var Status;
(function (Status) {
    Status[Status["Sucesso"] = 200] = "Sucesso";
    Status[Status["NaoAutorizado"] = 401] = "NaoAutorizado";
    Status[Status["NaoEncontrado"] = 404] = "NaoEncontrado";
})(Status || (Status = {}));
let resposta = Status.Sucesso;
console.log(resposta); // 200
//Acesso reverso (numérico):
console.log(Status[200]); // Sucesso
//Enum de string:
//Se quiser que o enum use strings ao invés de números:
var Cor;
(function (Cor) {
    Cor["Vermelho"] = "vermelho";
    Cor["Verde"] = "verde";
    Cor["Azul"] = "azul";
})(Cor || (Cor = {}));
let corFavorita = Cor.Azul;
console.log(corFavorita); // "azul"
let d = 1 /* Direcao.Sul */;
//Com const enum, o TypeScript remove completamente o enum no JS final, gerando código mais leve.
