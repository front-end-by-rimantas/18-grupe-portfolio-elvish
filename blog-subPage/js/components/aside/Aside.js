import { Search } from './Search.js'
import { Categories } from './Categories.js'

class Aside{
    constructor (params){
        // console.log(params);
        this.asideData = params.asideData;
        // console.log(this.asideData);

        this.blogData = params.blogData;
        // console.log(this.blogData);

        this.getActiveBlogItemsIndexes = params.getActiveBlogItemsIndexes;

        this.selector = this.asideData.selector;
        // console.log(this.selector);

        this.search = this.asideData.search;
        // console.log(this.search);

        this.categoriesSection = this.asideData.categories;
        // console.log(this.categoriesSection);

        // this.recentPosts = this.asideData.categories;

        // this.archives = this.asideData.categories;
        // this.tags = this.asideData.categories;

        this.DOM = null;
        
        this.render();

    }

    generateHTML() {
        const search = new Search(this.search);
        const searchHTML = search.generateHTML();

        const categories = new Categories({
            categoriesSection: this.categoriesSection,
            blogData: this.blogData,
            getActiveBlogItemsIndexes: this.getActiveBlogItemsIndexes})

        const categoriesHTML = categories.generateHTML();

        return searchHTML + categoriesHTML;
    }

    isValidSelector() {
        const DOM = document.querySelector(this.selector);

        if (DOM) {
            this.DOM = DOM;
            return true;
        }

        return false;
    }

    /**
     * Header HTML istatyti i DOM
     */
    render() {
        if (!this.isValidSelector()) {
            return false;
        }
        this.DOM.innerHTML = this.generateHTML();
    }




}

export { Aside };