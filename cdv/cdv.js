import { LightningElement, track, api } from 'lwc';

export default class Cdv extends LightningElement {
  
    @track 
    textoPromocion = `Se descontaran X euros en compras superiores a los Y euros. Sólo los primeros Z cupones.`;

    @track 
    importeCupon;

    @track 
    numeroCupones;
    
    @track 
    importeMinimoCesta;

    @track 
    guardarReglaDisabled = false;


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

    // Gestiona la creación de las reglas de la promoción
    handleClickCrearPromocion() {
        
        this.guardarReglaDisabled = true;

        const reglasPromocion = {
            tipo: 'cdv',
            reglas: {
                importeCupon: this.importeCupon,
                numeroCupones: this.numeroCupones,
                importeMinimoCesta: this.importeMinimoCesta
            }
        }

        // Creamos el evento personalizado y pasamos la información al padre (<c-logica-promo>)
        const reglaGuardada = new CustomEvent('reglaguardada', { detail: reglasPromocion });

        // Lanzamos el evento
        this.dispatchEvent(reglaGuardada);
    }



}