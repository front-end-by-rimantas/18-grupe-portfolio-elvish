//Data
import { headerData } from './data/header.js'
import { blogData } from './data/blog.js';
import { asideData } from './data/aside.js'


//Logic
import { Header } from './components/header/Header.js'

// import { getActiveBlogItemsIndexes } from './components/blog/getActiveItemsIndexes.js'

import { renderBlog } from './components/blog/renderBlog.js';
import { renderPagination } from './components/blog/renderPagination.js'
import { prevNext } from './components/blog/prevNextButtons.js'
import { Aside } from './components/aside/Aside.js'
import { Footer } from './components/footer/Footer.js'


//Header
new Header(headerData);

//Blog
renderPagination(blogData);
prevNext(blogData)

renderBlog(blogData, 1);
document.querySelector('.pages > a').classList.add('active-page');

//Aside
new Aside ({
    asideData: asideData,
    blogData: blogData
});

//Header
new Footer();












