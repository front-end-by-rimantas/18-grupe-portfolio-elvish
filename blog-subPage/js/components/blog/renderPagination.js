import { getActiveBlogItemsIndexes } from './getActiveItemsIndexes.js'
import { renderBlog } from './renderBlog.js'

function renderPagination(blogData) {
    let blogItemsInPage = blogData.blogItemsInPage;
    let activeBlogItemsIndexes = getActiveBlogItemsIndexes(blogData);
    let numberOfBlogItems = activeBlogItemsIndexes.length;

    let pageCount = Math.ceil(numberOfBlogItems / blogItemsInPage);

    let HTML = '';

    if (pageCount !==1) {
        for (let i = 1; i <= pageCount; i++) {
            HTML+= `<a href="#">${i}</a>\n`        
        }
    }
    
    const pagesDOM = document.querySelector('.pages');

    pagesDOM.innerHTML = HTML;

    let pages = document.querySelectorAll('.pages > a');

    pages.forEach(pageButton => {
        pageButton.addEventListener('click', () => {

            let pageIndex = Number (pageButton.innerHTML);
            renderBlog(blogData, pageIndex, activeBlogItemsIndexes);

            let allLinks = document.querySelectorAll('a');
            allLinks.forEach(element => {
                element.classList.remove('active-page')});
    
            pageButton.classList.add('active-page');
    })
})
}

export {renderPagination};

