class Header {
    constructor(headerData) {
        this.selector = headerData.selector;
        this.logo = headerData.logoText;
        this.menu = headerData.menu;

        this.DOM = null;

        this.render();
        this.addEvents();
    }

    generateLogo(){
        return `<a class="logo" href="#">${this.logo}</a>`;
    }

    generateNav(){
        
        let navHTML = ''

        for (let i=0; i<this.menu.length; i++) {
            navHTML += `<a class="nav-item" href="${this.menu[i].link}">${this.menu[i].text}</a>\n`
        }
        return navHTML;
    }

    generateHTML() {
        return `${this.generateLogo()}
                <i id="burger" class="fa fa-bars"></i>
                <nav>
                  ${this.generateNav()}
                </nav>`
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

    addEvents() {
        // registruojame scroll event listener
        // priklausomai nuo aukscio, kuriame esu: prideda/atima .scroll klase nuo/ant header elemento
        addEventListener('scroll', () => {
            if (scrollY > 70) {
                this.DOM.closest('header').classList.add('scroll');
            } else {
                this.DOM.closest('header').classList.remove('scroll');
            }
        })

        // hamburgerio click'ai
        const hamburger = this.DOM.querySelector('#burger');
        const nav = this.DOM.querySelector('nav');
        hamburger.addEventListener('click', () => {
            nav.classList.toggle('visible');
            this.DOM.closest('header').classList.toggle('visible');
        })

        // Close the dropdown menu if the user clicks outside of it
        window.onclick = function(event) {
            if (!event.target.matches('#burger')) {
                let dropdown = document.querySelector('nav');
                let header = document.querySelector('header');
                if (dropdown.classList.contains('visible') && header.classList.contains('visible')) {
                    dropdown.classList.remove('visible');
                    header.classList.remove('visible')
                }
            }
        }
    }

}

export { Header }