class Footer{
    constructor(){
        this.selector = '.footer'

        this.render()
    }

    generateHTML(){
        let footerHTML = `<div class="copyright">
                            <p>2018 © Elvish. Design by ThemesBoss.</p>
                    </div>
                    <div class="footer-social-icons col-6 col-lg-12">
                            <a id="footer-socials" href="#" target="blink"  class="fa fa-facebook"></a >
                            <a id="footer-socials" href="#" target="blink" class="fa fa-twitter"></a >
                            <a id="footer-socials" href="#" target="blink" class="fa fa-linkedin"></a >
                            <a id="footer-socials"  href="#" target="blink" class="fa fa-instagram"></a >
                    </div>`

        return footerHTML
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

export { Footer }