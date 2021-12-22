const precioOriginal = 100;
const descuento = 15;



console.log({
    precioOriginal,
    descuento,
    precioConDescuento
})

function calcularPrecioConDescuento(precio, descuento){
    const porcentajePrecioConDescuento = 100 - descuento;
    const precioConDescuento = (precio * porcentajePrecioConDescuento) / 100;
    const resultP = document.getElementById("result");
    return resultP.innerText = `El precio con descuento son: $${precioConDescuento}`;
}

function onClickButtonPriceDiscount(){
    const price = document.getElementById("inputPrice").value;
    const discount = document.getElementById("inputDiscount").value;
    calcularPrecioConDescuento(price, discount);
}

