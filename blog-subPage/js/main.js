import { fixingHeader } from './components/header/stickyHeader.js';
import { burgerDropdpwn } from './components/header/burgerDropdown.js';

import { blogData } from './data/blog.js';
import { renderBlog } from './components/blog/renderBlog.js';
import { renderPagination } from './components/blog/renderPagination.js'
import { prevNext } from './components/blog/prevNextButtons.js'

// import { getActiveBlogItemsIndexes } from './components/blog/getActiveItemsIndexes.js'

fixingHeader();
burgerDropdpwn();

renderPagination(blogData);
prevNext(blogData)

renderBlog(blogData, 1);
document.querySelector('.pages > a').classList.add('active-page');

// myFunction(blogData)










