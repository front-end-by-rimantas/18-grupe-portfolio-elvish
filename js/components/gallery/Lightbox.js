class Lightbox {
    constructor(params) {
        this.selector = params.selector;
        this.DOM = null;
        this.contentDOM = null;

        this.images = [];
        this.init();
    }
 
    init() {
        if (!this.isValidSelector()) {
            return;
        } 
        
        this.render();
    }

    isValidSelector() {
        const DOM = document.querySelector(this.selector);
        if (!DOM) {
            console.error('ERROR: params selector is incorrect');
            return false;
        }
        this.DOM = DOM;
        return true;
    }

    render() {
        const HTML = `<div class="arrow left"><<div>
                    <div class="content"><div>
                    <div class="arrow right">><div>`
        this.DOM.innerHTML = HTML;
        this.contentDOM = this.DOM.querySelector('.content');
    }

    show(images) {
        this.images = images;
        this.contentDOM.innerHTML = images[0].value;
    } 
}

export { Lightbox }