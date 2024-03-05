let total = 0;

document.getElementById("calcular").addEventListener("click", function() {
    const producto = document.getElementById("productoInput").value;
    const precio = parseFloat(document.getElementById("precioInput").value);
    
    agregarElementoALista(producto, precio);
    
    document.getElementById("productoInput").value = "";
    document.getElementById("precioInput").value = "";
});

function agregarElementoALista(producto, precio) {
    const lista = document.getElementById("listaProductos");
    const elementoLista = document.createElement("li");
    elementoLista.textContent = producto + ": $" + precio.toFixed(2);
    lista.appendChild(elementoLista);
    
    total += precio;
    actualizarTotal(total);

    localStorage.setItem('total', total.toString());
}

function actualizarTotal(total) {
    document.getElementById("total").textContent = "Total: $" + total.toFixed(2);
}
