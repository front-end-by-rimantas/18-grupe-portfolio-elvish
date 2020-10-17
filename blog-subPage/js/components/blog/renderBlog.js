import {generateBlogItem} from './generateBlogItem.js';

function renderBlog(blogData, pageButton) {
    let pageIndex = Number (pageButton.innerHTML)
    // console.log(pageIndex);

    let HTML = '';

    let i = pageIndex - 1;
    let itemFrom = i * blogData.blogItemsInPage;
    let itemTo = pageIndex * blogData.blogItemsInPage < blogData.blogItems.length ? pageIndex * blogData.blogItemsInPage : blogData.blogItems.length;
    
    for (let i = itemFrom; i < itemTo;  i++) {
        const item = blogData.blogItems[i];
        // console.log(item);
        HTML += generateBlogItem(item, blogData.imagePath, blogData.videoPath );
        
        let allLinks = document.querySelectorAll('a');
        allLinks.forEach(element => {
            element.classList.remove('active-page')});

        pageButton.classList.add('active-page');
    }

    const blogDOM = document.querySelector(`${blogData.selector}`);

    blogDOM.innerHTML = HTML;
}

export {renderBlog};