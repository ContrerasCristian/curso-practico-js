const perimetroCuadrado = (ladoCuadrado) =>  ladoCuadrado * 4;


const areaCuadrado = (ladoCuadrado) => ladoCuadrado * ladoCuadrado;


const perimetroTriangulo = (ladoTriangulo, ladoTriangulo2, baseTriangulo) => ladoTriangulo + ladoTriangulo2 + baseTriangulo;


const areaTriangulo = (baseTriangulo, alturaTriangulo) => (baseTriangulo * alturaTriangulo) / 2;


const diametroCirculo = (radioCirculo) => radioCirculo * 2;


const perimetroCirculo = (radio)=>{
    const diametro = diametroCirculo(radio);
    return diametro * Math.PI;
}

const areaCirculo = (radioCirculo)=>(radioCirculo * radioCirculo) * Math.PI;

function calcularPerimetroCuadrado(){
    const input = document.getElementById("inputCuadrado").value;
    const perimetro = perimetroCuadrado(input);
    alert(perimetro);
}

function calcularAreaCuadrado(){
    const input = document.getElementById("inputCuadrado").value;
    const area = areaCuadrado(input);
    alert(area);
}
