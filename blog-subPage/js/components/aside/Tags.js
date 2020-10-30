class Tags {
    constructor(params) {
        this.tagsSection = params.tagsSection;
        this.blogData = params.blogData;
        this.categoriesList = params.categoriesList;

        this.generateHTML()
        
    }

    generateTagsListHTML(){
        let tagsHTML = '';
        for (let i = 0; i < this.categoriesList.length; i++) {
            tagsHTML += `<div class="tags-item"> ${this.categoriesList[i]}</div>`
        }
        return  tagsHTML;
    }

    generateHTML() {
        return `<div class='aside-container aside-tags'>
                    <h4>${this.tagsSection.title}</h4>
                    <div class="tags">
                         ${this.generateTagsListHTML()}
                    </div>
                    </div>`;
    }

}

export { Tags }