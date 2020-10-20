import { Logo } from './HeaderLogo.js';
import { Menu } from './HeaderMenu.js';

class Header {
    constructor(headerData) {
        this.selector = headerData.selector;
        this.logo = headerData.logoText;
        this.menu = headerData.menu;

        this.DOM = null;

        this.render();
    }

    generateHTML() {
        const logo = new Logo(this.logo);
        const logoHTML = logo.generateHTML();

        const menu = new Menu(this.menu);
        const menuHTML = menu.generateHTML();


        return logoHTML + menuHTML;
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

export { Header }