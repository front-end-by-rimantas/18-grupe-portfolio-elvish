function generateGalleryItem(data, imagePath) {

    
    const HTML = document.createElement('div');
    HTML.className = 'gallery-image col-4 col-md-6 col-sm-12';
    HTML.innerHTML = ` 
                    <div class="overlay">
                        <div class="gallery-image-titles">
                            <div id="h3"><h3>${data.title}</h3></div>
                            <div id="h4"><h4>${data.content}</h4></div>
                        <div>
                    </div>`

                HTML.style.backgroundImage = "url('" + imagePath + data.image  + "')";
                // HTML.querySelector('.overlay').style.backgroundImage = // jeigu background deciau gilesniam lygyje

    return HTML;
                
}

export { generateGalleryItem };


// REIKIA IRASYTI IR IMG ALT ?
 // <img src="${imagePath + data.image}" alt="${imageAlt}"> 