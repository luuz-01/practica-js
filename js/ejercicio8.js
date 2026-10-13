const alimentos = [
  ["Manzana","pera","uva", "mango", "sandía", "melón"],
  ["lechuga", "coliflor", "esparrago"],
  ["res", "cerdo", "pollo"],
  ["arroz"]
]

//¿Cuantos elementos tiene la matriz?
let menor = alimentos[0].le
alimentos.forEach(categoriaAlimento => {
    if (categoriaAlimentos.leagth > mayor ){
      mayor = categoriaAlimentos.length
    }
})
console.log("Array más grande ")





//¿Cúal es array de la matriz que tiene más datos?
let mayor = 0
alimentos.forEach(categoriaAlimento => {
    if (categoriaAlimentos.leagth > mayor ){
      mayor = categoriaAlimentos.length
    }
})
console.log("Array más grande ")



//¿Cuántos elementos en total tiene la matriz? considerando todos los arreglos
let sumatoria = 0
alimentos.forEach(categoriaAlimentos => {
  sumatoria += categoriaAlimentos.length
});
console.log("En total tenemos", sumatoria, "alimentos")