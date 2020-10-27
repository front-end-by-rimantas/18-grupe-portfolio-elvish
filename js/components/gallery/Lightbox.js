class Lightbox {
    constructor(params) {
        this.selector = params.selector;
        this.DOM = null;
        this.contentDOM = null;

        this.imagePath = null
        this.images = [];
        this.index = 0;
        this.init();
    }
 
    init() {
        if (!this.isValidSelector()) {
            return;
        } 
        
        this.render();
        this.addEvents();
    }

    isValidSelector() {
        const DOM = document.querySelector(this.selector);
        if (!DOM) {
            console.error('ERROR: params selector is incorrect');
            return false;
        }
        this.DOM = DOM;
        return true;
    }

    render() {
        const HTML = `<span class="closeImage">x</span>
                    <div class="arrow left"><</div>
                    <div class="content" id="lightboxSlide"></div>
                    <div class="arrow right">></div>`
        this.DOM.innerHTML = HTML;
        this.contentDOM = this.DOM.querySelector('.content');
    }

    renderImage() {
        const img = document.createElement('img')
        const item = this.images[this.index]
        img.src = this.imagePath + item.image
        img.alt = item.imageAlt
        this.contentDOM.innerHTML = ''
        this.contentDOM.appendChild(img)
    }

    show(images, imagePath, index = 0) {
        this.imagePath = imagePath;
        this.images = images;
        this.index = index;
        this.renderImage();
        this.DOM.style.display ='block';
    } 

    addEvents() {
        const leftArrow = this.DOM.querySelector('.arrow.left')
        const rightArrow = this.DOM.querySelector('.arrow.right');

            leftArrow.addEventListener('click', () => {
                // kai pasiekia 0, eiti i 5
                this.index--
                if (this.index < 0) {
                    this.index = this.images.length-1;
                }

                this.renderImage();
                console.log('leftArrow', this.index);
            }); 

            rightArrow.addEventListener('click', () => {
                // kai pasiekia 5, eiti i 0
                this.index++
                if (this.index > this.images.length-1) {
                    this.index = 0;
                }

                this.renderImage();
                console.log('rightArrow', this.index);
            });

    }
}

export { Lightbox }