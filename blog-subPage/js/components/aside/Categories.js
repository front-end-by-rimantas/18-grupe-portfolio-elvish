class Categories {
    constructor(categories, blogItems) {
        this.title = categories.title
        this.blogItems = blogItems
        // console.log(this.blogItems);

        this.generateHTML()
    }

    // suranda kokių kategorijų blogo įrašų yra
    findAllCategories (){
        let categoryList = [];
        console.log(this.blogItems);
        console.log(this.blogItems[0].category );
        console.log(this.blogItems[0].active);

        for (let i=0; i<this.blogItems.length; i++) {

            if (this.blogItems[i].category && this.blogItems[i].active === 'true'){
                if (!categoryList.includes(this.blogItems[i].category)){
                    categoryList.push(this.blogItems[i].category)
                }
        }
    }
        // console.log(categoryList);
        return categoryList
    }

    // Generuoja kategorijų HTML'ą
    generateCategories(){
        let allCategories = this.findAllCategories();

        let categoriesHTML = ''
        if (allCategories.length!==0) {
             for (let category of allCategories){
            categoriesHTML += `<div class='category-item'>
                        <a class='arrows' href="#">&raquo;</a>
                        <span>${category}</span>
                    </div>`
            } 
        }
      

        return categoriesHTML
        
    }

    /**
     * Generuoja categories elemento HTML.
     */
    generateHTML() {
        let categoriesList = this.generateCategories()

        if(categoriesList == ''){
            return ''
        } else{
           return `<div class='aside-container aside-categories'>
                    <h4>${this.title}</h4>
                    <div class="categories">
                          ${categoriesList}
                    </div>
                 </div>`; 
        }

        
    }
}

export { Categories }