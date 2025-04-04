class Curso {
  canal = null;
  curso = null;
  constructor(canal:any, curso:any){
    this.canal=canal;
    this.curso=curso;
  }
}

let c1 = new Curso("GustavinhoGameplays","Como criar o minecraft com typescript")

console.log(c1.canal);