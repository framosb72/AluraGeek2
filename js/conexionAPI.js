async function listarProductos() {
    const conexion = await fetch("http://localhost:3001/productos");
    const conexionConvertida = conexion.json();
    console.log(conexionConvertida);
    return conexionConvertida
}


async function nuevoProducto(nombre, precio,imagen){
    const conexion = await fetch("http://localhost:3001/productos",{
        method:"POST",
        headers:{"Content-type":"application/json"},
        body:JSON.stringify({
            nombre:nombre,
            precio:precio,
            imagen:imagen
        })
    })
    console.log(conexion);
    const conexionConvertida = conexion.json();

    if (!conexion.ok){
        throw new Error("Ha ocurrido un error al enviar el producto");
    }
    return conexionConvertida;
}

async function borrarProd(id){
    const conexion = await fetch(`http://localhost:3001/productos/${id}`,{
        method:"DELETE",
    })
//    
//.then(response => response.json())
//.then(() => console.log('User deleted'));
}

export const conexionAPI={
    listarProductos, nuevoProducto, borrarProd
}