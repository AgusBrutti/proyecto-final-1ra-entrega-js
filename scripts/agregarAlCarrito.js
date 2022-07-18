//Pido al usuario que agregue un producto. (Botón de alquilar/comprar en el html)
const agregarPeli = prompt("Selecciona la película que deseas alquilar: Pelicula 1, Pelicula 2, Pelicula 3, Pelicula 4.");
//Declaro un array de objeto
const productos = [{ id: 0, producto: "Pelicula 1", stock: 4, precio: "400" },
{ id: 1, producto: "Pelicula 2", stock: 2, precio: "700" },
{ id: 2, producto: "Pelicula 3", stock: 1, precio: "1000" },
{ id: 3, producto: "Pelicula 4", stock: 0, precio: "650" }];
//Declaro un array vacío para guardar las peliculas seleccionadas.
const miCarrito = [];

//Creo la funcion para validar que exista la película.
function existePeli() {
    for (const pelicula of productos) {
        if (pelicula.producto.toUpperCase() == agregarPeli.toUpperCase()) {
            return true;
        }
    }
    return false;
}

//Funcion ¿tengo stock?
function tengoStock() {
    //Recorro el array
    for (const pelicula of productos) {
        if (pelicula.producto.toUpperCase() == agregarPeli.toUpperCase() && pelicula.stock > 0) {
            return true;
        }
    }
    return false;
}

//Obtengo la pelicula seleccionada
function obtenerPeli() {
    for (const pelicula of productos) {
        if (pelicula.producto.toUpperCase() == agregarPeli.toUpperCase()) {
            return pelicula;
        }
    }
    return false;
}

//Agrego pelicula al carrito y las voy acumulando.
function agregarPelicula() {
    if (existePeli() && tengoStock()) {
        miCarrito.push(obtenerPeli());
        return miCarrito;
    } else { console.log("No tiene stock o no ingresó bien la pelicula."); }
}

//Funcion sumar los precios de los procuctos agregados en el carrito solamente.
function sumarPrecio(miCarrito) {
    const miCompra = miCarrito;
    const total = miCompra.reduce((acc, el) =>acc + el.precio,0);
    console.log(total);
}

function quitarPeli(miCarrito){
    if (miCarrito = 1){
        miCarrito.pop(miCarrito.precio);
    }
    console.log(miCarrito);
}

//Llamado a las funciones
existePeli();
tengoStock();
console.log(agregarPelicula()); //llamo a consola para revisar que muestra bien el resultado.
sumarPrecio(miCarrito);