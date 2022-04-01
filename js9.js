function imp(nombre) {
   alert("bienvenido "+nombre);

}
function mostrar(callbck) {
    var nombre = prompt("Digite un nombre");
    callbck(nombre);
}

mostrar(imp);

