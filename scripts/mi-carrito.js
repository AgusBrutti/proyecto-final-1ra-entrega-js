//Declaro un array de objeto
const productos = [{ id: 0, producto: "Pelicula 1", stock: 4, precio: "400" },
{ id: 1, producto: "Pelicula 2", stock: 2, precio: "700" },
{ id: 2, producto: "Pelicula 3", stock: 1, precio: "1000" },
{ id: 3, producto: "Pelicula 4", stock: 0, precio: "650" }];
//Declaro un array vacío para guardar las peliculas seleccionadas.
let carrito=[];

//Pido al usuario que agregue un producto. (Botón de alquilar/comprar en el html)
let agregarAlCarrito = prompt("Selecciona la película que deseas alquilar: Pelicula 1, Pelicula 2, Pelicula 3, Pelicula 4. Escribir esc para salir.");

while(agregarAlCarrito != "esc"){
    if(existePeli(agregarAlCarrito) && tengoStock(agregarAlCarrito)){
        carrito.push(obtenerPeli(agregarAlCarrito));
    }
    agregarAlCarrito = prompt("Selecciona la película que deseas alquilar: Pelicula 1, Pelicula 2, Pelicula 3, Pelicula 4. Escribir esc para salir.");
} 
console.log(carrito);

//Creo la funcion para validar que exista la película.
function existePeli(agregarAlCarrito) {
    for (const pelicula of productos) {
        if (pelicula.producto.toUpperCase() == agregarAlCarrito.toUpperCase()) {
            return true;
        }
    }
    return false;
}

//Funcion ¿tengo stock?
function tengoStock(agregarAlCarrito) {
    //Recorro el array
    for (const pelicula of productos) {
        if (pelicula.producto.toUpperCase() == agregarAlCarrito.toUpperCase() && pelicula.stock > 0) {
            return true;
        }
    }
    return false;
}

//Obtengo la pelicula seleccionada
function obtenerPeli(agregarAlCarrito) {
    for (const pelicula of productos) {
        if (pelicula.producto.toUpperCase() == agregarAlCarrito.toUpperCase()) {
            return pelicula;
        }
    }
    return false;
}

//Agrego pelicula al carrito y las voy acumulando.
function agregarPelicula() {
    if (existePeli() && tengoStock()) {
        carrito.push(obtenerPeli());
        return carrito;
    } else {console.log("No tiene stock o no ingresó bien la pelicula."); }
}

//Recorro carrito y genero lista html.
function agregoListaMiCarrito(){
    let emptyList = document.querySelector("#listaUl");
    for (let namePeli of carrito){
        let listado = document.createElement("li");
        listado.classList.add("list-group-item","d-flex","justify-content-between","lh-condensed");
        listado.innerHTML=`<div><h6 class="my-0">${namePeli.producto}</h6></div><span class="text-muted">${namePeli.precio}</span>`;
        emptyList.appendChild(listado);
    }
    cupon()
    sumarPrecio(carrito);
}

//Funcion sumar los precios de los procuctos agregados en el carrito solamente.
function sumarPrecio(carrito) {
    const miCompra = carrito;
    const total = miCompra.reduce((acc, miCompra) =>acc + parseInt(miCompra.precio),0);
    let emptyListPrice = document.querySelector("#listaUl");
    let listPrice = document.createElement("li");
    listPrice.classList.add("list-group-item","d-flex","justify-content-between","lh-condensed");
    listPrice.innerHTML=`<span>Total:</span><strong>${total}</strong>`;
    emptyListPrice.appendChild(listPrice);
    console.log(total);
}

//agrego solamente la secciuón del campo del cupon.
function cupon(total) {
    let emptyListCupon = document.querySelector("#listaUl");
    let listCupon = document.createElement("li");
    listCupon.classList.add("list-group-item","d-flex","justify-content-between","lh-condensed");
    listCupon.innerHTML=`<div class="text-success"><h6 class="my-0">Codigo promocional</h6>
    <small>EXAMPLECODE (agregado a modo ejemplo)</small></div><span class="text-success">- $10</span>`;
    emptyListCupon.appendChild(listCupon);
}