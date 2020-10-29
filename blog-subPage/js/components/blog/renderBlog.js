import {generateBlogItem} from './generateBlogItem.js';
// import { getActiveBlogItemsIndexes } from './getActiveItemsIndexes.js'

function renderBlog(blogData, pageIndex, sortedBlogItemsIndexes) {

    // console.log(sortedBlogItemsIndexes);

    // let activeBlogItemsIndexes = getActiveBlogItemsIndexes(blogData);

    let HTML = '';

    let i = pageIndex - 1;
     let itemTo = pageIndex * blogData.blogItemsInPage < sortedBlogItemsIndexes.length ? pageIndex * blogData.blogItemsInPage : sortedBlogItemsIndexes.length;
   let itemFrom = i * blogData.blogItemsInPage;
    
    for (let i = itemFrom; i < itemTo;  i++) {
        const item = blogData.blogItems[sortedBlogItemsIndexes[i]];
        HTML += generateBlogItem(item, blogData.imagePath, blogData.videoPath );
    }

    const blogDOM = document.querySelector(`${blogData.selector}`);

    blogDOM.innerHTML = HTML;
}

export {renderBlog};