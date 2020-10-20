class Menu {
    constructor(data) {
        this.menu = data || '';
    }

    generateHTML() {
        
        return `<a class="go-home" href="#">${this.menu[0].text}</a>
                <div class="dropdown">
                    <i id="burger" class="fa fa-bars"></i>
                    <div class=" dropdown-content">
                    <a href="#">${this.menu[0].text}</a>
                    </div>
                </div>`

        
    }
}

export { Menu }