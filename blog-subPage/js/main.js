import { fixingHeader } from './components/header/stickyHeader.js';
import { burgerDropdpwn } from './components/header/burgerDropdown.js';

import { blogData } from './data/blog.js';
import { renderBlog } from './components/blog/renderBlog.js';
import { renderPagination } from './components/blog/renderPagination.js'

fixingHeader();
burgerDropdpwn();

renderPagination(blogData);

// console.log(blogData);
let a = document.querySelector('.pages > a')
renderBlog(blogData, a);






