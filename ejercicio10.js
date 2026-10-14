//Objetos = JSON (Javascript Objeto Notation)
//Estructura que guarda datos utilizando {key: value}

let perfil = {
  apellidos : "Carujulca Diaz",
  nombres: "Luz Karlita",
  edad: 18,
  telefono: ["999111222","955566777", "988777444"],
  formacion:[
    {nivel: "Primaria", nombre:"San José", anio:2000},
    {nivel: "Secundaria", nombre:"JCM", anio:2024},
    {nivel: "Superior", nombre:"SENATI", anio:2010}
  ],
  habilidades:[
    {skill: "Base de datos", herramientas:["MySQL", "Oracle", "SQLite"]},
    {skill: "Lenguajes programación", herramientas:["Javascript", "PHP", "Java", "C#"]},
    {skill: "Sistemas operativos", herramientas:["Windows", "Linux", "Android"]}
  ]
}
//Habilidades en programación 
console.log(perfil.habilidades[1].herramientas)

//¿Cual es el nombre del centro de formación secundaria?

console.log(perfil.formacion[1].nombre)

//¿Cuantos telefonos tiene la persona ?
console.log(perfil.telefono.length)

//Mostrar cada uno de los motores de base de datos
const lista = perfil.habilidades [0].herramientas
lista.forEach(element => {
  console.log(element) 
});