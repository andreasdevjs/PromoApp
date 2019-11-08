/* eslint-disable no-console */
/* eslint-disable no-confusing-arrow */
import { LightningElement, track, api } from 'lwc';
import niveles from '@salesforce/resourceUrl/niveles';
import { loadScript } from 'lightning/platformResourceLoader';

export default class SelectorVisual extends LightningElement {

    @track
    nivelesPrincipales = []; // los niveles que se muestran en la vista para mostrar (cambian al entrar en hijos)

    _categoriasParaEnviar = []; // niveles para enviar a la promoción

    @track
    breadcrumbs = []; // array de migas de pan

    _niveles = []; // array con todos los niveles importados


    // Genera IDs únicos para las key de los for:each obligatorios
    randomID() {
        return Date.now() + Math.random().toString(36).substr(2, 9) + Math.random().toString(36);
    }


    // Función que se encarga de renderizar como seleccionadas las categorías elegidas anteriormente para no perder visualmente lo elegido
    // Cada vez que se llama esta función, marca como checked las categorías que estén en _categoriasparaenviar
    renderizarNivelesSeleccionados() {
        const [...todosLosInputs] = this.template.querySelectorAll('input[type=checkbox]');
        console.log(todosLosInputs);
        for (let index = 0; index < todosLosInputs.length; index++) {
            const input = todosLosInputs[index];
            if(this._categoriasParaEnviar.indexOf(input.dataset.nivel) !== -1) {
                input.checked = true;
            }
        }
    }


    // Gestiona la navegación de las migas de pan. Coge el nivel y te muestra el paso "anterior".
    // además si clicas en una miga de pan padre de un hijo, la navegación se ajusta con el length
    handleNavigateTo(event) {
        const nivelClicado = event.target.getAttribute('data-nivel');
        const numeroBreadcrumb = event.target.getAttribute('data-numero');
        console.log('MIGA DE PAN CLICADA: ', nivelClicado)
        if(nivelClicado === '0') {
            this.nivelesPrincipales = this._niveles.filter((categoria) => {
                return categoria.cod_nivel_padre === '0' && categoria.descripcion !== 'GOD' && categoria.descripcion !== 'STOREV3';
            }).sort((a,b) => (a.descripcion > b.descripcion) ? 1 : ((b.descripcion > a.descripcion) ? -1 : 0));
            this.breadcrumbs.length = 1;
        } else {
            this.nivelesPrincipales = this._niveles.filter((categoria) => {
                return categoria.cod_nivel_padre === nivelClicado
            });
            this.breadcrumbs.length = numeroBreadcrumb;
        }
    }


    // Gestiona el clic en la categoría mayor
    handleSelectParent(event) {
        
        const nivelSeleccionado = event.target.getAttribute('data-nivel'); 
        const estaSelecionado = event.target.checked;

        // Si se checkea el input (aparece azul), añadimos el nivel
        if(estaSelecionado) {
            this._categoriasParaEnviar.push(nivelSeleccionado);
        } else { // sino lo eliminamos
            this._categoriasParaEnviar = this._categoriasParaEnviar.filter((nivel) => nivel !== nivelSeleccionado)  
        }

        console.log('CATEGORÍAS PARA ENVIAR: ',this._categoriasParaEnviar);
    }


    // Gestiona el clic en el botón de expandir hijos
    handleSelectChildren(event) {

        const nivelSeleccionado = event.target.getAttribute('data-nivel');
        
        // si ya está el nivel elegido en las categorías para enviar, no lo añadimos
        if(!this._categoriasParaEnviar.includes(nivelSeleccionado)) {
            this._categoriasParaEnviar.push(nivelSeleccionado);
        }

        // renderiza los hijos cuando se haya clicado 'seleccionar niveles' | Filta del json los que tengan su categoría padre igual a la seleccionada
        this.nivelesPrincipales = this._niveles.filter((categoria) => {
            return categoria.cod_nivel_padre === nivelSeleccionado
        });

         // si ya estamos en un nivel 2 de profundidad, hacemos otra cosa..
         if(this.breadcrumbs.length === 1 ) {
            // Obtengo el objeto nivel completo (del que se ha hecho clic) para enviarlo a las migas de pan
            // TODO: ACTUALMENTE SOLO COGE EL NIVEL UNO POR LO DE === '0', tendríamos que ver cómo hacer para añadir más
            const nivelObj = this._niveles.filter((nivel) => nivel.cod_nivel === nivelSeleccionado && nivel.cod_nivel_padre === '0');
            const nuevoBreadcumb = {
                nivel: nivelObj[0].cod_nivel,
                id: this.randomID(),
                label: nivelObj[0].descripcion,
                name: nivelObj[0].descripcion,
                num: this.breadcrumbs.length + 1 
            }
            this.breadcrumbs.push(nuevoBreadcumb);
        } else {
            const nivelObjAnterior = this.breadcrumbs[this.breadcrumbs.length - 1];
            const nivelObj = this._niveles.filter((nivel) => nivel.cod_nivel === nivelSeleccionado && nivel.cod_nivel_padre === nivelObjAnterior.nivel);
            const nuevoBreadcumb = {
                nivel: nivelObj[0].cod_nivel,
                id: this.randomID(),
                label: nivelObj[0].descripcion,
                name: nivelObj[0].descripcion,
                num: this.breadcrumbs.length + 1 
            }
            this.breadcrumbs.push(nuevoBreadcumb);
        }

    }


    // FUNCIÓN ASÍNCRONA
    // En cuanto el componente esté conectado, nos traemos el árbol completo del recurso estático,
    // mostramos las categorías padres ordenadas e insertamos el nivel padre en las migas de pan.
    async connectedCallback() {

        await loadScript(this, niveles)
        .then(() => { this._niveles = window.niveles })
        .catch(error => console.log('ERROR', error))

        this.nivelesPrincipales = this._niveles.filter((categoria) => {
            return categoria.cod_nivel_padre === '0' && categoria.descripcion !== 'GOD' && categoria.descripcion !== 'STOREV3';
        }).sort((a,b) => (a.descripcion > b.descripcion) ? 1 : ((b.descripcion > a.descripcion) ? -1 : 0));

        this.breadcrumbs.push({id: '0', label: 'Todas las categorías', name: 'Todas las categorías', nivel: 0, num: this.breadcrumbs.length + 1});
    }


    // Con cada render se ejecuta la función
    renderedCallback() {
        console.log('NUEVO RENDERIZADO');
        this.renderizarNivelesSeleccionados();
    }


    // Método público para acceder a las categorías
    @api
    get obtenerCategoriasPromocion() {
        return this._categoriasParaEnviar;
    }

}


// TODOS:
// -> crear un toogle en cada nivel que marque todos como completados