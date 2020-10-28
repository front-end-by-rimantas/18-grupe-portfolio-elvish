class Categories {
    constructor(params) {
        this.categoriesSection = params.categoriesSection;
        this.blogData = params.blogData;
        this.categoriesList = params.categoriesList;

        this.generateHTML()
        
    }

    generateCategoriesListHTML(){
        let categoriesHTML = '';
        for (let i = 0; i < this.categoriesList.length; i++) {
            categoriesHTML += `<div class="categories-item"> &raquo; ${this.categoriesList[i]}</div>`
        }
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

    categoryClick(){
       let categories = document.querySelectorAll('.categories-item');

    categories.forEach(category => {
        category.addEventListener('click', () => {

    }) })}

    

}

export { Categories }