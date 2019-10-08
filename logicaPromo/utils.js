const getTextoEjemplo = (tipoPromocion) => {
    
    let texto = '';

    switch(tipoPromocion) {
        case 'vivc':
            texto = 'Para una promo al 10%, a alguien que nos vaya a vender algo que le vamos a comprar por 100 euros, le pagaremos realmente 110, y le vamos a dar esos 10 euros extras en un vale';
            break;
        case 'nxn1':
            texto = 'Consiste en descontar el precio de la cesta por el valor del producto promocionado de menor valor si se compran N de ellos. El descuento de la cesta se realizará en todos los productos de la cesta de forma proporcional, sean los productos del mismo nivel que los promocionados o no.';
            break;
        case 'cdv':
            texto = 'Consiste en descontar el precio de la cesta por el valor de un cupón, redimible según se cumpla la condición de precio mínimo de la cesta. El descuento de la cesta se realizará en todos los productos de la cesta de forma proporcional.';
            break;
        case 'dpn':
            texto = 'Consiste en introducir en la cesta de la compra los productos de ciertos niveles con un porcentaje de precio rebajado.';
            break;
        case 'vrcc':
            texto = 'Consiste en la rebaja del 100% (o del 50%) de la cuota de recuperación de las ventas recuperables a partir de un cupón numerado del cliente, que se introducirán en la mecanización de la compra.';
            break;
        case 'vrd':
            texto = 'Consiste en la rebaja del 100% (o del 50%) de la cuota de recuperación de las ventas recuperables si el cliente se encuentra promocionado de forma explícita. Para ello se comprueba el documento de identidad del cliente en una tabla de documentos previamente rellena.';
            break;
    }

    return texto;
}

export default getTextoEjemplo;