
class Item {
    constructor(tipo, nombre, imagen, descripcion, precio, cantidad) {
        this.id = Math.round(Math.random() * 100);
        this.tipo = tipo;
        this.nombre = nombre;
        this.imagen = imagen;
        this.descripcion = descripcion;
        this.precio = precio;
        this.precio2=0;
        this.cantidad = cantidad;
        this.alta = false;
        this.fechaAlta = new Date();
        this.SugerenciaDelCliente = null;
    }
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
    ingresarSujerencia(SujerenciaDelCliente) {
        SugerenciaDelCliente = SujerenciaDelCliente;
    }
}

function cargarProductos() {
    productos.push(new Item("Bebida", "Cafe", `"assets/img/cafe.jpeg"`, " Cafe, Cortado o Cafe Doble", 100, 100))
    productos.push(new Item("Bebida", "Gaseosa", `"assets/img/gaseosachico.png"`, "Linea Coca-cola. Consultar disponibilidad", 110, 100))
    productos.push(new Item("Bebida", "Whisky", `"assets/img/w3.webp"`, " Jack Daniels, Chivas Regal o Jonnie Woker", 110, 100))
    productos.push(new Item("Comida", "Hamburguesa Clasica", `"assets/img/hambuerguesa1chico.png"`, "Lechaga, tomate, queso, morrones y jamon.", 110, 100))
    productos.push(new Item("Comida", "Hamburguesa Especial", `"assets/img/hamburguesa2chico.png"`, "Jamon, Queso, Morrones, Champignones.", 110, 100))
    productos.push(new Item("Comida", "Pizzanesa", `"assets/img/pizzas1.jpg"`, "Milanesas Gratinadas con Queso Cheddar y papas", 110, 100))
    productos.push(new Item("Comida", "Picada clasica", `"assets/img/picada2.jpg"`, " Picada completa.", 110, 100))
    productos.push(new Item("Comida", "Pizza", `"assets/img/pizzachico.png"`, "Muzzarella ,Especial ,Fugazza o 4-Quesos .", 110, 100))
    productos.push(new Item("Postre", "Postre", `"assets/img/postre2.jpg"`, "Mouse, Flanes, Paraiso de Frutos Rojos, Helado.", 110, 100))
    for (const iterator of productos) {
    
        let parrafo = document.createElement("div");
        parrafo.innerHTML = `<div class="card text-white bg-dark mb-3" style="max-width: 30rem;">
        <div class="card-header"><img src=${iterator.imagen} class="card-img-top" alt="..."></div>
        <div class="card-body p16">
            <h5 class="card-title p16">${iterator.nombre}</h5>
            <h5 class="card-title p16">$${iterator.precio}</h5>
            <p class="card-text">${iterator.descripcion}</p>
        </div>
        <form class="formulario">
            <button type="button" id="${iterator.id}1" class="btn btn-primary formulario_boton">-</button>
            <input type="text" id="${iterator.id}3" class="formulario_texto" value="0">
            <button type="button" id="${iterator.id}2" class="btn btn-primary formulario_boton ">+</button>
            <button type="button" id="${iterator.id}4" class="btn btn-success formulario_boton">Agregar al Carrito</button>
        
            </form>
        <br>
        
        </div>`;
        document.getElementById("contenedor").append(parrafo);
    }

}

const productos = [];
const carrito = [];
cargarProductos();
let botoncarrito=document.getElementById("boton_carrito");
botoncarrito.addEventListener("click", aparece);

function aparece(){
    const carrito1= document.getElementById("carrito");
    if (carrito1.className == "carrito_contenido_padre") {
        carrito1.setAttribute("class",`carrito_contenido_padre2`);    
    }else{
        carrito1.setAttribute("class",`carrito_contenido_padre`);
    }
  
    
    
    
}
function desaparece(){
    const carrito1= document.getElementById("carrito");
    carrito1.setAttribute("class",`carrito_contenido_padre`);



}


for (const iterator of productos) {

    let a1 = document.getElementById(`${iterator.id}1`);
    let a2 = document.getElementById(`${iterator.id}2`);
    let a3 = document.getElementById(`${iterator.id}3`);
    let a4 = document.getElementById(`${iterator.id}4`);
    let a0 = document.getElementById("a0");
    if (isNaN(parseInt(a3.value))) {
        a3.value = 0;
    }
    a1.addEventListener("click", respuestaa1)
    function respuestaa1() {
        if (a3.value > 0) {
            a3.value = a3.value - 1;
        }
    }
    a2.addEventListener("click", respuestaa2)
    function respuestaa2() {
        if (a3.value < 99) {
            a3.value = parseInt(a3.value) + parseInt(1);
        }
    }
    a4.addEventListener("click", respuestaa3)
    function respuestaa3() {
        if (parseInt(a3.value) > 0) {
            const resultado =carrito.indexOf(iterator);
            if (resultado==-1) {
                console.log(resultado);
                a0.innerHTML = parseInt(carrito.length+1);
                iterator.cantidad = parseInt(a3.value);
                iterator.precio2= parseInt(iterator.cantidad)*parseInt(iterator.precio);
                carrito.push(iterator);
                cargarCarrito();                
            }                 
          else {
            console.log(carrito);
            carrito[resultado].cantidad= carrito[resultado].cantidad + parseInt(a3.value);
            carrito[resultado].precio2= carrito[resultado].cantidad*carrito[resultado].precio;            let 
            var1=document.getElementById(iterator.id);
            var1.innerHTML=`
            <img class="imagen_lista" src=${iterator.imagen} width="10%" height="10%
                ">
            
            <li class="item_contenido">Nombre: ${iterator.nombre}</li>
            <li class="item_contenido">Cantidad: ${ carrito[resultado].cantidad}</li>
            <li class="item_contenido">Precio:$${carrito[resultado].precio2}</li>
            <button id="e${var1}" class="boton_eliminar" type="button"><lord-icon
                src="https://cdn.lordicon.com/rivoakkk.json"
                trigger="hover"
                colors="primary:#ffffff,secondary:#c71f16"
                style="width:50px;height:50px">
            </lord-icon></button>`;
            
            
           
            
          }
           
        }



    }


    function cargarCarrito() {
        for (let index = carrito.length-1; index < carrito.length; index++) {
            let var1 = Math.round(Math.random() * 1000);
            
            let parrafo = document.createElement("div");
            parrafo.classList.add("carrito_contenido");
            parrafo.setAttribute("id", `${iterator.id}`)

            parrafo.innerHTML = `
    <img class="imagen_lista" src=${iterator.imagen} width="10%" height="10%
        ">
    
    <li class="item_contenido">Nombre: ${iterator.nombre}</li>
    <li class="item_contenido">Cantidad: ${iterator.cantidad}</li>
    <li class="item_contenido">Precio:$${iterator.precio2}</li>
    <button id="e${var1}" class="boton_eliminar" type="button"><lord-icon
        src="https://cdn.lordicon.com/rivoakkk.json"
        trigger="hover"
        colors="primary:#ffffff,secondary:#c71f16"
        style="width:50px;height:50px">
    </lord-icon></button>`;
            document.getElementById("carrito").append(parrafo);
            for (const iterator of carrito) {
                let e1 = document.getElementById(`e${var1}`);
                e1.addEventListener("click", eliminar);
                function eliminar() {
                    carrito.splice(index,1);
                    parrafo.remove();
                    let a0 = document.getElementById("a0");
                    a0.innerHTML = parseInt(carrito.length);
        
        
                }
        
            } 

        }

    }
   









}
