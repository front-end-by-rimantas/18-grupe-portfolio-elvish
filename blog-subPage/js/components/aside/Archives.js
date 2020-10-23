class Archives {
    constructor(params) {
        this.archivesSection = params.archivesSection;
        this.blogData = params.blogData;
        this.activeIndexes = params.activeIndexes;

        this.generateHTML()
    }

    generateArchivesListHTML(){
        let archiveList = [];
        for (let i = 0; i < this.activeIndexes.length; i++) {
            const item = `${this.blogData.blogItems[this.activeIndexes[i]].date.month} ${this.blogData.blogItems[this.activeIndexes[i]].date.year}`;
            if (!archiveList.includes(item)) {
                archiveList.push(item)
            }
        }

        let archivesHTML = '';
        for (let i = 0; i < archiveList.length; i++) {
            archivesHTML += `<div class="categories-item"> &raquo; ${archiveList[i]}</div>`
        }
        return archivesHTML;

    }

    generateHTML() {
        return `<div class='aside-container aside-archives'>
                    <h4>${this.archivesSection.title}</h4>
                    <div class="archives">
                         ${this.generateArchivesListHTML()}
                    </div>
                    </div>`;
    }

}

export { Archives }