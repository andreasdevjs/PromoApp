import { LightningElement, track, api } from 'lwc';

export default class Dpn extends LightningElement {

    @track cantidad;
    @track tipoDescuento = '';
    
    opcionesDescuento = [
        { label: 'Porcentaje', value: '1' },
        { label: 'Fijo', value: '2' },
    ]


    // Gestiona el porcentaje de descuento o cantidad..
    handleChangePorcentajeDescuento(event) {
        this.cantidad = event.detail.value;
    }
}