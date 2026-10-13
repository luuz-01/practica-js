let frutas = [
  "Manzana",
  "plátano",
  "naranja",
  "fresa",
  "uva",
  "mango",
  "piña",
  "sandía",
  "melón",
  "kiwi",
];

for (let i = 0; i < frutas.length; i++){
   console.log (frutas[i])
}


for (let i =(frutas.length -1); i >= 0 ; i--){
   console.log (frutas[i])
}



//verificar si existe un elemento = "fresa"
let frutaBuscada = "uva"
const resultado = frutas.find(fruta => fruta = frutasBuscada)
const encontrado = frutas.includes(frutasBuscada)
console.log(resultado, encontrado)
