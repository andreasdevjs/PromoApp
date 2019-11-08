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

    @track
    mostrarBuscador = true;

    @track
    mostrarBotonSelector = false;

    @track
    mostrarSelectorEnModal = false;

    @track
    errores = [];

    // Gestiona el clic en los botones del menú para elegir buscador o el selector
    handleClicModo(event) {
        const tipoModo = event.target.getAttribute('data-value'); 
        console.log(tipoModo);

        if(tipoModo === 'buscador') {
            this.mostrarBuscador = true;
            this.mostrarBotonSelector = false;
        } else {
            this.mostrarBotonSelector = true;
            this.mostrarBuscador = false;
        }
    }

    // Gestiona el clic en el botón que abre el selector en un modal
    handleAbrirSelector() {
        this.mostrarSelectorEnModal = true;
        this.template.querySelector('c-modal').show();
    }

    // Gestiona el clic en el botón de terminar el modal del selector para coger las categorías
    handleTerminar() {
        console.log('terminado');
    }

    // Gestiona el clic en el botón de ir atrás en el modal y cierra el modal
    handleIrAtras() {
        this.template.querySelector('c-modal').hide();
    }

    // Gestiona el porcentaje de descuento o cantidad..
    handleChangePorcentajeDescuento(event) {
        this.cantidad = event.detail.value;
    }


    // Gestiona la elección del tipo de descuento de los radio-buttons
    handleChangeSeleccionTipoDescuento(event) {
        this.tipoDescuento = event.detail.value;
    }

    // Función que valida los campos de la promoción y devuelve los errores correspondientes
    validateInfo(reglasDPN) {
        let errores = [];
        const { cantidad, tipoDescuento, niveles } = reglasDPN.reglas;

        if(cantidad < 1 || cantidad === '' || cantidad === undefined) {
            errores.push({id: 1, mensaje: 'El descuento ha de ser mayor que 0'})
        }  

        if(!tipoDescuento) {
            errores.push({id: 2, mensaje: 'Debes elegir 1 tipo de descuento'})
        } 

        if(niveles.length < 1) {
            errores.push({id: 3, mensaje: 'Debe elegir al menos 1 nivel a promocionar'})
        } 

        if(errores.length > 0) {
            return {
                error: true,
                errors: errores
            }
        }

        return {
            error: false
        }

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

        const validation = this.validateInfo(reglasPromocion);

        if (validation.error === false) {
            
            this.guardarReglaDisabled = true;
            console.log(JSON.stringify(reglasPromocion));

            // Creamos el evento personalizado y pasamos la información al padre (<c-logica-promo>)
            const reglaGuardada = new CustomEvent('reglaguardada', { detail: reglasPromocion });

            // Lanzamos el evento
            this.dispatchEvent(reglaGuardada);

            this.error = false;

        } else {
            this.error = true;
            this.errores = validation.errors
        }

        
    }

}