import { LightningElement } from "lwc";

// Importamos lo necesario para navegar en salesforce
import { NavigationMixin } from "lightning/navigation";

export default class WelcomePromo extends NavigationMixin(LightningElement) {
  // Gestiona el clic en ver las promociones
  handleClicVerPromociones() {
    this[NavigationMixin.Navigate]({
      type: "standard__objectPage",
      attributes: {
        objectApiName: "Promocion__c",
        actionName: "list"
      }
    });
  }

  // Gestiona el clic en enviar sugerencia
  handleClicEnviarSugerencia() {
    this.template.querySelector('c-modal').show();
  }

  // Gestiona el envío de la sugerencia
  handleSubmitEnviarSugerencia() {
      console.log("sugerencia enviada");
  }

  // Gestiona la cancelación del envío de una sugerencia y cierra el modal
  handleClicCancelarSugerencia() {
    this.template.querySelector('c-modal').hide();
  }
}
