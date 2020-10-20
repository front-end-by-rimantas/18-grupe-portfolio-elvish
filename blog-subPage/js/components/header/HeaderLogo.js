class Logo {

    constructor(data) {
        this.logoText = data || '';
    }

    isValid() {
        if (this.logoText === '') {
            return false;
        }

        if (typeof this.logoText !== 'string') {
            return false;
        }

        return true;
    }

    generateHTML() {
        if (!this.isValid()) {
            return '';
        }
        let logo = this.logoText;

        return `<a class="logo" href="#">${logo}</a>`;
    }
}

export { Logo }