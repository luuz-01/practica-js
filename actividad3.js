//Función 1:
//Crear una función que reciba un arreglo de números y retorne como resultado
//un objeto indicándonos cuántos valores son pares e impares


function contarParesImpares(numeros) {
    let pares = 0;
    let impares = 0;
    for (let i = 0; i < numeros.length; i++) {
        if (numeros[i] % 2 === 0) {
        pares++;
        } else {
        impares++;
        }
    }

    return {
        pares: pares,
        impares: impares
    };
}

let resultado = contarParesImpares([82, 15, 4, 95, 36, 32, 29, 18, 95, 14]);

console.log(resultado);



//Test, demostracin, console.log

//Función 2:
//escribir una función que retorne true | false dependiendo si el valor de entrada 
//corresponde a un número capicúa. 121, 444, 3223.solo permite analizar valores
//de hasta 5 dígitos (99999)


function esCapicua(numero) {
  if (!Number.isInteger(numero) || numero < 0 || numero > 99999) {
    return false;
  }

  let texto = String(numero);

  for (let i = 0; i < texto.length / 2; i++) {
    if (texto[i] !== texto[texto.length - 1 - i]) {
      return false;
    }
  }

  return true;
}

console.log(esCapicua(121));    
console.log(esCapicua(444));    
console.log(esCapicua(3223));  
console.log(esCapicua(123));   
console.log(esCapicua(123456)); 
