import { generateGalleryItem } from './generateGalleryItem.js';

function renderGallery(data) {

    
    const galleryLength = data.gallery.length;


    for (let i =0; i < galleryLength; i++) {
        const item = data.gallery[i];

        const galleryDOM = document.querySelector('#work-gallery');

        const div = generateGalleryItem(item, data.imagePath);
        galleryDOM.appendChild(div);

    }


};

export { renderGallery };