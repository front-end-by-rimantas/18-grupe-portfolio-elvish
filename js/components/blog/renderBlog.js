import { renderSingleBlog } from './renderSingleBlog.js';

function renderBlog(data) {
    
    let HTML = '';

    for (let i = 0; i < data.blogodata.length; i++) {
        const item = data.blogodata[i];
        HTML += renderSingleBlog(item, data.imagePath);
        const blogDOM = document.querySelector('.blog');
        blogDOM.innerHTML = HTML;
    }

    
}
export { renderBlog };