import { conexionAPI } from "./conexionAPI.js";

const ulProductos = document.querySelector('.contenedor_productos');

async function borrarProducto(target){
    console.log(target.getAttribute('id'));
    try {
        await conexionAPI.borrarProd(target.getAttribute('id'));

        //window.location.href = "../pages/envio-concluido.html";     
    } catch (error) {
        alert (error);
    }
}

ulProductos.addEventListener('click',evento=>{
    var target = evento.target;
    borrarProducto(target);
});
