import { LightningElement, track, api } from 'lwc';
import todasLasTiendas from './tiendas.js';

export default class InfoPromo extends LightningElement {
    
    @track codPromocion = '';
    @track nombrePromocion = '';
    @track fechaInicio = '';
    @track fechaFin = '';
    @track esSeleccionado = false;
    @track tiendasSeleccionadas = [];
    @track tiendaBuscada = '';
    @track tiendas = todasLasTiendas;
    @track botonGuardarDisabled = false;
    @track error = false;
    @track errorMessage = '';
    @track errores = [];
    _reset;

    // Gestiona el ID random pulsando el botón
    handleRandomID() {
        const ID = Date.now() + Math.random().toString(36).substr(2, 9) + Math.random().toString(36).substr(2, 9);
        this.codPromocion = ID;
    }

    // Gestiona el input del ID de la promoción
    handleChangeCodPromocion(event) {
        this.codPromocion = event.target.value;
    }

    // Gestiona el input del nombre  de la promoción
    handleChangeNombrePromocion(event) {
        this.nombrePromocion = event.target.value;
    }

    // Gestiona la fecha de inicio de la promoción
    handleChangeFechaInicio(event) {
        this.fechaInicio = event.detail.value;
    }

    // Gestiona la fecha de finalización de la promoción
    handleChangeFechaFin(event) {
        this.fechaFin = event.detail.value;
    }

    // Gestiona la selección de las tiendas
    handleChangeTienda(event) {
        const tienda = event.detail.value;
        this.tiendasSeleccionadas.push(tienda);
    }

    // Gestiona el botón de activar promoción
    handleActivacion() {
        this.esSeleccionado = !this.esSeleccionado;
    }

    // Gestiona la búsqueda de la tienda para simplificar la selección posterior
    handleChangeBusquedaTienda(event) {
        const tiendaBuscada = event.detail.value;
        const resultadosBusqueda = todasLasTiendas.filter((tienda) => {
            return tienda.label.toLowerCase().includes(tiendaBuscada.toLowerCase());
        });

        this.tiendas = resultadosBusqueda;
    }

    // Función que valida los datos 
    // TODO: mensaje concreto por cada tipo de error
    validateInfo(infoObject) {
        let errores = [];
        const hoy = new Date();
        const fechaInicioPromocion = new Date(infoObject.fechaInicio);
        const fechaFinalPromocion = new Date(infoObject.fechaFin);

        if(infoObject.codPromocion.length < 30) {
            errores.push({id: 1, mensaje: 'La longitud del ID no puede ser menor de 30 caracteres'})
        }  

        if(infoObject.nombrePromocion.length < 10 || infoObject.nombrePromocion.length === 0) {
            errores.push({id: 2, mensaje: 'El nombre de la promoción no puede estar vacío y debe tener más de 10 caracteres'})
        } 

        if(fechaInicioPromocion > fechaFinalPromocion) {
            errores.push({id: 3, mensaje: 'La fecha inicial no puede ser mayor que la fecha de finalización'})
        } 

        if(fechaInicioPromocion < hoy.getTime()) {
            errores.push({id: 4, mensaje: 'La fecha de inicio de la promoción no puede comenzar en el pasado'})
        } 

        if(infoObject.tiendas.length === 0) {
            errores.push({id: 5, mensaje: 'Tiene que elegir al menos 1 tienda para aplicar la promoción'})
        } 

        if(infoObject.fechaFin === undefined || infoObject.fechaFin === '' || infoObject.fechaInicio === undefined || infoObject.fechaInicio === '') {
            errores.push({id: 6, mensaje: 'Las fechas no pueden estar vacías'})
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


    // Gestiona el clic en guardar y crear las reglas de la promoción / También validamos datos
    handleGuardarInfoPromocion() {

        const infoPromo = {
            codPromocion: this.codPromocion,
            nombrePromocion: this.nombrePromocion,
            fechaInicio: this.fechaInicio,
            fechaFin: this.fechaFin,
            tiendas: this.tiendasSeleccionadas[this.tiendasSeleccionadas.length-1] ? this.tiendasSeleccionadas[this.tiendasSeleccionadas.length-1] : [],
            activa: this.esSeleccionado
        }

        const validation = this.validateInfo(infoPromo);
        console.log('ERRORES: ', validation);
        console.log(infoPromo);

        if(validation.error === false) {

            this.botonGuardarDisabled = true;
        
            // Creamos el evento personalizado y pasamos la información al padre (App)
            const infoGuardada = new CustomEvent('infoguardada', { detail: infoPromo });
    
            // Lanzamos el evento al elemento padre
            this.dispatchEvent(infoGuardada);

            this.error = false;
            this.errores = [];

        } else {
            this.error = true;
            this.errores = validation.errors
            this.errorMessage = 'Asegúrese de que los campos contienen el formato correcto'
        }
        
    }

    // TODO: mejorar este reseteo..
    get reset() {
        return this._pageSize;
    }

    @api
    set reset(value) {
        if(value === true) {
            this.codPromocion = '';
            this.nombrePromocion = '';
            this.fechaInicio = '';
            this.fechaFin = '';
            this.tiendasSeleccionadas = [];
            
        }
    }

}
