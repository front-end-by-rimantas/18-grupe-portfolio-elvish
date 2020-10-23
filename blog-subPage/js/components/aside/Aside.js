import { Search } from './Search.js'
import { Categories } from './Categories.js'
import { getActiveBlogItemsIndexes } from '../blog/getActiveItemsIndexes.js'
import { RecentPosts } from './RecentPosts.js';
import { Tags } from './Tags.js';
import { Archives } from './Archives.js';

class Aside{
    constructor (params){
        this.asideData = params.asideData;
        this.blogData = params.blogData;
        this.getActiveBlogItemsIndexes = getActiveBlogItemsIndexes;
        this.selector = this.asideData.selector;
        this.search = this.asideData.search;
        this.categoriesSection = this.asideData.categories;
        this.recentPosts = this.asideData.recentPosts;
        this.tags = this.asideData.tags;
        this.archives = this.asideData.archives;

        this.DOM = null;
        
        this.render();

    }

    findActiveCategories(){
        let activeIndexes = getActiveBlogItemsIndexes (this.blogData);
        let categoriesList = [];
        
        for (let i = 0; i < activeIndexes.length; i++) {
            const item = this.blogData.blogItems[activeIndexes[i]].category;
            if (!categoriesList.includes(item)) {
                categoriesList.push(item)
            }
        }
        return categoriesList
    }


    generateHTML() {
        const search = new Search(this.search);
        const searchHTML = search.generateHTML();

        const categories = new Categories({
            categoriesSection: this.categoriesSection,
            blogData: this.blogData,
            categoriesList: this.findActiveCategories()})
        const categoriesHTML = categories.generateHTML();

        const recentPosts = new RecentPosts({
            recentPostsSection: this.recentPosts,
            blogData: this.blogData,
            categoriesList: this.findActiveCategories()})
        const recentPostsHTML = recentPosts.generateHTML();

        const archives = new Archives({
            archivesSection: this.archives,
            blogData: this.blogData,
            activeIndexes: getActiveBlogItemsIndexes (this.blogData)})
        const archivesHTML = archives.generateHTML();

        const tags = new Tags({
            tagsSection: this.tags,
            blogData: this.blogData,
            categoriesList: this.findActiveCategories()})
        const tagsHTML = tags.generateHTML();

        return searchHTML + categoriesHTML + recentPostsHTML + archivesHTML + tagsHTML;
    }

    isValidSelector() {
        const DOM = document.querySelector(this.selector);

        if (DOM) {
            this.DOM = DOM;
            return true;
        }

        return false;
    }

    render() {
        if (!this.isValidSelector()) {
            return false;
        }
        this.DOM.innerHTML = this.generateHTML();
    }

}

export { Aside };