import { LightningElement, track} from 'lwc';

export default class Vivc extends LightningElement {

    @track porcentajeTasacion = 0;
    @track importeCesta = 0;
    @track guardarReglaDisabled = false;


    // Gestiona el cambio de porcentaje
    handleChangePorcentajeTasacion(event) {
        this.porcentajeTasacion = event.detail.value;
    }

    // Gestiona el importe minimo de cesta
    handleChangeImporteMinimo(event) {
        this.importeCesta = event.detail.value;
    }

    // Gestiona la creación de la promoción
    handleClickCrearPromocion() {

        this.guardarReglaDisabled = true;

        const reglasPromocion = {
            tipo: 'vivc',
            porcentajeTasacion: this.porcentajeTasacion,
            importeCesta: this.importeCesta
        }

        // Creamos el evento personalizado y pasamos la información al padre (<c-logica-promo>)
        const reglaGuardada = new CustomEvent('reglaguardada', { detail: reglasPromocion });

        // Lanzamos el evento
        this.dispatchEvent(reglaGuardada);
    }
}