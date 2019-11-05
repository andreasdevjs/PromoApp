/* eslint-disable no-console */
import { LightningElement, track, api } from 'lwc';
import arbolCategorias from './arbolCategorias.js'

export default class Buscador extends LightningElement {
    
    @track textoIntroducido = '';
    @track categoriasEncontradas = [];
    @track categoriasSeleccionadas = [];
    @track error = false;
    todasCategorias = [];
    @track mostrarHasSeleccionado = false;


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

        let resultados = arbolCategorias.filter((resultado) => {
            return resultado.name.toLowerCase().includes(textoIntroducido.toLowerCase())
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


    /*
    // Gestiona la llamada al árbol y se trae las categorías. Las mete en la propiedad todasCategorías que se inicializa vacío
    cargarCategorias() {
        fetch('https://hermes.cashconverters.es/tree/full', {
            'method': 'GET',
            'mode': 'no-cors',
            'headers': {
                'Content-Type': 'application/json',
                'Authorization': 'f29668b65a8a74ab5e64f0778a0c456feb078639',
                'Accept-Language': 'es-ES',
                'User-Agent': 'HermesClient/puc'
            }
        }).then((response)=> {
            console.log(response);
        })
    }


    // Método del ciclo de vida que se ejecuta cuando se haya conectado el componente
    connectedCallback() {
        this.cargarCategorias()
    
    }
    */


    // Getter público para obtener las categorías seleccionadas
    @api
    get obtenerCategorias() {
        return this.categoriasSeleccionadas;
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
