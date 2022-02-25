const coupons = [
    {
        name: "SebastianJC_es_Batman",
        discount: 15,
    },
    {
        name: "pero_no_le_digas_a_nadie",
        discount: 30,
    },
    {
        name: "es_un_secreto_muy_secreto",
        discount: 25,
    },
    {
        name: "NOSEQUEPASA",
        discount: 10,
    },
]

function calcularPrecioConDescueto (precio, descuento) {
    const porcentajePrecioConDescuento = 100 - descuento;

    const precioConDescuento = (precio * porcentajePrecioConDescuento) / 100;

    return precioConDescuento;
};

function onClickButtonPriceDiscount () {
    const inputPrice = document.getElementById("InputPrice");
    const priceValue = Number(inputPrice.value);

    const inputCoupon = document.getElementById("InputCoupon");
    const couponValue = Number(inputCoupon.value);

    let descuento;

    const isCouponValueValid = function (coupon) {
        return coupon.name === couponValue;
    };
    
    const userCoupon = coupons.find(isCouponValueValid);
    
    if (!userCoupon) {
        alert("El cupón " + userCoupon + " no es válido");
    } else {
        const descuento = userCoupon.discount;
        const precioConDescuento = calcularPrecioConDescuento(priceValue, descuento);
    
        const resultP = document.getElementById("ResultP");
        resultP.innerText = "El precio con descuento son: $" + precioConDescuento;
    }

    const precioConDescuento = calcularPrecioConDescueto(priceValue, descuento);

    // const inputDiscount = document.getElementById("InputDiscount");
    // const discountValue = Number(inputDiscount.value);

    // const precioFinal = calcularPrecioConDescueto(priceValue, discountValue);

    const resultP = document.getElementById("totalPrecio");

    

    // resultP.innerText = "El precio con descuento son: $" + precioFinal;
};



