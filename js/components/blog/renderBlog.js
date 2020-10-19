import { renderSingleBlog } from './renderSingleBlog.js';

function renderBlog(data) {
    
    let HTML = '';

    for (let i = 0; i < data.blogodata.length; i++) {
        // console.log(blogData);
        // console.log(blogData.length);
        // console.log(data.blogData.length);
        const item = data.blogodata[i];
        HTML += renderSingleBlog(item, data.imagePath);
        const blogDOM = document.querySelector('.blog');
        blogDOM.innerHTML = HTML;
        console.log(data.imagePath);
    }

    
}
export { renderBlog };