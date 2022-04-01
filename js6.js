 var n1=prompt("digite el numero 1");
 var n2=prompt("digite el numero 2");
 function calcularnumero(num1,num2) {
     resul =parseInt(num1)+parseInt(num2);
     resta=parseInt(num1)-parseInt(num2);
     multiplicacion=parseInt(num1)*parseInt(num2);
     division=parseInt(num1)/parseInt(num2);
     alert("la suma de "+num1+"+"+num2+ "="+ (resul));
     alert("la resta de "+num1+"-"+num2+ "="+ (resta));
     alert("la multiplicacion de "+num1+"*"+num2+ "="+ (multiplicacion));
     alert("la division de "+num1+"/"+num2+ "="+ (division));
 }
 calcularnumero(n1,n2);