class Categories {
    constructor(categories, blogItems) {
        this.title = categories.title
        this.blogItems = blogItems

        this.generateHTML()
    }

    // suranda kokių kategorijų blogo įrašų yra
    findAllCategories (){
        let categoryList = [];
        for (let item of this.blogItems) {
            if (!categoryList.includes(item.category)){
                categoryList.push(item.category)
            }
        }
        return categoryList
    }

    // Generuoja kategorijų HTML'ą
    generateCategories(){
        let allCategories = this.findAllCategories();

        let categoriesHTML = ''

        for (let category of allCategories){
            categoriesHTML += `<div class='category-item'>
                        <a class='arrows' href="#">&raquo;</a>
                        <span>${category}</span>
                    </div>`
        }

        return categoriesHTML
        
    }

    /**
     * Generuoja categories elemento HTML.
     */
    generateHTML() {
        let categoriesList = this.generateCategories()

        return `<div class='aside-container aside-categories'>
                    <h4>${this.title}</h4>
                    <div class="categories">
                          ${categoriesList}
                    </div>
                 </div>`;
    }
}

export { Categories }