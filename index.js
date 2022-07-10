/* Quiero empezar a hacer el carrito de ventas de una pagina de comida.
 En el curso anterior hice una pagina de un Bar, "Rock and Fellers".
 Se me ocurre agregarle el Delivery con una galeria con los productos. 
 No se si con Java Script puedo hacer esto...
  Tengo la esperanza de tener un proyecto completo para el portafolio...
 */
/* Constructor de Items */
class Item {
    constructor(tipo, nombre, imagen, descripcion, precio, cantidad) {
        this.id = Math.round(Math.random() * 100);
        this.tipo = tipo;
        this.nombre = nombre;
        this.imagen = imagen;
        this.descripcion = descripcion;
        this.precio = precio;
        this.cantidad = cantidad;
        this.alta = false;
        this.fechaAlta = new Date();
    };

    cambiarImagen(imagen1) {
        imagen = imagen1;
    }
    cambiarDescripcion(descripcion2) {
        descripcion = descripcion2;

    }
    cambiarPrecio(precio2) {
        precio = precio2;
    }
    cambiarCantidad(cantidad2) {
        cantidad = cantidad2;

    }

}
/*Main*/
let opcion;
const items = [];
alert("Bienvenido Al Sistema de Carga de productos de ROCK&FELLERS...")
do {
    opcion = parseInt(prompt("Por favor, Ingrese la opcion deseada:\n 1.Ingresar Un Item Nuevo. \n 2. Ver los items disponibles.\n 3. Modificar un Item. \n 4. Borrar un item \n 5.Salir."));
    switch (opcion) {
        case 1:
            cargarItem();
            break;
        case 2:
            if (items.length != 0) {
                verItems();


            } else {
                alert("No hay Items EXISTENTES");
            }

            break;
        case 3:
            if (items.length != 0) {
                modificarItems();
                
            } else {
                alert("No hay Items EXISTENTES");
            }


            break;
        case 4:
            if (items.length != 0) {
                EliminarItem();

            } else {
                alert("No hay Items EXISTENTES");
            }

            break;
        case 5:
            alert("ADIOS!!")
            break;

        default:
            ErroresDeIngresoNumero();
            break;
    }
} while (opcion != 5);


/* Funciones del programa */

function cargarItem() {
    let validacion2 = 0;
    let tipo = prompt("Ingrese el tipo de poducto");

    let nombre = prompt("Ingrese el nombre del producto");


    let imagen = prompt("Ingrese el nombre de la imagen del producto");

    let descripcion = prompt("Ingrese el nombre de la descripcion del producto");

    let precio = parseInt(prompt("Ingrese el precio del producto"));
    let cantidad = parseInt(prompt("Ingrese la cantidad del producto"))
    while ((validacion2 !== 2) && (validacion2 !== 1)) {
        validacion2 = parseInt(prompt("Ingrese 1 para continuar o 2 para cancelar..."));
    }
    if (validacion2 == 1) {
        const item1 = new Item(tipo, nombre, imagen, descripcion, precio, cantidad);
        items.push(item1);

        alert("Se ha agregado exitosamente el Item. Recuerde darlo de alta para verlo en la lista principal.")


    } else { alert("Proceso cancelado.") }




}
function verItems() {
    let i = 0;

    do {
        var6 = 0;
        if (items[i].alta == true) {
            alert(

                "Tipo: " + items[i].tipo + "\n" +
                "Nombre: " + items[i].nombre + "\n" +
                "Imagen: " + items[i].imagen + "\n" +
                "Descripcion: " + items[i].descripcion + "\n" +
                "Precio: $" + items[i].precio + "\n" +
                "Cantidad: " + items[i].cantidad + "\n" +
                "Fecha Alta: " + items[i].fechaAlta + "\n");
            var6++;
        } else {
            if (var6 = 0) {

            } alert("No hay Items dados de Alta aun");
        }
        i++;

    } while (i < items.length);



}
function modificarItems() {
    let i = 0;
    let var1;

    alert("A continuacion se mostraran todos los items del sistema. Recuerde memorizar el ID del item a modificar.")
    do {
        alert(
            "Elemento posicion: " + i + "\n" +
            "ID: " + items[i].id + "\n" +
            "Alta: " + items[i].alta + "\n" +
            "Fecha Alta: " + items[i].fechaAlta + "\n" +
            "Tipo: " + items[i].tipo + "\n" +
            "Nombre: " + items[i].nombre + "\n" +
            "Imagen: " + items[i].imagen + "\n" +
            "Descripcion: " + items[i].descripcion + "\n" +
            "Precio: " + items[i].precio + "\n" +
            "Cantidad: " + items[i].cantidad + "\n");
        i++;
    } while (i < items.length);
    ElementosParaModificar();

}
function EliminarItem() {
    let i = 0;
    alert("A continuacion se mostraran todos los items del sistema. Recuerde memorizar el ID del item a Eliminar.")
    do {
        alert(
            "Elemento posicion: " + i + "\n" +
            "ID: " + items[i].id + "\n" +
            "Alta: " + items[i].alta + "\n" +
            "Fecha Alta: " + items[i].fechaAlta + "\n" +
            "Tipo: " + items[i].tipo + "\n" +
            "Nombre: " + items[i].nombre + "\n" +
            "Imagen: " + items[i].imagen + "\n" +
            "Descripcion: " + items[i].descripcion + "\n" +
            "Precio: " + items[i].precio + "\n" +
            "Cantidad: " + items[i].cantidad + "\n");
        i++;
    } while (i < items.length);
    var1 = prompt("Ingrese el numero ID del producto...");
    resultado = buscarElemento(var1);
    EliminarElemento(resultado);
    if (resultado == undefined) {
        alert("No se encotro ningun articulo con el ID mensionado...");


    }
}

/* Funciones secundarias*/
function imprimirElemento(elemento) {
    alert("El elemento Ingresado es:\n" +
        "ID: " + elemento.id + "\n" +
        "Alta: " + elemento.alta + "\n" +
        "Fecha Alta: " + elemento.fechaAlta + "\n" +
        "Tipo: " + elemento.tipo + "\n" +
        "Nombre: " + elemento.nombre + "\n" +
        "Imagen: " + elemento.imagen + "\n" +
        "Descripcion: " + elemento.descripcion + "\n" +
        "Precio: " + elemento.precio + "\n" +
        "Cantidad: " + elemento.cantidad + "\n");

}
function buscarElemento(var1) {
    const resultado2 = items.find((el) => el.id == var1);
    if (resultado2==undefined) {
        alert("Elemento no Encontrado. Por favor ingrese nuevamente")
    }

return resultado2;   
}
    



function modificarElemento(nuevoElemento) {
    let i = items.indexOf(nuevoElemento.id)
    if (i==-1) {
       
        }else{
    items[i] = nuevoElemento;}


}
function EliminarElemento(nuevoElemento) {
    let i = items.indexOf(nuevoElemento.id)
    if(i==-1){alert("Elemento no encontrado");
    }else{
    items.splice(i, 1);};


}
function ErroresDeIngresoNumero() {
    alert("El dato ingresado no es valido. Por favor Ingresa el numero Nuevamente.")
}
function ElementosParaModificar() {
    let var1 = parseInt(prompt("Ingrese el numero ID del producto..."));
    const resultado = buscarElemento(var1);
    if (resultado==undefined) {
        alert("Error. Se rompio todillo!!! SalvanOS sUPERMAN.");
        
        
    }
        
    
    
    
    let var5 = 0;
    while (var5 != 9) {

        imprimirElemento(resultado);
        alert("Ingrese el valor que desee modificar...");
        var5 = parseInt(prompt("1.Dar de alta \n" + "2.Dar de baja\n" +
            "3.Tipo \n" +
            "4.Nombre \n" +
            "5.Imagen \n" +
            "6.Descripcion \n" +
            "7.Precio \n" +
            "8.Cantidad\n" +
            "9.Salir\n"));


        switch (var5) {
            case 1:
                resultado.alta = true;
                resultado.fechaAlta = new Date();
                modificarElemento(resultado);

                break;
            case 2:
                resultado.alta = false;
                modificarElemento(resultado);

                break;
            case 3:
                resultado.tipo = prompt("Tipo Actual:" + resultado.tipo + "\n" +
                    "Ingrese el nuevo tipo: ");
                modificarElemento(resultado);

                break;
            case 4:
                resultado.nombre = prompt("Nombre Actual:" + resultado.nombre + "\n" +
                    "Ingrese el nuevo Nombre: ");
                modificarElemento(resultado);

                break;
            case 5:
                resultado.imagen = prompt("Imagen Actual:" + resultado.imagen + "\n" +
                    "Ingrese la nueva imagen: ");
                modificarElemento(resultado);

                break;
            case 6:
                resultado.descripcion = prompt("Descripcion Actual:" + resultado.descripcion + "\n" +
                    "Ingrese la nueva descripcion: ");
                modificarElemento(resultado);

                break;
            case 7:
                resultado.precio = parseInt(prompt("Precio Actual:" + resultado.precio + "\n" +
                    "Ingrese el nuevo precio: "));
                modificarElemento(resultado);

                break;
            case 8:
                resultado.cantidad = parseInt(prompt("Cantidad Actual:" + resultado.cantidad + "\n" +
                    "Ingrese el nuevo Valor Cantidad: "));
                modificarElemento(resultado);

                break;
            case 9:
                alert("Exito!!");
                break;

        }




    }

}



