import { LightningElement, track, api } from 'lwc';

export default class Cdv extends LightningElement {
  
    @track textoPromocion = `Se descontaran X euros en compras superiores a los Y euros. Sólo los primeros Z cupones.`
    @track importeCupon;
    @track numeroCupones;
    @track importeMinimoCesta;


    // Gestiona el importe del cupón
    handleChangeImporteCupon(event) {
        this.importeCupon = event.detail.value;
        this.textoPromocion = `Se descontaran ${this.importeCupon} euros en compras superiores a los Y euros. Sólo los primeros Z cupones.`
    }

    // Gestiona el numero de cupones con descuento
    handleChangeNumeroCupones(event) {
        this.numeroCupones = event.detail.value;
        this.textoPromocion = `Se descontaran ${this.importeCupon} euros en compras superiores a los Y euros. Sólo los primeros ${this.numeroCupones} cupones.`
    }

    // Gestiona el importe mínimo de la cesta
    handleChangeImporteMinimoCesta(event) {
        this.importeMinimoCesta = event.detail.value;
        this.textoPromocion = `Se descontaran ${this.importeCupon} euros en compras superiores a los ${this.importeMinimoCesta} euros. Sólo los primeros ${this.numeroCupones} cupones.`

    }



}