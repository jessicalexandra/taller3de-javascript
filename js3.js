 var radio;
function perimetro(radio) {
      return 2*Math.PI*radio;  
}
function area(radio) {
    return Math.PI* Math.pow(radio,2);
}

radio=prompt("ingrese el radio del circulo");

alert(`el perimetro del circulo es ${perimetro(radio).toFixed(2)}
el area del circulo es ${area(radio).toFixed(2)}`)