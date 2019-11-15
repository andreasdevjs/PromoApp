/* eslint-disable no-console */
import { LightningElement, track, api } from 'lwc';
import niveles from '@salesforce/resourceUrl/niveles';
import { loadScript } from 'lightning/platformResourceLoader';


export default class Buscador extends LightningElement {
    
    @track textoIntroducido = '';
    @track categoriasEncontradas = [];
    @track categoriasSeleccionadas = [];
    @track error = false;
    todasCategorias = [];
    @track mostrarHasSeleccionado = false;
    _niveles = []; // array con todos los niveles importados


    // Getter público para obtener las categorías seleccionadas
    @api
    get obtenerCategorias() {
        return this.categoriasSeleccionadas;
    }

    // Generar id únicos para los for each
    get randomId() {
        return this.handleRandomID();
    }

    // Crea un ID único
    handleRandomID() {
        return Date.now() + Math.random().toString(36).substr(2, 9) + Math.random().toString(36).substr(2, 9);
    }


    // Gestiona la búsqueda de la categoria en el buscador
    handleChangeBuscarCategoria(event) {
        this.textoIntroducido = event.detail.value;
        this.buscarCategoriaEnArbol(this.textoIntroducido);
    }

    
    // Obtiene los resultados según lo que se vaya buscando dinámicamente
    buscarCategoriaEnArbol(textoIntroducido) {

        let resultados = this._niveles.filter((resultado) => {
            return resultado.descripcion.toLowerCase().includes(textoIntroducido.toLowerCase())
        })
        
        this.categoriasEncontradas = resultados;

        if(textoIntroducido.length === 0) {
            this.categoriasEncontradas = [];
        }
    }


    // Gestiona el clic en la categoría que se quiera añadir.. y setea los valores de nuevo
    handleClicCategoria(event) {
        const categoriaSeleccionada = event.target.getAttribute("data-value");
        const nivel = event.target.getAttribute("data-nivel");
        this.categoriasSeleccionadas.push({'nombre': categoriaSeleccionada, 'id': this.handleRandomID(), 'cod_nivel': Number(nivel) });
        this.mostrarHasSeleccionado = true;
        console.log(JSON.stringify(this.categoriasSeleccionadas));
        this.categoriasEncontradas = [];
        this.textoIntroducido = '';
    }


    // Gestiona la eliminación de la categoría seleccionada en forma de 'pill' pulsando en la X
    handleRemoveCategoriaSeleccionada(event) {
        const categoriaAEliminar = event.target.getAttribute("data-value");
        const categoriasRestantes = this.categoriasSeleccionadas.filter((categoria) => {
            return categoria.nombre !== categoriaAEliminar;
        });

        this.categoriasSeleccionadas = categoriasRestantes;
    }

    // Carga los niveles
    async connectedCallback() {
        await loadScript(this, niveles)
        .then(() => { this._niveles = window.niveles; console.log(this._niveles) })
        .catch(error => console.log('ERROR', error))
    }

    // Comprobar con cada renderización
    renderedCallback() {
        if(this.categoriasSeleccionadas.length === 0) {
            this.mostrarHasSeleccionado = false;
        }
    }


}
