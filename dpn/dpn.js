import { LightningElement, track } from 'lwc';

export default class Dpn extends LightningElement {

    @track 
    cantidad;

    @track 
    tipoDescuento = '';

    @track 
    guardarReglaDisabled = false;
    
    @track
    opcionesDescuento = [
        { label: 'Porcentaje', value: '1' },
        { label: 'Fijo', value: '2' },
    ]

    @track
    error = false;

    @track
    errorMessage = '';

    // Gestiona el porcentaje de descuento o cantidad..
    handleChangePorcentajeDescuento(event) {
        this.cantidad = event.detail.value;
    }


    // Gestiona la elección del tipo de descuento de los radio-buttons
    handleChangeSeleccionTipoDescuento(event) {
        this.tipoDescuento = event.detail.value;
    }


    validateDPN(reglasDPN) {
        const { cantidad, tipoDescuento, niveles } = reglasDPN.reglas;
        if(cantidad < 1 || !tipoDescuento || niveles.length < 1) {
            return false;
        }
        return true;
    }


    // Gestiona la creación de las reglas de la promoción
    handleClickCrearPromocion() {
        const categorias = this.template.querySelector('c-buscador').obtenerCategorias;
        const nivelesCategorias = categorias.map((producto) => {
            return producto.cod_nivel;
        });

        const reglasPromocion = {
            tipo: 'dpn',
            reglas: {
                cantidad: this.cantidad,
                tipoDescuento: this.tipoDescuento,
                niveles: nivelesCategorias
            }
        }

        const dpnValid = this.validateDPN(reglasPromocion);

        if (dpnValid) {
            
            this.guardarReglaDisabled = true;
            console.log(JSON.stringify(reglasPromocion));

            // Creamos el evento personalizado y pasamos la información al padre (<c-logica-promo>)
            const reglaGuardada = new CustomEvent('reglaguardada', { detail: reglasPromocion });

            // Lanzamos el evento
            this.dispatchEvent(reglaGuardada);

            this.error = false;
        } else {
            this.error = true;
            this.errorMessage = 'El descuento ha de ser mayor que 0, debes elegir 1 tipo de descuento y al menos 1 nivel a promocionar.';
        }

        
    }

}