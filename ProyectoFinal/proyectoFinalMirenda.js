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
    let clientePrompt = $("#autosCliente").val();
    if (marcaPrompt && colorPrompt && !isNaN(precioPrompt) && !isNaN(stockPrompt)){
        let autoTr = $("<tr class='autoRow'></tr>")
               
        let autoMarca = $("<td></td>").text(marcaPrompt);
        let autoColor = $("<td></td>").text(colorPrompt);
        let autoPrecio =$("<td></td>").text(precioPrompt);
        let autoStock = $("<td></td>").text(stockPrompt);
        let autoCliente = $("<td></td>").text(clientePrompt);
        let autoOk = $("<td class='okCell'></td>").append("<i class='fa-solid fa-check'>")
        let autoDelete = $("<td class='deleteCell'></td>").append("<i class='fa-solid fa-trash-can'>")
                
        autoDelete.click(function(){
            var p = $(this).parent();
            p.fadeOut(function() {
                p.remove;
            })
        });
        autoOk.click(function(){
            var p = $(this).parent();
            p.fadeOut(function(){
                $("#autosAlquilados").append(p)
                p.fadeIn();
            });
            $(this).remove();
        })
        autoTr.append(autoMarca, autoColor, autoPrecio, autoCliente, autoStock, autoOk, autoDelete);
                $("#tablaAutos").append(autoTr);
    }
     //Agregar el objeto creado por el usuario al array
    arrayAutos.push(auto);

    //Clear a los inputs
    $("#autosMarca").val('')
    $("#autosColor").val('')
    $("#autosPrecio").val('')
    $("#autosStock").val('')

});

let arrayAutosGuardado;
$("#btnGuardarDatos").on("click", function guardarDatos() {
    arrayAutosString = JSON.stringify(arrayAutos);
    localStorage.setItem('Lista de autos', arrayAutosString);
    console.log(arrayAutos);
});


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
               let autoTr = $("<tr class='autoRow'></tr>")
               
                let autoMarca = $("<td></td>").text(auto.marca);
                let autoColor = $("<td></td>").text(auto.color);
                let autoPrecio =$("<td></td>").text(auto.precio);
                let autoStock = $("<td></td>").text(auto.stock);
                let autoCliente = $("<td></td>").text(auto.cliente);
                let autoOk = $("<td class='okCell'></td>").append("<i class='fa-solid fa-check'>")
                let autoDelete = $("<td class='deleteCell'></td>").append("<i class='fa-solid fa-trash-can'>")
                
                autoDelete.click(function(){
                    var p = $(this).parent();
                    p.fadeOut(function() {
                        p.remove;
                    })
                })
                autoOk.click(function(){
                    var p = $(this).parent();
                    p.fadeOut(function(){
                        $("#autosAlquilados").append(p)
                        p.fadeIn();
                    });
                    $(this).remove();
                })
                autoTr.append(autoMarca, autoColor, autoPrecio, autoStock, autoCliente, autoOk, autoDelete);
                $("#tablaAutos").append(autoTr);
           };
        }
  });
    btnCargar.prop("disabled", true);
})

//Filtrar los elementos de la tabla de datos
$("#miInput").on("keyup", function(){
    var value = $(this).val().toLowerCase();
    $("#tablaAutos tr").filter(function(){
        $(this).toggle($(this).text().toLowerCase().indexOf(value)>-1);
    });
})
$("#miInput2").on("keyup", function(){
    var value = $(this).val().toLowerCase();
    $("#autosAlquilados tr").filter(function(){
        $(this).toggle($(this).text().toLowerCase().indexOf(value)>-1);
    });
})