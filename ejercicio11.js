const persona = {
  apellidos:"Francia Minaya",
  nombres:"Jhon Eward",
  hablar: function(){return "Hola que tal"},
  locacion:{
    departamento:"Ica",
    provincia:"Chincha",
    distrito:"Sunampe",
    direccion: "Calle las Nazarenas n ",
    mostrar: function(){
      return `${this.departamento} - ${this.provincia} - ${this.distrito} - ${this.direccion}`}
  }

}

console.log(persona.hablar())
console.log(persona.locacion["departamento"])
console.log(persona.locacion.mostrar())