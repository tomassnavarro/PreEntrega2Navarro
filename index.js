function sumarProductos() {

let sumaTotal = 0;
let cantidadProductos = 0;

let precios = []; 

    while (true) {
    let nombre = prompt("Ingrese el nombre del producto (o escriba 'fin' para terminar):");

        
        if (nombre.toLowerCase() === "fin") {
            break;
        }

        let precio = parseFloat(prompt("Ingrese el precio del producto:"));

        
        if (!isNaN(precio)) {
            precios.push(precio); 
            cantidadProductos++;
            console.log("Producto: " + nombre + " - Precio: " + precio);
        } else {
            console.log("Por favor, ingrese un precio válido.");
        }
    }
    sumaTotal = precios.reduce((total, precio) => total + precio, 0);

    if (cantidadProductos >= 5) {
        sumaTotal *= 0.9;
        console.log("Se aplicó el descuento del 10% por la cantidad de productos sumados.");
    }

    
    sumaTotal = Math.round(sumaTotal);
    console.log("Suma Total de Productos: " + sumaTotal);
}

sumarProductos();
