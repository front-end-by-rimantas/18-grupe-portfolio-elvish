import { fixingHeader } from './components/header/stickyHeader.js';
import { burgerDropdpwn } from './components/header/burgerDropdown.js';
import { headerData } from './data/header.js'
import { Header } from './components/header/Header.js'

import { blogData } from './data/blog.js';
import { renderBlog } from './components/blog/renderBlog.js';
import { renderPagination } from './components/blog/renderPagination.js'
import { prevNext } from './components/blog/prevNextButtons.js'

// import { getActiveBlogItemsIndexes } from './components/blog/getActiveItemsIndexes.js'

new Header(headerData);
fixingHeader();
burgerDropdpwn();

renderPagination(blogData);
prevNext(blogData)

renderBlog(blogData, 1);
document.querySelector('.pages > a').classList.add('active-page');

// myFunction(blogData)










