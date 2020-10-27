class Search {
    constructor(params) {
        this.title = params.title;
        this.icon = params.icon;
        this.placeholder = params.placeholder;
    }

    /**
     * Generuoja logo elemento HTML.
     */
    generateHTML() {
        return `<div class='aside-container aside-search'>
        <h4>${this.title}</h4>
        <div class="form">
            <input id="search" type="search" placeholder='${this.placeholder}'>
            <i class="${this.icon}"></i>
        </div>
    </div>`;

                
    }
}

export { Search }