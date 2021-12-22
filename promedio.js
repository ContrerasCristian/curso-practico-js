
function calcularMediaAritmetica(lista){

    const sumaLista = lista.reduce((valorAcumulado, nuevoElemento) => valorAcumulado + nuevoElemento, 0)
    const promedioLista = sumaLista / lista.length;
    return promedioLista

}