/* eslint-disable no-console */
import { LightningElement, track } from 'lwc';


// Importamos de la api la función de creación de records
import { createRecord } from 'lightning/uiRecordApi';

// Importamos para poder hacer un toast
import { ShowToastEvent } from 'lightning/platformShowToastEvent';

// Importamos los campos y el objeto Promoción
import PROMOCION_OBJECT from '@salesforce/schema/Promocion__c';
import PROMO_ACTIVADA from '@salesforce/schema/Promocion__c.activada__c';
import PROMO_COD from '@salesforce/schema/Promocion__c.cod_promocion__c';
import PROMO_NOMBRE from '@salesforce/schema/Promocion__c.Name';
import PROMO_TIPO from '@salesforce/schema/Promocion__c.tipo_promocion__c';
import PROMO_FECHA_INI from '@salesforce/schema/Promocion__c.fecha_ini__c';
import PROMO_FECHA_FIN from '@salesforce/schema/Promocion__c.fecha_fin__c';
import PROMO_TIENDAS from '@salesforce/schema/Promocion__c.tiendas__c';
import PROMO_REGLAS from '@salesforce/schema/Promocion__c.Regla__c';

const API_ENDPOINT_CV_CREATE_PROMO = 'http://63ba1265.ngrok.io/';



export default class App extends LightningElement {

  informacionPromocion;
  reglasPromocion;

  @track
  mostrarReglasPromocion = false;

  @track 
  mostrarBotonCrearPromocion = false;

  @track 
  mostrarLoader = false;

  @track 
  mostrarError = false;

  @track
  error = '';

  @track
  mostrarModalReset = false;

  // Gestiona el clic en el botón reset
  handleResetear() {
    this.mostrarModalReset = true;
    this.template.querySelector('c-modal').show();
    
  }

  handleCancelarReset() {
    this.template.querySelector('c-modal').hide();
  }

  // Gestiona el clic en el botón de reset
  handleSelectMenu(event) {
    console.log(event.target)
    // TODO: crear la funcionalidad que resetee todo la app de promociones
  }


  // Gestionamos la información enviada por el component <c-info-promo>
  handleInfoGuardada(event) {
    const informacion = event.detail;
    console.log(JSON.stringify(informacion))
    this.mostrarReglasPromocion = true;
    this.informacionPromocion = Object.assign({}, informacion);
  }

  // Gestionamos la información enviada por el component <c-logica-promo>
  handleReglaCreada(event) {
    const reglas = event.detail;
    console.log(JSON.stringify(reglas))
    this.reglasPromocion = Object.assign({}, reglas);
    this.mostrarBotonCrearPromocion = true;
  }

  // Gestiona la creación en salesforce de la promoción
  handleCrearPromocion() {
    const data = { ...this.informacionPromocion, ...this.reglasPromocion };
    console.log(JSON.stringify(data));
    const { codPromocion, nombrePromocion, fechaInicio, fechaFin, tiendas, activa, tipo, reglas } = data;

    const botonCrearPromo = this.template.querySelector('.crear-promo');
    botonCrearPromo.disabled = true;

    const fields = {};
    fields[PROMO_NOMBRE.fieldApiName] = nombrePromocion;
    fields[PROMO_COD.fieldApiName] = codPromocion;
    fields[PROMO_ACTIVADA.fieldApiName] = activa;
    fields[PROMO_FECHA_INI.fieldApiName] = fechaInicio;
    fields[PROMO_FECHA_FIN.fieldApiName] = fechaFin;
    fields[PROMO_TIENDAS.fieldApiName] = JSON.stringify(tiendas);
    fields[PROMO_TIPO.fieldApiName] = tipo;
    fields[PROMO_REGLAS.fieldApiName] = JSON.stringify(reglas);

    const recordInput = { apiName: PROMOCION_OBJECT.objectApiName, fields };

    this.mostrarLoader = true;

    // Creamos la promoción en Salesforce
    createRecord(recordInput)
    .then((resultado) => {
      console.log('¡¡¡PROMO CREADA!!!!', resultado);
      const toastCreacionOk = new ShowToastEvent({
          title: '¡Promoción creada!',
          message: 'Se ha creado correctamente su promoción',
          variant: 'success',
          mode: 'dismissable'
      });
    
      this.mostrarLoader = false;
      this.dispatchEvent(toastCreacionOk);
      return resultado;
    })
    .then((r) => {
      console.log('RESULTADO INSERCIÓN: ', r)
      return fetch(API_ENDPOINT_CV_CREATE_PROMO, { 
        method: 'POST', 
        headers: {'Content-Type': 'application/json'},
        mode: 'cors',
        body: JSON.stringify(data) 
      });
    })
    .then((res) => {
      return res.json();
    })
    .then((resultado) => {
      console.log('RESPUESTA FINAL:', resultado);
      const respuesta = resultado.data;
      console.log(respuesta);
      
    })
    .catch((error) => {
      console.log('Error Ocurrido: ', error);
      this.mostrarLoader = false;
      this.mostrarError = true;
      this.error = '¡Vaya! Parece que hubo algún error al crear la promoción. Inténtelo de nuevo.';
      botonCrearPromo.disabled = false;
    });

    // TODO: faltan las reglas de las promos en el campo 'reglas'
  }

}
