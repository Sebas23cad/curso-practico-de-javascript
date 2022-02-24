function calcularPrecioConDescueto (precio, descuento) {
    const porcentajePrecioConDescuento = 100 - descuento;

    const precioConDescuento = (precio * porcentajePrecioConDescuento) / 100;

    return precioConDescuento;
};

function onClickButtonPriceDiscount () {
    const inputPrice = document.getElementById("InputPrice");
    const priceValue = Number(inputPrice.value);

    const inputDiscount = document.getElementById("InputDiscount");
    const discountValue = Number(inputDiscount.value);

    const precioFinal = calcularPrecioConDescueto(priceValue, discountValue);

    const resultP = document.getElementById("totalPrecio");

    resultP.innerText = "El precio con descuento son: $" + precioFinal;

    console.log(precioFinal);
};
