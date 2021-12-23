const salariosCol = colombia.map(
    (persona) => {
        return persona.salary;
    });

const salariosColSorted = salariosCol.sort(
    (salaryA, salaryB) => {
        return salaryA - salaryB
    });

function esPar(numero){
    return numero % 2 === 0
}

function medianaSalarios(lista){
    const mitad = parseInt(lista.length / 2);

    if(esPar(lista)){
        const personaMitad1 = lista[mitad-1];
        const personaMitad2 = lista[mitad];

        const mediana = calcularMediaAritmetica([personaMitad1, personaMitad2]);
        return mediana;

    }else {
        const personaMitad = lista[mitad];
        return personaMitad;
    }
}

function calcularMediaAritmetica(lista){

    const sumaLista = lista.reduce((valorAcumulado, nuevoElemento) => valorAcumulado + nuevoElemento, 0)
    const promedioLista = sumaLista / lista.length;
    return promedioLista

}

console.log(medianaSalarios(salariosColSorted))