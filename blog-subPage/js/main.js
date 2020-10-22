import { headerData } from './data/header.js'
import { blogData } from './data/blog.js';
import { asideData } from './data/aside.js'

import { Header } from './components/header/Header.js'
import { renderBlog } from './components/blog/renderBlog.js';
import { renderPagination } from './components/blog/renderPagination.js'
import { prevNext } from './components/blog/prevNextButtons.js'
import { Aside } from './components/aside/Aside.js'

new Header(headerData);

new Aside(asideData, blogData.blogItems);


renderPagination(blogData);
prevNext(blogData)

renderBlog(blogData, 1);
document.querySelector('.pages > a').classList.add('active-page');










