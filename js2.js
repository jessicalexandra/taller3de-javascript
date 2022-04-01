function metros(kilometros){
return kilometros*1000;

}

function millas(kilometros){
  return kilometros*0.621371;
}

var kh=prompt("ingrese el kilometraje");
 alert(kh+"k/h = " + metros(kh)+" metros por hora");
 alert(kh+"k/h= "+millas(kh) + " millas por hora");