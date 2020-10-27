import {generateBlogItem} from './generateBlogItem.js';
import { getActiveBlogItemsIndexes } from './getActiveItemsIndexes.js'

function renderBlog(blogData, pageIndex) {

    let activeBlogItemsIndexes = getActiveBlogItemsIndexes(blogData);

    let HTML = '';

    let i = pageIndex - 1;
    let itemFrom = i * blogData.blogItemsInPage;
    let itemTo = pageIndex * blogData.blogItemsInPage < activeBlogItemsIndexes.length ? pageIndex * blogData.blogItemsInPage : activeBlogItemsIndexes.length;
    
    for (let i = itemFrom; i < itemTo;  i++) {
        const item = blogData.blogItems[activeBlogItemsIndexes[i]];
        HTML += generateBlogItem(item, blogData.imagePath, blogData.videoPath );
    }

    const blogDOM = document.querySelector(`${blogData.selector}`);

    blogDOM.innerHTML = HTML;
}

export {renderBlog};