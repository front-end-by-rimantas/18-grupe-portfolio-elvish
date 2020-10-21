function generateGalleryItem(data, imagePath) {

    
    const HTML = document.createElement('div');
    HTML.className = 'gallery-image col-4 col-md-12';
    HTML.id = 'gallery-image';
    HTML.innerHTML = `<div id="myModal" class="modal">
                        <span class="closeImage">&times;</span>
                        <img class="modal-content" id="imgModal">
                      </div>
                      <div class="overlay">
                        <div class="gallery-image-titles">
                            <h3>${data.title}</h3>
                            <h4>${data.content}</h4>
                        <div>
                      </div>`

                HTML.style.backgroundImage = "url('" + imagePath + data.image  + "')";
                // HTML.querySelector('.overlay').style.backgroundImage = // jeigu background deciau gilesniam lygyje

    return HTML;
                
}

export { generateGalleryItem };


// REIKIA IRASYTI IR IMG ALT ?
 // <img src="${imagePath + data.image}" alt="${imageAlt}"> 