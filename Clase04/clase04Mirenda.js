//Contruccion de objeto//
class Autos {
    constructor(marca, color, precio, stock) {
        this.marca = marca;
        this.color = color;
        this.precio = precio;
        this.stock = stock;
        
        this.descripcion = function() {
            console.log(marca + " " + color);
        }
        this.venta = function(cantidad){
            if (this.stock>=cantidad){
                this.stock = this.stock - cantidad;
            }
            else{
                console.log("Por favor ingrese otro valor. Stock actual:"+this.stock);
            }
        }
    }
}

//Defino objetos// 

const auto1 = new Autos("Ford", "Negro", 105, 5);
const auto2 = new Autos("Ford", "Blanco", 110, 3);
const auto3 = new Autos("Ford", "Rojo", 100, 4);
const auto4 = new Autos("Toyota", "Negro", 155, 6);
const auto5 = new Autos("Toyota", "Azul", 150, 7);
const auto6 = new Autos("Toyota", "Gris", 175, 2);
const auto7 = new Autos("Nisan", "Gris", 190, 9);
const auto8 = new Autos("Nisan", "Blanco", 200, 1);
const auto9 = new Autos("Nisan", "Rojo", 210, 8);

let marcaPrompt = prompt("Ingrese una marca de autos");
let colorPrompt = prompt("Ingrese una color para el auto");
let precioPrompt = parseInt(prompt("Ingrese una precio para el auto"));
const auto10 = new Autos(marcaPrompt, colorPrompt, precioPrompt, 1);

//Array//FG
const arrayAutos = [auto1, auto2, auto3, auto4, auto5, auto6, auto7, auto8, auto9];

//Agregar el objeto creado por el usuario al array
arrayAutos.push(auto10);

//Listar todos los autos en stock
function listarAutos(){
    for (const car of arrayAutos){
        if (car.stock > 0){console.log(car.marca+" "+car.color +" $"+car.precio);
        }   
    }
}

//Buscar marca de auto toyota
function buscarToyota(){
    var resultado = arrayAutos.filter(obj => {return obj.marca == 'Toyota'});
    console.log(resultado);
}

//Buscar autos en base al precio
function precioMax(n){
    var resultado = arrayAutos.filter(obj => {return obj.precio <= n});
    console.log(resultado);
}

// Crear elementos manipulando el DOM con los objetos existentes

//Creo nodo de tipo Elemento, con etiqueta UL
let contenedor = document.createElement("ul");
document.body.appendChild(contenedor);

// Busco el primer elemento ul en el HTML
let ULs = document.getElementsByTagName("ul");
let autoUL = ULs[0];

//Esribo en el HTML
for (const auto of arrayAutos) {
    //Recorro y creo una lista <li> para cada el objeto del array. 
    autoLI = document.createElement("li");
    //En cada lista estribo la informacion que deseo mostrar en el html y la envio a la <ul> autosUL
    autoLI.innerHTML = `<p> Marca: ${auto.marca}</p>
                        <p> Color: ${auto.color}</p>
                        <p> Precio: ${auto.precio}</p>
                        <p> Stock: ${auto.stock}</p>`;
    autoUL.appendChild(autoLI);
}