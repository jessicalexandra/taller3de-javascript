var precio=prompt("digite el precio");
var cantidad=prompt("digite cantidad");
var precioparcial=calcularprecio(precio,cantidad);
var resultado=calculariva(precioparcial);
 function calcularprecio(n1,n2) {
      return n1*n2;
 }
 

  function calculariva(siniva) {
      return (siniva*19)/100+siniva;
  }


  function mostrarcalculo() {
      alert (resultado);
  }
   mostrarcalculo();