import { LightningElement, track, api } from 'lwc';
import getCategoriasProductos from './util/categorias.js';

export default class App extends LightningElement {
    @track ejemplo = '10% de descuento';
    @track codPromocion = '';
    @track nombrePromocion = '';
    @track esSeleccionado = false;
    @track exclusividad = 'GLOBAL';
    @track criterio = '1';
    @track tipoPromocion = 'producto';
    @track displayDiscount = false;
    @track esVisibleDescuentoSimple = true;
    @track esVisibleDescuento2 = false;
    @track criterioDescuentoSimple = 'porcentaje';
    @track esAbiertoModal = false;
    @track getDatosPromocion = 'No hay datos de promoción aún :(';
    @track esDisabledInputNumber = false;
    @track tiendasSeleccionadas = [];
    @track fechaInicio;
    @track fechaFin;
    @track categorias = getCategoriasProductos();
    @track opcionesDescuentoSimple2 = [
        {label: 'Porcentaje', value: 'porcentaje'},
        {label: 'Cantidad', value: 'cantidad'},
        {label: 'Precio Fijo', value: 'preciofijo'},
        {label: 'Envio Gratuito', value: 'enviogratis'}
    ];


    @track opcionesPromocion = [
        {label: 'Producto', value: 'producto'},
        {label: 'Pedido', value: 'pedido'}
        //{label: 'Envío', value: 'envio'}
    ];

    @track opcionesCondiciones = [
        {label: 'Sin criterio', value: '1'},
        {label: 'Importe de compra de producto', value: '2'},
        {label: 'Cantidad de compra de producto', value: '3'},
        {label: 'Combinación de productos sin criterio', value: '4'},
        {label: 'Compra X, recibe Y', value: '5'},
        {label: 'Compra X e Y, recibe Z', value: '6'},
        {label: 'Compra X por total de Y', value: '7'}
    ];

    @track opcionesDescuentoSimple = [
        {label: 'Porcentaje', value: 'porcentaje'},
        {label: 'Cantidad', value: 'cantidad'},
        {label: 'Precio Fijo', value: 'preciofijo'},
        {label: 'Envio Gratuito', value: 'enviogratis'}
    ]

    @track selectedItemValue;

    
    // ***********************************************//
    // ***** Comienzan las funciones y métodos ***** //
    // *********************************************//

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
        this.tiendasSeleccionadas = event.detail.value;
        console.log(this.tiendasSeleccionadas)
    }

    // Gestiona el botón de activar promoción
    handleActivacion() {
        this.esSeleccionado = !this.esSeleccionado;
    }

    // Gestiona el tipo de exclusividad elegida
    handleExclusividad(event) {
        this.exclusividad = event.detail.value;
    }

    // Gestiona la selección del tipo de promoción
    handleChangeTipoPromocion(event) {
        this.tipoPromocion = event.detail.value;
        console.log(this.tipoPromocion)
        switch(this.tipoPromocion) {
            case 'producto':
                this.esVisibleDescuentoSimple = true;
                this.setearCondiciones('producto');
                break;
            case 'pedido':
                this.esVisibleDescuentoSimple = false;
                this.setearCondiciones('pedido');
                break;
            case 'envio':
                this.esVisibleDescuentoSimple = false;
                this.setearCondiciones('envio');
                break;
        }
    }

    setearCondiciones(tipoPromo) {
        if(tipoPromo == 'producto') {
            this.opcionesCondiciones = [
                {label: 'Sin criterio', value: '1'},
                {label: 'Cantidad de producto según criterio', value: '2'},
                {label: 'Número de productos según criterio', value: '3'},
                {label: 'Combinación de productos', value: '4'},
                {label: 'Compra X, recibe Y', value: '5'},
                {label: 'Compra X e Y, recibe Z', value: '6'},
                {label: 'Compra X por total de', value: '7'},
            ]
        } else if (tipoPromo == 'pedido') {
            this.opcionesCondiciones = [
                {label: 'Cantidad de producto según criterio', value: '2'},
                {label: 'Número de productos según criterio', value: '3'},
                {label: 'Combinación de productos', value: '4'}
            ]
        } else if (tipoPromo == 'envio') {
            this.opcionesCondiciones = [
                {label: 'Cantidad de producto según criterio', value: '2'},
                {label: 'Número de productos según criterio', value: '3'},
                {label: 'Combinación de productos', value: '4'}
            ]
        }
    }

    // Gestiona la selección de la condición
    handleChangeCondicionPromocion(event) {
        this.criterio = event.detail.value;

        if(this.criterio == '1') {

            this.esVisibleDescuentoSimple = true;
            this.esVisibleDescuento2 = false;
            this.ejemplo = '10% de descuento';

        } else if(this.criterio == '2') {
            this.esVisibleDescuentoSimple = false;
            this.esVisibleDescuento2 = true;
            this.ejemplo = 'Compra 10 o más productos de X y obtenga un 10 por ciento de descuento.';
        }
    }

    // Gestiona la selección del tipo de descuento.. si es Envío Gratuito se vuelve disabled para meter el número
    handleChangeDescuentoSimple(event) {
        this.criterioDescuentoSimple = event.detail.value;
        if(this.criterioDescuentoSimple == 'enviogratis') {
            this.esDisabledInputNumber = true;
        } else {
            this.esDisabledInputNumber = false;
        }
    }

    // Gestiona la selección de la categoría a la que aplicar el descuento..
    handleOnselectCategoria(event) {
        const item = this.findNested(this.categorias, 'name', event.detail.name);
        this.selectedItemValue = item.label;
    }

    // Searches the object for the item containing a key of the provided name that contains the value provided
    findNested(obj, key, value) {
        // Base case
        if (obj[key] === value) {
            return obj;
        }

        // otherwise
        const objKeys = Object.keys(obj);
        for (const k of objKeys) {
            if (typeof obj[k] === 'object' || Array.isArray(obj[k])) {
                const found = this.findNested(obj[k], key, value);

                if (found) {
                    // If the object was found in the recursive call, bubble it up.
                    return found;
                }
            }
        }

        return null;
    }

    // Gestiona la búsqueda de las categorías según se vaya escribiendo
    handleChangeBuscarCategoria(event) {}
 
    // Funciones que gestionan el modal de confirmación de la promoción y manda la información elegida al modal previo a crear la promoción
    handleAbrirModal() {

        this.esAbiertoModal = true;
        
    }
   
    handleCerrarModal() {
        this.esAbiertoModal = false;
    }


    // Opciones de exclusividad
    get opcionesExclusividad() {
        return [
            { label: 'NO (Puede ser combinada con cualquier promoción)', value: 'NO' },
            { label: 'CLASE (No puede ser combinada con promociones de la misma clase)', value: 'CLASS' },
            { label: 'GLOBAL (No puede ser combinada con ninguna otra promoción)', value: 'GLOBAL' },
        ];
    }

    get tiendas() {
        return [
            { label: 'Tienda 1', value: 'tienda1' },
            { label: 'Tienda 2', value: 'tienda2' },
            { label: 'Tienda 3', value: 'tienda3' },
            { label: 'Tienda 4', value: 'tienda4' },
            { label: 'Tienda 5', value: 'tienda5' },
            { label: 'Tienda 6', value: 'tienda6' },
        ];
    }

    get getEsSeleccionado() {
        const esActivaLaPromocion = this.esSeleccionado;
        return esActivaLaPromocion ? 'Si' : 'No'
    }














}
