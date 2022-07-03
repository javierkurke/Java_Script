
class Item{
constructor(id,tipo,nombre,imagen,descripcion,precio,cantidad,disponibilidad){
this.id=id;
this.tipo=tipo;
this.nombre=nombre;
this.imagen=imagen;
this.descripcion=descripcion;
this.precio=precio;
this.cantidad=cantidad;
this.disponibilidad=disponibilidad;
}
darDeBaja(){
    this.cantidad=false;
}
cambiarImagen(imagen){
    this.imagen=imagen;
}
cambiarDescripcion(descripcion){
    this.descripcion=descripcion;

}
cambiarPrecio(precio){
    this.precio=precio;
}




}
    
