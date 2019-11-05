import { LightningElement, track } from 'lwc';
import arbolCategorias from './arbolCategorias.js'

export default class BuscadorCategorias extends LightningElement {
    

    @track textoIntroducido ='';
    @track categoriasEncontradas = [];
    @track categoriasSeleccionadas = [];

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

        let resultados = arbolCategorias.filter((resultado) => {
            return resultado.name.toLowerCase().includes(textoIntroducido.toLowerCase())
        })
        
        this.categoriasEncontradas = resultados;

        if(textoIntroducido.length === 0) {
            this.categoriasEncontradas = [];
        }
    }


    // Gestiona el clic en la categoría que se quiera añadir..
    handleClicCategoria(event) {
        const categoriaSeleccionada = event.target.getAttribute("data-value");
        this.categoriasSeleccionadas.push({'nombre': categoriaSeleccionada, 'id': this.handleRandomID()});
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



}


/* 

// Obtiene los resultados según lo que se vaya buscando dinámicamente
    buscarCategoriaEnArbol(textoIntroducido) {

        let resultados = arbolCategorias.filter((resultado) => {
            const regex = new RegExp(`^${textoIntroducido}`, 'gi');
            return resultado.name.match(regex);
        })
        
        this.categoriasEncontradas = resultados;

        if(textoIntroducido.length == 0) {
            this.categoriasEncontradas = [];
        }

    }

*/
