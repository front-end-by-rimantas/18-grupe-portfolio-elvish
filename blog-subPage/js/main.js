import { fixingHeader } from './components/header/stickyHeader.js';
import { burgerDropdpwn } from './components/header/burgerDropdown.js';

import { blogData } from './data/blog.js';
import { renderBlog } from './components/blog/renderBlog.js';

fixingHeader();
burgerDropdpwn();

// console.log(blogData);
renderBlog(blogData);




