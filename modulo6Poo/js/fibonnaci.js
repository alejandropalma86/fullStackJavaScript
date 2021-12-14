/**

 * Alejandro Palma <alejandro.palma.parra@gmail.com>


        */
       
let numeroDeElementos;
let fibonnaci=[0,1];
let fib1=0;
let fib2=1;
let flag;

do {
    numeroDeElementos=prompt('Cuantos números de la serie quiere mostrar?: ');
    if (isNaN(numeroDeElementos)) {
        alert("El valor capturado no es un número");
    }  else if(numeroDeElementos % 1 !=0){
            alert("Capture un número entero");
    }   else if(numeroDeElementos==0 || numeroDeElementos>100){
        alert("Capture un número entre 1 y 100");
    } else{
        flag=1;
    }
      
} while (flag!=1);

if(numeroDeElementos==1){
    alert("Serie Fibonnaci: "+ fibonnaci[0]);
}else{
    for (let x=0; x<numeroDeElementos-2; x++) { 
            fib2=fib1+fib2;
            fibonnaci[x+2]=fib2;    
            fib1=fib2-fib1;  
        }  
    alert("Serie Fibonnaci: "+ fibonnaci);
    }





