import { Carrito } from './carrito.js';
import { productos } from './index.js';

let carrito = JSON.parse(localStorage.getItem("carrito"));

const inicializacion = new Carrito();

export function agregarCarrito(precioOferta){
    let agregarCarrito = document.querySelectorAll("[data-id]");
    for (let i = 0; i < agregarCarrito.length; i++) {
        agregarCarrito[i].addEventListener('click', (e) => {
            let atributoId = e.target.getAttribute("data-id");
            let productoCarrito = new Carrito(productos[atributoId], precioOferta);
            let filtrado = JSON.parse(localStorage.getItem("carrito")).filter(item => item.id == atributoId)[0];
            if(filtrado.cantidad<10){
                productoCarrito.mensajeCarrito(atributoId);
            }
            productoCarrito.actualizarCantidadProductos();
        });
    }
}


agregarCarrito();

inicializacion.actualizarCantidadProductos();


/* Agarro el evento cerrar */
document.addEventListener("keydown", (e) => {
    if(e.key==="Escape"){
        inicializacion.cerrarCarrito(e.key);
    }
});


/* Agarro el evento click del carrito */
/* Aqui se despliega el carrito por lo tanto cada vez que se despliega por medio de metodos estaticos lo vacio (remove) y lo vuelvo a recorrer */

document.querySelector(".bi-cart2").addEventListener("click", () => {
    inicializacion.crearHTML(carrito);
    inicializacion.abrirCarrito();
    inicializacion.mostrarProductos();
    inicializacion.cerrarCarrito();
});
