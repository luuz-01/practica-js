//Crear una funcion autoejecutable, que imprima cuantas horas, minutos y segundos
//faltan para terminar el dia
(function() {
  let ahora = new Date();

  let horas = 23 - ahora.getHours();
  let minutos = 59 - ahora.getMinutes();
  let segundos = 59 - ahora.getSeconds();

  console.log("Faltan para terminar el día:");
  console.log("Horas: " + horas);
  console.log("Minutos: " + minutos);
  console.log("Segundos: " + segundos);
})();



//Crear una funcion autoejecutable que solicite un numero (expresado en segundos) y nos
//devuelva un saludo, despues del tiempo indicado - setTimeOwt


(function() {
  let segundos = Number(
    prompt("Ingrese el tiempo en segundos:")
  );

  setTimeout(function() {
    console.log("Hola, que tengas buen día.");
  }, segundos * 1000);
})();




