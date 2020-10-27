class Gallery {
    constructor(params) {
        this.params = params;
        this.DOM = null;
        this.DOMfilter = null;
        this.DOMlist = null;

        this.init();
    }

    init() {
        if (this.isValid()) {
            this.render();
        }
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
        const HTML = 
                `<div class="row">
                    <div class="filter-menu col-12"></div>
                </div>
                <div class="row images"></div>`;

        this.DOM.innerHTML = HTML;
        this.DOMfilter = this.DOM.querySelector('.filter-menu');
        this.DOMimages = this.DOM.querySelector('.images');

        this.renderImages();
        this.renderFilter();
        this.renderGallery();
        // this.generateModal();
    }

    renderImages() {
        let HTML = '';

        for (let i=0; i<this.params.images.length; i++) {
            const project = this.params.images[i];

            HTML +=`
                <div class="gallery-item col-4 col-sm-12">
                    <img src="${this.params.imagePath + project.image}" alt="${project.imageAlt}">
                    <div class="gallery-image-overlay"></div>
                    <div class="text">
                        <h3>${project.title}</h3>
                        <h4>${project.content}</h4>
                    </div>
                </div>
                <div id="myModal" class="modal">
                    <span class="closeImage">&times;</span>
                    <img class="modal-content" id="imgModal">
                </div>`;
        }

        this.DOMimages.innerHTML = HTML;
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
        
        this.DOMfilter.innerHTML = HTML;
    }

    renderGallery() {

        const filterDOM = document.querySelectorAll('.filter-item');
        let tempThis = this;
        
        for(let i=0; i<filterDOM.length; i++) {
            let newImages = [];
            let newImagesDuplicateList = [];

            filterDOM[i].addEventListener('click', function(e) {

                filterDOM.forEach(filter => {
                filter.classList.remove('active')
                })
                
                filterDOM[i].classList.add('active');

                if(filterDOM[i].getAttribute('value') === null) {
                    tempThis.renderImages();
                    return;
                }

                    for(let n=0; n<tempThis.params.images.length; n++) {
                        newImagesDuplicateList.push(tempThis.params.images[n]);
                        if (tempThis.params.images[n].filter.includes(filterDOM[i].getAttribute('value'))) {
                            newImages.push(tempThis.params.images[n]);
                        }
            }

                tempThis.params.images=newImages;
                tempThis.renderImages();
                tempThis.params.images=newImagesDuplicateList;
                newImagesDuplicateList=[];
                newImages = [];
                });
        }
    }

    // generateModal() {
    //     let modal = document.querySelectorAll('#myModal');
    //     let img = document.querySelectorAll('.gallery-item');
    //     let modalImg = document.querySelectorAll('#imgModal');
    //     let tempThis = this;
        
    //     for (let i = 0; i < img.length; i++) {
    //         img[i].onclick = function() {
    //             modal[i].style.display ='block';
    //             modalImg[i].src = tempThis.params.imagePath + tempThis.params.images[i].image;
    //             console.log(modalImg[i].src);
    //         }
    
    //         let closeBtn = document.querySelectorAll('.closeImage');
    //         closeBtn[i].onclick = function() {
    //         modal[i].style.display ='none';
    //         }
    //     }
    // };
}

export { Gallery }

