
//Construir un objeto con los datos una película

const pelicula = {
  titulo : "Los Juegos del Hambre",
  anio: 2012,
  idiomas: ["Ingles","Español","Frances"],
  duracionMin:142,
  generos:["ciencia ficción", "acción", "drama", "distopía"],
  presupuesto:78000000,
  recaudacion:694500000,
  elenco:[
    {
      nombres:"Jennifer Lawrence", personaje:"	Katniss Everdeen", rol:"Protagonista Femenina"},
    {
      nombres:"Josh Hutcherson", personaje:"	Peeta Mellark", rol:"Protagonista Masculino"
    },
    {
      nombres:"Liam Hemsworth", personaje:"	Gale Hawthorne", rol:"Personaje Secundario"
    },
    {
      nombres:"Donald Sutherland", personaje:"	Presidente Coriolanus Snow", rol:"Antagonista"
    },
    {
      nombres:"Woody Harrelson", personaje:"	Haymitch Abernathy", rol:"Mentor"
    },
    {
      nombres:"Willow Shields", personaje:"Primrose Everdeen", rol:"Hermana menor de la protagonista"
    }

  ],
  sinopsis:["2 trubutos de 12 distritos se enfrentan a muerte, mistras en el transcurso se revelan al capitolio"] ,
  direccion: ["Gary Ross"],
  escritores:["Billy Ray","Gary Ross","Suzanne Collins"]
}

console.log(pelicula.titulo);