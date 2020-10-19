import { generateGalleryItem } from './generateGalleryItem.js';

function renderGallery(data, filter) {
    const galleryLength = data.gallery.length;
    const galleryDOM = document.querySelector('#work-gallery');

    galleryDOM.innerHTML = '';

    for (let i = 0; i < galleryLength; i++) {
        const item = data.gallery[i];
        const hasClickedFilter = item.filter.includes(filter)
        if (hasClickedFilter || !filter) {
          const div = generateGalleryItem(item, data.imagePath);
          galleryDOM.appendChild(div);
        }
    }
};

export { renderGallery };