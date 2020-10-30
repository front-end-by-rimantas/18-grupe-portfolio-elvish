class Carousel {
    constructor(params) {
        this.data = params.data;
        this.renderEngine = params.renderEngine;
        this.breakpoints = params.breakpoints;
        this.itemsPerView = params.itemsPerView;

        this.DOM = null;
        this.listDOM = null;
        this.actionsDOM = null;
        this.activeItem = 0;

        this.contentHTML = new this.renderEngine(this.data.testimonials, this.data.imagePath).generateList();
        this.validTestimonials = new this.renderEngine(this.data.testimonials, this.data.imagePath).validTestimonials()

        this.init();
    }

    init() {
        if (!this.isValidSelector()) {
            return;
        }

        this.render();
        this.addEvents();
        this.updateListWidth();
    }

    isValidSelector() {
        const DOM = document.querySelector(this.data.selector);
        if (DOM) {
            this.DOM = DOM;
            return true;
        }
        return false;
    }

    renderDots() {
        const total = this.validTestimonials.length;
        let dotsCount = total - this.itemsPerView;
        dotsCount = dotsCount > 0 ? dotsCount : 0;

        let dotsHTML = '';
        for (let i = 0; i <= dotsCount; i++) {
            const active = this.activeItem === i ? 'active' : '';
            dotsHTML += `<div class="dot ${active}" data-index="${i}"></div>`;
        }

        return dotsHTML;
    }

    render() {
        this.DOM.innerHTML = `<div class="carousel">
                                <div class="content">
                                    <div class="list" style="width: 100%;">
                                        ${this.contentHTML}
                                    </div>
                                </div>
                                <div class="actions">${this.renderDots()}</div>
                            </div>`;

        this.listDOM = this.DOM.querySelector('.content > .list');
        this.actionsDOM = this.DOM.querySelector('.actions');
    }

    updateListWidth() {
        // keiciantis ekrano plociui, reikia pakeisti rodomu elementu plocius
        // infinity..1000 : 3
        // 999..600 : 2
        // 599..0 : 1
        // let itemsPerView = 1;
        // for (let width of this.breakpoints) {
        //     if (width < innerWidth) {
        //         itemsPerView++;
        //     }
        // }

        // this.itemPerView = itemsPerView;

        const total = this.validTestimonials.length;
        const listWidth = 100 * total / this.itemsPerView;

        this.listDOM.style.width = listWidth + '%';
        this.actionsDOM.innerHTML = this.renderDots();
        this.dotClick();
    }

    dotClick() {
        const dots = this.actionsDOM.querySelectorAll('.dot');
        for (let dot of dots) {
            dot.addEventListener('click', () => {
                dots[this.activeItem].classList.remove('active');
                const index = parseInt(dot.dataset.index);
                this.activeItem = index;
                dots[this.activeItem].classList.add('active');
                const diff = -100 / this.validTestimonials.length * this.activeItem;
                this.listDOM.style.transform = `translateX(${diff}%)`;
            })
        }
    }

    addEvents() {
        // paspaudus taskiukus turi judeti/slinktis turinys
        this.dotClick();
        this.slider()

        window.addEventListener('resize', () => {
            this.updateListWidth();
        });
    }

    slider() {
    
        let element = document.querySelector('.carousel'); 

        window.addEventListener('scroll', function() {   
            let position = element.getBoundingClientRect();
    
            // checking whether fully visible
            if(position.top >= 70 && position.bottom <= window.innerHeight) {
                // console.log('matomas');
            }
        })

        element.addEventListener('mouseleave', function(){
    
            //iskviese dotclick sekanciam elementui negu dabar yra, o jei pasirinktas paskutinis tai iskviesti pirma
            //const timer = setInterval() iskviesti dot
            //atskiras metodas, kuris iskvieciamas pradzioje
            
        // console.log('out');
        })
    }
    // slideshow(){

    // };
        
}

export { Carousel }