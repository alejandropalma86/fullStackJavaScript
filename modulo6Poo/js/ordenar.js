/**

 * Alejandro Palma <alejandro.palma.parra@gmail.com>


        */

let inicio=["unacadena",3,9,1,10,500,1,10,true];
let numbers=[];
let cont=0;


for(var x=0;x<inicio.length;x++){
    if(!isNaN(inicio[x]) && typeof inicio[x] === 'number'){
        numbers[cont]=inicio[x];
        cont++;
    }
}

for (var x=0; x<numbers.length-1; x++) { 
    for(var y=x+1; y<numbers.length; y++){
        if(numbers[x]<numbers[y]){
            temp=numbers[x];
            numbers[x]=numbers[y];
            numbers[y]=temp;
        }
    }  
 } 

alert("Arreglo Original: "+inicio+"\n"+"Arreglo Numérico: "+numbers);



 
