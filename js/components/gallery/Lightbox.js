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
        const HTML = `<span class="closeImage">&times;</span>
                    <div class="modalItem">
                        <div class="arrow left">&#10094;</div>
                        <div class="content" id="lightboxSlide"></div>
                        <div class="arrow right">&#10095</div>
                        <p id="caption">
                            <span class="current">2</span>
                            <span>of</span>
                            <span class="total">5</span>
                        </p>
                    </div>`

        this.DOM.innerHTML = HTML;
        this.contentDOM = this.DOM.querySelector('.content');
        this.counterCurrentDOM = this.DOM.querySelector('.current');
        this.counterTotalDOM = this.DOM.querySelector('.total');
    }

    renderImage() {
        // const item = this.images[this.index];
        // const src = this.imagePath + item.image;
        // const imgHTML = `<img src="${src}" alt="${item.imageAlt}">`;
        // this.contentDOM.insertAdjacentHTML('beforeend', imgHTML);

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
        this.DOM.style.display = 'block';

        this.counterCurrentDOM.innerText = this.index + 1;
        this.counterTotalDOM.innerText = this.images.length;
    }

    addEvents() {
        const leftArrow = this.DOM.querySelector('.arrow.left')
        const rightArrow = this.DOM.querySelector('.arrow.right');
        let closeBtn = this.DOM.querySelector('.closeImage');


        leftArrow.addEventListener('click', () => {
            this.index--
            if (this.index < 0) {
                this.index = this.images.length - 1;
            }
            this.counterCurrentDOM.innerText = this.index + 1;

            this.renderImage();
        });

        rightArrow.addEventListener('click', () => {
            this.index++
            if (this.index > this.images.length - 1) {
                this.index = 0;
            }
            this.counterCurrentDOM.innerText = this.index + 1;

            this.renderImage();
        });

        closeBtn.addEventListener('click', () => {
            this.DOM.style.display = 'none';
        })

        document.addEventListener('keydown', ({ key }) => {
            if (key === "Escape") {
                this.DOM.style.display = 'none';
            }
        })
    }
}

export { Lightbox }