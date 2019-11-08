/* eslint-disable no-console */
import { LightningElement, track } from 'lwc';
import getTextoEjemplo from './utils.js'

export default class LogicaPromo extends LightningElement {

    @track ejemplo = '10% de descuento';
    @track tipoPromocion = '';
    @track promociones = {
        vivc: false,
        nxn1: false,
        cdv: false,
        dpn: false,
        vrcc: false,
        vrd: false
    }

    // Gestiona la selección del tipo de evento
    handleChangeSeleccionarTipoPromocion(event) {
        this.tipoPromocion = event.detail.value;
        this.actualizarSeleccion(this.tipoPromocion);
        this.actualizarEjemplo(this.tipoPromocion);
    }

    // En función de la selección se muestra un componente u otro       
    actualizarSeleccion(promocion) {
        let nuevoEstado = {};
        for (let x in this.promociones) {
            if(x === promocion) {
                nuevoEstado[x] = true;
            } else {
                nuevoEstado[x] = false;
            }
        }
        this.promociones = nuevoEstado;
    }

    // Cambia el ejemplo según la promoción seleccionada
    actualizarEjemplo(promoSeleccionada) {
        this.ejemplo = getTextoEjemplo(promoSeleccionada);
    }


    // Opciones de promoción
    get opcionesPromocion() {
        return [
            { label: '3x2, 2x1,… Nx(N-1)', value: 'nxn1' },
            { label: 'Cupón de descuento en venta', value: 'cdv' },
            { label: 'Descuento por nivel', value: 'dpn' },
            { label: 'Venta recuperable con cupones', value: 'vrcc' },
            { label: 'Venta recuperable por documento', value: 'vrd' }
        ];
    }


    // Gestiona el evento personalizado y envia a su vez la información al padre
    handleGuardarReglaPromocion(event) {
        const reglaPromocion = event.detail;
        console.log('Reglas Promoción: ', JSON.stringify(reglaPromocion));

        // Creamos el evento personalizado y pasamos la información al padre (<c-logica-promo>)
        const reglaCreada = new CustomEvent('reglacreada', { detail: {...reglaPromocion} });

        // Lanzamos el evento
        this.dispatchEvent(reglaCreada);

    }

 
}
