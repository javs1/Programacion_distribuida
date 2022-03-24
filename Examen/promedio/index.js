let num = prompt ('1ra calificacion');
let num2 = prompt ('2da calificacion');
let num3 = prompt ('3ra calificacion');

function sum (n,n2,n3){
    let suma = parseInt(n) + parseInt(n2) + parseInt(n3)
    resultado = suma/3
    let calif
    if (resultado>=8){
        calif='aprobado'
    }
    else{
        calif='reprobado'
    }
    return document.write('Su promedio es: ' + resultado + ', usted esta ' + calif);
}

sum(num,num2,num3)
