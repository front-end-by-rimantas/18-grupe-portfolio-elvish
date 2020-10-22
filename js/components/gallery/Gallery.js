import { Filters } from './Filters.js';
import { Images } from './Images.js';

class Gallery {
    constructor(params) {
        this.selector = params.selector;
        this.imagePath = params.imagePath;
        this.images = params.images;
        this.filters = this.getFilters(this.images);

        this.DOM = null;
        this.filters.Obj = null;
        this.imagesObj = null;
        // this.filtersObj = new Filters(this.filters, () => this.onFilterChange());
        // this.imagesObj = new Images(this.images);

        this.init();
        // this.render();
        // this.addEvents();
    }

    init() {
        if (!this.isValidSelector()) {
            return;
        }

        this.render();
    }

    render() {
        if (!this.isValidSelector()) {
            return false;
        }
        this.DOM.innerHTML = this.generateHTML();
        this.filtersObj.addEvents()
    }

    isValidSelector() {
        const DOM = document.querySelector(this.selector);

        if (DOM) {
            this.DOM = DOM;
            return true;
        }

        return false;
    }

    isValidGallery() {
        return true;
    }

    getFilters(images) {
        // TODO: extract filters
        return ['all', 'seo'];
    }

    generateHTML() {
        const filtersHTML = this.filtersObj.generateHTML();
        const imagesHTML = this.imagesObj.generateHTML();

        return `
            <div class="filter">
                <ul class="filter-ul row col-12">
                    ${filtersHTML}
                </ul>
            </div>
            <div>${imagesHTML}</div>`;
    }

    

    addEvents() {
        // const adVisibilityHeight = 200;
        // const adDOM = this.DOM.querySelector('.ad');

        // addEventListener('scroll', () => {
        //     if (scrollY > adVisibilityHeight) {
        //         adDOM.classList.add('remove');
        //     } else {
        //         adDOM.classList.remove('remove');
        //     }
        // })
    }
}

export { Gallery }