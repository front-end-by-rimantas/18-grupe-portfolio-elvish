import {generateBlogItem} from './generateBlogItem.js';

function renderBlog(blogData) {
    // console.log(blogData);

    let HTML = '';
    let count = blogData.blogItems.length;
    // console.log(count);
    for (let i = 0; i < count;  i++) {
        const item = blogData.blogItems[i];
        // console.log(item);
        HTML += generateBlogItem(item, blogData.imagePath, blogData.videoPath );
    }

    // console.log(HTML);

    //susirandame elementa, kuriame norime perrasyti turini
    const blogDOM = document.querySelector(`${blogData.selector}`);
    // console.log(blogDOM);

    //i ta elementa ikeliame HTML kintamojo reiksme
    blogDOM.innerHTML = HTML;
    // renderStatisticsItem(statisticsData);
}

export {renderBlog};