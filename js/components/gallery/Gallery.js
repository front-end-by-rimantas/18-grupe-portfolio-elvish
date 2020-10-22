class Gallery {
    constructor(params) {
        this.params = params;
        this.DOM = null;
        this.DOMfilter = null;
        this.DOMlist = null;

        this.init();
    }

    init() {
        if (this.isValid()) {
            this.render();
        }
    }

    isValid() {
        const DOM = document.querySelector(this.params.selector);
        if (!DOM) {
            throw 'ERROR: params selec tor is incorrect'
        }
        this.DOM = DOM;

        if (!Array.isArray(this.params.images) || this.params.images.length === 0) {
            throw 'ERROR: data has to be an array and non-empty'
        };

        return true;
    }

    render() {
        const HTML = `
                    <div class="filter row">FILTER</div>
                    <div class="images row">IMAGES</div>`;

        this.DOM.innerHTML = HTML;
        this.DOMfilter = this.DOM.querySelector('.filter');
        this.DOMimages = this.DOM.querySelector('.images');

        this.renderImages();
        this.renderFilter();
    }

    renderImages() {
        let HTML = '';

        for (let i=0; i<this.params.images.length; i++) {
            const project = this.params.images[i];
            HTML +=`
                <div class="item col-4">
                    <img src="${this.params.imagePath + project.image}" alt="${project.imageAlt}">
                    <div class="text">
                        <h3>${project.title}</h3>
                        <h4>${project.content}</h4>
                    </div>
                </div>`;
        }

        this.DOMimages.innerHTML = HTML;
    }

    renderFilter() {
        let gallery = this.params.images;
        let array = [];

        for (let i=0; i<gallery.length; i++) {

            array.push(this.params.images[i].filter);
    
        }

        console.log(array);
        const uniqueTags = [];

        for (let first of array) {
            for (let tag of first) {
                console.log(tag);

                    if (!uniqueTags.includes(tag)) {
                        uniqueTags.push(tag)
                    }
            }
        }
        console.log(uniqueTags);
        let HTML = `<div class="filterItem active">All</div>`;
        
        
        for (let i=0; i<uniqueTags.length; i++) {
            HTML += `<div class="filterItem">${uniqueTags[i]}</div>`;
        }
        
        this.DOMfilter.innerHTML = HTML;
        
    }


}

export { Gallery }

