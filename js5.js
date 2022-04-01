var n=prompt("ingrese el nombre");
mostrar(n);
// function mostrar(nombre) {
//     nombre ||(nombre= "user");
//     if (typeof nombre=== "string") {
//         alert(" su nombres es : "+nombre);
//    }  
//    else{
//         alert("el nombre no es valido");
//    }
   
//  }
function mostrar(nombre) {
    if (isNaN(nombre)) {
        alert(" su nombres es : "+nombre);
   }  
   else{
        alert("el nombre no es valido");
   }
   
 }