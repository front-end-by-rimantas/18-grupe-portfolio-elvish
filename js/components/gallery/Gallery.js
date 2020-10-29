class Gallery {
    constructor(params) {
        this.params = params;
        this.images = this.params.images;
        this.DOM = null;
        this.DOMfilter = null;
        this.DOMlist = null;
        this.lightbox = null;

        this.init();
    }

    init() {
        if (!this.isValid()) {
            return;
        }

        this.render();
        this.addEvents();

    }

    isValid() {
        const DOM = document.querySelector(this.params.selector);
        if (!DOM) {
            throw 'ERROR: params selector is incorrect'
        }
        this.DOM = DOM;

        if (!Array.isArray(this.params.images) || this.params.images.length === 0) {
            throw 'ERROR: data has to be an array and non-empty'
        };

        return true;
    }

    render() {
        const HTML = `<div class="row">
                        <div class="filter-menu col-12">${this.renderFilter()}</div>
                    </div>
                    <div class="row images">${this.renderImages()}</div>
                    <div id="lightbox"></div>`;

        this.DOM.innerHTML = HTML;
        this.DOMfilter = this.DOM.querySelector('.filter-menu');
        this.DOMimages = this.DOM.querySelector('.images');

    }

    renderImages() {
        let HTML = '';

        for (let i=0; i<this.params.images.length; i++) {
            const project = this.params.images[i];

            HTML +=`<div class="gallery-item col-4 col-md-12">
                        <img src="${this.params.imagePath + project.image}" alt="${project.imageAlt}">
                        <div class="gallery-image-overlay"></div>
                        <div class="text" id=""gallery-text>
                            <h3>${project.title}</h3>
                            <h4>${project.content}</h4>
                        </div>
                    </div>`;

            this.params.images[i].visible = true;
        }

        return HTML;
    }

    renderFilter() {
        let gallery = this.params.images;
        let array = [];

        for (let i=0; i<gallery.length; i++) {

            array.push(this.params.images[i].filter);
        }

        const uniqueTags = [];

        for (let first of array) {
            for (let tag of first) {
                if (!uniqueTags.includes(tag)) {
                    uniqueTags.push(tag)
                }
            }
        }

        let HTML = `<div class="filter-item active">All</div>`;
        
        for (let i=0; i<uniqueTags.length; i++) {
            HTML += 
                `<span class="filter-menu-star">&#65121</span>
                 <div class="filter-item" value="${uniqueTags[i]}">${uniqueTags[i]}</div>`;
        }
        
        return HTML;
    }

    currentlyVisibleItems() {
        let visibleImages = [];
        
        for(let n=0; n<this.params.images.length; n++) {
            if (this.params.images[n].visible) {
                visibleImages.push(this.params.images[n]);
            }   
        }
            return visibleImages;
    };

    addEvents() {
        const galleryItems = this.DOM.querySelectorAll('.gallery-item')
        const filterItems = this.DOM.querySelectorAll('.filter-item');

        for (let i = 0; i < galleryItems.length; i++) {
            let item = galleryItems[i]
            item.addEventListener('click', () => {
                let visibleItems = this.currentlyVisibleItems()
                let clickedIndex = visibleItems.indexOf(this.params.images[i])
                this.lightbox.show(visibleItems, this.params.imagePath, clickedIndex);
                console.log('ijungta foto', clickedIndex+1);
            }); 
        }


        for (let i=0; i<filterItems.length; i++) {
            
            filterItems[i].addEventListener('click', () => {
                let filterItemsValue = filterItems[i].innerHTML;
               
                filterItems.forEach(filter => {
                filter.classList.remove('active')
                })

                filterItems[i].classList.add('active');


                if (filterItemsValue === 'All') {
                    for(let i=0; i<this.params.images.length; i++) {
                        const photo = galleryItems[i];
                        photo.style.display = 'block';
                        this.params.images[i].visible=true;
                    }
                } 

                else {
                    for (let i=0; i<this.params.images.length; i++) {
                        const photoData = this.params.images[i];
                        const photo = galleryItems[i];
                        if(photoData.filter.includes(filterItemsValue)) {
                            photo.style.display = 'block';
                            this.params.images[i].visible=true;
                        }

                        else {
                            photo.style.display = 'none';
                            this.params.images[i].visible=false;
                        }
                    }
                }
            });
        }
    }

    registerLightbox(callback) {
        this.lightbox = callback;
    }  
}

export { Gallery }

