import { conexionAPI } from "./conexionAPI.js";

const lista = document.querySelector("[data-lista]")

export default function crearCard(id, nombre, precio,imagen){
    const producto = document.createElement("li");
    producto.className="producto_item";
    producto.innerHTML=`<div class="marcoProducto">
    <img class="imagen_producto" src="./data_image/${imagen}" alt="Producto Temporal">
        <div class="detalles__producto">
            <h3>${nombre}</h3>
            <p>${precio}</p>
            <a><img class="iconTrash" src="./imagenes/delete-white.svg" id="${id}"></a>
        </div>
    </div>`;

    return producto;
}   


async function listarProductos(){
    try{
        const listaAPI = await conexionAPI.listarProductos()
        listaAPI.forEach(producto=>lista.appendChild(crearCard(producto.id, producto.nombre, producto.precio, producto.imagen)))

        //bodyScript.innerHTML('<script src="./js/borrarProducto.js" type="module"></script>')
    } catch (error) {
        lista.innerHTML =`<h2 class="mensaje__titulo">Ha ocurrido un problema con la conexión.</h2><p>${error}</p>`;
    }
}

listarProductos();