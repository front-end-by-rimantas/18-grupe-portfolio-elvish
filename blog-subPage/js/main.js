import { fixingHeader } from './components/header/stickyHeader.js';

import { blogData } from './data/blog.js';
import { renderBlog } from './components/blog/renderBlog.js';

fixingHeader();

// console.log(blogData);
renderBlog(blogData);
