import { renderBlog } from './renderBlog.js'

function renderPagination(blogData) {
    let blogItemsInPage = blogData.blogItemsInPage;
    let numberOfBlogItems = blogData.blogItems.length;

    // console.log(blogItemsInPage);
    // console.log(numberOfBlogItems);

    let pageCount = Math.ceil(numberOfBlogItems / blogItemsInPage);
    // console.log(pageCount);

    let HTML = '';

    for (let i = 1; i <= pageCount; i++) {
        HTML+= `<a href="#">${i}</a>\n`        
    }

    // console.log(HTML);

    const pagesDOM = document.querySelector('.pages');
    // console.log(pagesDOM);

    pagesDOM.innerHTML = HTML;

    let pages = document.querySelectorAll('.pages > a');
    // console.log(pages);

    pages.forEach(pageButton => {
        pageButton.addEventListener('click', () => {
            // pageButton.classList.add('active-page');
            // let pageIndex = Number (pageButton.innerHTML)
            // console.log(typeof activePage);
            renderBlog(blogData, pageButton)

    })
})
}

export {renderPagination};

// burger.addEventListener('click', () => {
//     dropdownContentDOM.classList.add('active');

// items.forEach(counter => {
//     const updateCount = () => {
//         const target = +counter.getAttribute('data-target');
//         const count = +counter.innerText;

//         const inc = Math.round(target / speed);

//         if (count < target ){
//             counter.innerText = count+inc;
//             setTimeout(updateCount, 50)
//         } else {
//             count.innerText = target
//         }
// }