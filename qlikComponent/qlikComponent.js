import { LightningElement, api, track } from 'lwc';

export default class QlikComponent extends LightningElement {
    @track
    privateTitle = '';

    @track
    privateHeight = 0;

    @track
    privateWidth = 0;

    @track
    privateUrl = '';

    get title() {
        return this.privateTitle;
    }

    @api
    set title(value) {
        this.privateTitle = `${value}`
        this.setAttribute('title', this.privateTitle);
    }

    
    get height() {
        return this.privateHeight;
    }

    @api
    set height(value) {
        this.privateHeight = `${value}%`
        this.setAttribute('height', this.privateHeight);
    }

    
    get width() {
        return this.privateWidth;
    }

    @api
    set width(value) {
        this.privateWidth = `${value}%`
        this.setAttribute('width', this.privateWidth);
    }

    
    get url() {
        return this.privateUrl;
    }

    @api
    set url(value) {
        this.privateUrl = value;
        this.setAttribute('src', this.privateUrl);
    }

}