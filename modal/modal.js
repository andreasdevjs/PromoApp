import { LightningElement, api, track } from "lwc";

const CSS_CLASS = "modal-hidden";

export default class Modal extends LightningElement {
    
    @track 
    showModal = false;

    @track 
    hasHeaderString = false;

    _headerPrivate;

    @api
    set header(value) {
        this.hasHeaderString = value !== "";
        this._headerPrivate = value;
    }

    get header() {
        return this._headerPrivate;
    }


    // Métodos públicos para llamar desde el padre
    @api 
    show() {
        this.showModal = true;
    }

    @api 
    hide() {
        this.showModal = false;
    }


    handleDialogClose() {
        //Let parent know that dialog is closed (mainly by that cross button) so it can set proper variables if needed
        const closedialog = new CustomEvent("closedialog");
        this.dispatchEvent(closedialog);
        this.hide();
    }

    /*
    handleSlotTaglineChange() {
        const taglineEl = this.template.querySelector("p");
        taglineEl.classList.remove(CSS_CLASS);
    }
    */

    /*
    handleSlotFooterChange() {
        const footerEl = this.template.querySelector("footer");
        footerEl.classList.remove(CSS_CLASS);
    }
    */
    
}
