class Categories {
    constructor(params) {
        this.categoriesSection = params.categoriesSection;
        this.blogData = params.blogData;

        this.getActiveBlogItemsIndexes = params.getActiveBlogItemsIndexes;

        // this.findActiveCategories()
        // this.generateCategoriesListHTML()

        this.generateHTML()
        // console.log(this.generateHTML());
        
    }

    findActiveCategories(){

        let activeIndexes = this.getActiveBlogItemsIndexes (this.blogData);
        let categoriesList = [];
        for (let i = 0; i < activeIndexes.length; i++) {
            const item = this.blogData.blogItems[activeIndexes[i]].category;
            if (!categoriesList.includes(item)) {
                categoriesList.push(item)
            }
        }
        return categoriesList
    }

    generateCategoriesListHTML(){
        let categoriesList = this.findActiveCategories()
        let categoriesHTML = '';
        for (let i = 0; i < categoriesList.length; i++) {
            categoriesHTML += `<div class="category-item" href="#"> &raquo; ${categoriesList[i]}</div>`
        }
        // console.log(categoriesHTML);
        return categoriesHTML;
    }


    generateHTML() {
        return `<div class='aside-container aside-categories'>
                    <h4>${this.categoriesSection.title}</h4>
                    <div class="categories">
                         ${this.generateCategoriesListHTML()}
                    </div>
                    </div>`;

                
    }

}

export { Categories }