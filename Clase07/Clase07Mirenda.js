$( document ).ready(function() {
    console.log('El DOM esta listo')
});

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

//Defino objetos// =
const arrayAutos = [
    {marca:"Ford", color:"Negro", precio:105, stock:5},
    {marca:"Ford", color:"Blanco", precio:110, stock: 3},
    {marca:"Ford", color:"Rojo", precio:100, stock:3},
    {marca:"Toyota", color:"Negro", precio:155, stock:6},
    {marca:"Toyota", color:"Azul", precio:150, stock:7},
    {marca:"Toyota", color:"Gris", precio:175, stock:2},
    {marca:"Nisan", color:"Gris", precio:190, stock:9},
    {marca:"Nissan", color:"Blanco", precio:200, stock:1},
    {marca:"Nissan", color:"Rojo", precio:210, stock:8},
]
//Funcion Ingresar auto
$("#btnIngresarAutos").on("click", function ingresarAutos() {
    let marcaPrompt = $("#autosMarca").val();
    let colorPrompt = $("#autosColor").val();
    let precioPrompt = +$("#autosPrecio").val();
    let stockPrompt = +$("#autosStock").val();
    const auto = new Autos(marcaPrompt, colorPrompt, precioPrompt, stockPrompt);

    //Agregar el objeto creado por el usuario al array
    arrayAutos.push(auto);
});


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
/*let contenedor = document.createElement("ul");
document.body.appendChild(contenedor);

// Busco el primer elemento ul en el HTML
let ULs = document.getElementsByTagName("ul");
let autoUL = ULs[0];*/

/*-Esribo en el HTML - Sustituido por metodo jQuery

document.getElementById("btnMostrarAutos").addEventListener("click", mostrarAutos);

function mostrarAutos() {
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
}*/


let arrayAutosGuardado;
$("#btnGuardarDatos").on("click", function guardarDatos() {
    arrayAutosString = JSON.stringify(arrayAutos);
    localStorage.setItem('Lista de autos', arrayAutosString);
});


const btnMostrarAutos = $("#btnMostrarAutos");
btnMostrarAutos.on('click', function() {
    for (const auto of arrayAutos) {
        $("ul").append(`   <li> Marca: ${auto.marca}</li>
                                    <li> Color: ${auto.color}</li>
                                    <li> Precio: ${auto.precio}</li>
                                    <li> Stock: ${auto.stock}</li> 
                                    <br><br>`);
    }
})







$("#btnAJAX").click(function() {

    $.ajax({
        url: 'https://jsonplaceholder.typicode.com/posts/',
        type: "GET",
        dataType: 'json',
        data:{
          "type": "main"
        },
        success: function(result) {
          for(let items of result){
              let texto = "<li> id:" + items.id + "<br>" + "userID: " + items.userId + "</li>"
              $("#resultadoAJAX").append(texto);
          };
        }
  });
});