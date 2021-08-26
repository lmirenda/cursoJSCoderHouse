function Autos(marca, modelo, color){
    this.marca = marca;
    this.modelo = modelo;
    this.color = color;
    this.vendido = false;
    this.vender = function() {
        this.vendido = true;
    }
    
    this.disponibilidad = function() {
        if(vendido){
            console.log("Vehiculo no disponible");
        } 
        else {
            console.log("Vehiculo disponible");
        }
      
    }
}   
// Defino objetos //


const auto1 = new Autos("Ferrari", "Enzo", "Rojo");
const auto2 = new Autos("Ferrari", "Enzo", "Blanco");
const auto3 = new Autos("Ferrari", "Enzo", "Negro");
const auto4 = new Autos("Ford", "Mustang", "Rojo");
const auto5 = new Autos("Ford", "Mustang", "Azul");
const auto6 = new Autos("Ford", "Mustang", "Amarillo");
const auto7 = new Autos("Ford", "Raptor", "Azul");
const auto8 = new Autos("Ford", "Raptor", "Rojo");
const auto9 = new Autos("Ford", "Raptor", "Gris");
const auto10 = new Autos("Chevrolet", "Camaro", "Amarillo");
const auto11 = new Autos("Chevrolet", "Camaro", "Negro");
const auto12 = new Autos("Chevrolet", "Camaro", "Blanco");


/*arrays

let miArray = [];
let otroArray = [2,5,10,4];

for (let i = 0; i < 4; i++){
    console.log(otroArray[i]);
}

*/