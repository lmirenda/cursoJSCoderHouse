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
    /*{marca:"Ford", color:"Negro", precio:105, stock:5},
    {marca:"Ford", color:"Blanco", precio:110, stock: 3},
    {marca:"Ford", color:"Rojo", precio:100, stock:3},
    {marca:"Toyota", color:"Negro", precio:155, stock:6},
    {marca:"Toyota", color:"Azul", precio:150, stock:7},
    {marca:"Toyota", color:"Gris", precio:175, stock:2},
    {marca:"Nisan", color:"Gris", precio:190, stock:9},
    {marca:"Nissan", color:"Blanco", precio:200, stock:1},
    {marca:"Nissan", color:"Rojo", precio:210, stock:8},*/
]
//Funcion Ingresar auto
const btnIngresarAutos = $("#btnIngresarAutos")
$("#btnIngresarAutos").on("click", function ingresarAutos() {
    let marcaPrompt = $("#autosMarca").val();
    let colorPrompt = $("#autosColor").val();
    let precioPrompt = +$("#autosPrecio").val();
    let stockPrompt = +$("#autosStock").val();
    const auto = new Autos(marcaPrompt, colorPrompt, precioPrompt, stockPrompt);
    $("#tablaAutos").append(`<tr class="autoRow">
                        <td>${marcaPrompt}</td>
                         <td>${colorPrompt}</td>
                         <td>${precioPrompt}</td>
                         <td>${stockPrompt}</td>
                         <td><input type="button" class="deleteButton" value="X"></td>
                         </tr>`);


    //Agregar el objeto creado por el usuario al array
    arrayAutos.push(auto);

    //Clear a los inputs
    $("#autosMarca").val('')
    $("#autosColor").val('')
    $("#autosPrecio").val('')
    $("#autosStock").val('')
    enableDelete;

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

let arrayAutosGuardado;
$("#btnGuardarDatos").on("click", function guardarDatos() {
    arrayAutosString = JSON.stringify(arrayAutos);
    localStorage.setItem('Lista de autos', arrayAutosString);
});


const btnMostrarAutos = $("#btnMostrarAutos");
btnMostrarAutos.on('click', function() {

    for (const auto of arrayAutos) {
        $("#tablaAutos").append(`<tr>
                        <td>${auto.marca}</td>
                         <td>${auto.color}</td>
                         <td>${auto.precio}</td>
                         <td>${auto.stock}</td>
                         <td> <button> Comprar </button> 
                         </tr>`);
    }
})

//Cargar todos los autos desde la API//
const btnCargar = $("#btnCargar");
btnCargar.click(function() {
    $.ajax({
        url: 'data.json',
        type: "GET",
        dataType: 'json',
        data:{
          "type": "main"
        },
        success: function(autos) {
           for(let auto of autos){
               arrayAutos.push(auto);
               $("#tablaAutos").append(`<tr class="autoRow">
                        <td>${auto.marca}</td>
                         <td>${auto.color}</td>
                         <td>${auto.precio}</td>
                         <td>${auto.stock}</td>
                         <td><input type="button" class="deleteButton" value="X"></td>
                         </tr>`);
           };
        }
  });
    btnCargar.prop("disabled", true);
})

const deleteBtn = $("#deleteButton");
btnIngresarAutos.click(enableDelete);

function enableDelete(){
    let arrayDeleteButtons = document.querySelectorAll(".autoRow")
    console.log(arrayDeleteButtons);
    arrayDeleteButtons.forEach(function(btn) {
        btn.addEventListener('click', deleteCheck);
    });
}


function deleteCheck(e){
    const item = e.target;
    console.log("deleted")

    if(item.classList[0]==="deleteButton"){
        const itemParent = item.parentElement;
        const itemParentParent = itemParent.parentElement;
        itemParentParent.remove();
    }
}