//¿Qué es función?
//Conjuntro de instrucciones que se pueden reutilizar 
//Aceptar Parámetros de la salida y se puede algunvalor opcional

//Pruebas, test
function saludar (){
  console.log ("Hola")
}

//correcto
function despedirse(){
  return "adios"
}

function verificarNota(calificacion = 0 ){
  //Apronado - desaprobado|operador termario (comicion simple)

  return calificacion >= 10.5 ? "aprobado" : "desaprobado"

}

//La funcion retorna o