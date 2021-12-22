const lista1= [
    100,
    200,
    500,
    400000000,
]
function esPar(numero){
    if(numero % 2 === 0){
        return true;
    }else {
        return false;
    }
}
const mitadLista1 = parseInt(lista1.length / 2);

let mediana;
if(esPar(lista1.length)){
    const elemento1 = lista1[mitadLista1 - 1];
    const elemento2 = lista1[mitadLista1];

    const elemento1y2 = calcularMediaAritmetica([
        elemento1, 
        elemento2])
    mediana = elemento1y2;
}else {
    mediana = lista1[mitadLista1];
}


function calcularMediaAritmetica(lista){

    const sumaLista = lista.reduce((valorAcumulado, nuevoElemento) => valorAcumulado + nuevoElemento, 0)
    const promedioLista = sumaLista / lista.length;
    return promedioLista

}