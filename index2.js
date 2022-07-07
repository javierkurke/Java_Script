let opcion = 0;
let prestamo = 0;
let nuevoprestamo = 0;
while (opcion != 4) {
    alert("Bienvenido al sistema de Creditos Amapola. Por favor ingrese la opcion deseada.");
    opcion = parseInt(prompt("1. Solicitar prestamo\n" + "2.Estado actual\n" + "3.Pagar Prestamo\n" + "4.Salir"));

    switch (opcion) {
        case 1:
            fnuevoprestamo();
            break;

        case 2:
            imprimirPrestamo(prestamo);
            break;
        case 3:
            montoAPagar(prestamo);
            break;
        case 4:
            alert("Adios!!!");
            break;

        default:
            break;
    }



}


function fnuevoprestamo() {
    nuevoprestamo = parseInt(prompt("Ingrese el monto deseado. Debe ser menor a $30.000"));
    if (prestamo + nuevoprestamo > 30000) {
        alert("Su prestamo no es posible.");
    } else {
        let validar = parseInt(prompt("Usted ingreso...$" + nuevoprestamo + ". Presione 1 PARA CONFIRMAR O 0 PARA CANCELAR"));
        if (validar == 1) {
            prestamo = prestamo + nuevoprestamo;
            alert("Su saldo a deber es de $" + prestamo);
        } else {
            alert("adios!");
        }
    }

}
function imprimirPrestamo(prestamo) {
    alert("Su saldo a deber es ...$" + prestamo);

}
function montoAPagar() {
    let pago = 100000
    while ((pago > prestamo)&&(pago!=null)) {
        pago = parseInt(prompt("Ingrese el monto que desee pagar..."));
        if(pago==NaN){
            pago=0;
        }

        if (pago > prestamo) {
            alert("INGRESO MAS DINERO DEL QUE DEBIA, POR FAVOR INGRESE NUEVAMENTE");
        } else {
            prestamo = prestamo - pago;
            alert("Su saldo actual es... $" + prestamo)
        };
    }


}


