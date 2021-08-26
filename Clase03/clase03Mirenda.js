function Producto(nombreArg, pesoArg, stockArg){
    this.nombre = nombreArg;
    this.peso = pesoArg;
    this.stock = stockArg;
    this.cantidad = function() {console.log("Esta es la cantidad de stock: " + this.stock)}
    this.venta = function(cantidad) {
        if(cantidad > this.stock){
            console.log("Cantidad insuficiente");
        } 
        else {
            this.stock = this.stock - cantidad;
        }
      
    }
    this.compra = function(cantidad) {
        this.stock = this.stock + cantidad;
    }
    this.libre = true;
}

const mesa = new Producto("Mesa", 50, 10);
mesa.cantidad();

if("stock" in mesa){
    if (mesa.stock > 0) {
        alert(mesa.nombre);
    }
}

mesa.venta (2);
const silla = new Producto("Silla", 5, 20);
silla.venta(3);


//arrays

let miArray = [];
let otroArray = [2,5,10,4];

for (let i = 0; i < 4; i++){
    console.log(otroArray[i]);
}