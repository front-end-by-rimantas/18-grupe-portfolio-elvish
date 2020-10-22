import { Search } from './Search.js'
// import { Categories } from './Categories.js'

class Aside{
    constructor (asideData, blogItems){
        // console.log(asideData);
        this.selector = asideData.selector;
        this.search = asideData.search;
        this.categories = asideData.categories;
        this.recentPosts = asideData.categories;
        this.archives = asideData.categories;
        this.tags = asideData.categories;
        this.blogItems = blogItems;

        this.DOM = null;
        
        this.render();

    }

    generateHTML() {
        const search = new Search(this.search);
        const searchHTML = search.generateHTML();

        // const categories = new Categories(this.categories, this.blogItems);
        // const categoriesHTML = categories.generateHTML();

        return searchHTML
        //  + categoriesHTML;
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