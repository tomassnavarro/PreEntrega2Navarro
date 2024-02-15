function sumarProductos() {

    let sumaTotal = 0;
let cantidadProductos = 0;

let precios = []; // Array para almacenar los precios de los productos

    while (true) {
    let nombre = prompt("Ingrese el nombre del producto (o escriba 'fin' para terminar):");

        // Verificar si el usuario quiere salir del bucle
        if (nombre.toLowerCase() === "fin") {
            break;
        }

        let precio = parseFloat(prompt("Ingrese el precio del producto:"));

        // Verificar si el precio ingresado es un número válido
        if (!isNaN(precio)) {
            precios.push(precio); // Agregar el precio al array
            cantidadProductos++;
            console.log("Producto: " + nombre + " - Precio: " + precio);
        } else {
            console.log("Por favor, ingrese un precio válido.");
        }
    }

    // Sumar los precios utilizando el método reduce() del array
    sumaTotal = precios.reduce((total, precio) => total + precio, 0);

    if (cantidadProductos >= 5) {
        sumaTotal *= 0.9;
        console.log("Se aplicó el descuento del 10% por la cantidad de productos sumados.");
    }

    // Redondear la suma total a dos decimales
    sumaTotal = Math.round(sumaTotal);

    // Mostrar la suma total al salir del bucle
    console.log("Suma Total de Productos: " + sumaTotal);
}

// Llamar a la función para iniciar el programa
sumarProductos();
