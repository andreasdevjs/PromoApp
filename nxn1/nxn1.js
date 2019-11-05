import { LightningElement, track } from 'lwc';

export default class Nxn1 extends LightningElement {

    numeroProductos = 0;

    @track 
    guardarReglaDisabled = false;
    
    // Gestiona el número de productos
    handleChangeNumeroProductos(event) {
        this.numeroProductos = event.detail.value;
    }

    // Gestiona la creación de las reglas de la promoción
    handleClickCrearPromocion() {
        const categorias = this.template.querySelector('c-buscador').obtenerCategorias;
        
        this.guardarReglaDisabled = true;

        const reglasPromocion = {
            tipo: 'nxn1',
            reglas: {
                numeroProductos: this.numeroProductos,
                categorias: categorias
            }
        }

        // Creamos el evento personalizado y pasamos la información al padre (<c-logica-promo>)
        const reglaGuardada = new CustomEvent('reglaguardada', { detail: reglasPromocion });

        // Lanzamos el evento
        this.dispatchEvent(reglaGuardada);
    }
    
}