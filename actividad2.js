//Crear un objeto que tenga informacion computador
//cadenas, enteros, decimales, lógicos, arreglos, nuevos, objetos

const computadora = {
  marca: "HpVictus",
  modelo: "Victus 15",
  tasaRefresco: 144,
  peso: 2.29,
  pantalla:15.6,
  tieneBluetooth:false,
  puertos:["USB-C" ,"DisplayPort 1.4a", "HDMI 2.1","USB-A"],

  componentes: 
  [
    {tipo: "Procesador", marca: "AMD", modelo: "Rysen 7"  },
    {tipo: "Memoria RAM",capacidad: 16, unidad: "GB" },
    {tipo: "Almacenamiento", capacidad: 512, unidad: "GB" }
  ],

  dispositivos:
  [
    {nombre: "Teclado", tipo: "Itegrado",retroiluminado:"false"},
    {nombre: "Mouse", tipo: "Externo", conectado: false},
    {nombre: "Audifonos",tipo: "Audio" ,conectado: false}
  ]
}

console.log("Marca: ",computadora.marca);

console.log("Modelo: ",computadora.modelo);

console.log("Conponentes, procesador: ",computadora.componentes[0]);

console.log("Capacidad: ",computadora.componentes[1].capacidad, "GB");

