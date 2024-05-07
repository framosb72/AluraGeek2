import { conexionAPI } from "./conexionAPI.js";

const botonEnviar = document.querySelector('.botonEnviar');

async function crearProducto(evento){
    evento.preventDefault();
    const nombre = document.querySelector("[data-nombre]").value;
    const precio = document.querySelector("[data-precio]").value;
    const imagen = document.querySelector("[data-imagen]").value;
    console.log(nombre);
    try {
        await conexionAPI.nuevoProducto(nombre,precio,imagen);
        //window.location.href = "../pages/envio-concluido.html";     
    } catch (error) {
        alert (error);
    }
    
}

botonEnviar.addEventListener("click",evento=>crearProducto(evento));