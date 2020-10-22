function generateBlogItem(item, imagePath, videoPath) {
    return `<div class="row blogItem">
    <img class="col-12" src=${imagePath + item.image} alt="">
    <h4 class='col-12'>${item.title}</h4>
    <div class="blogCategory col-12">${item.category}</div>
    <div class="blogDate col-12">${item.date} <a class='author' href="#">By ${item.author}</a></div>
    <p class="blogText col-12">${item.description}</p>
    <a class="readMore col-12" href="${item.link}">Read more...</a>
    </div>`
};

export { generateBlogItem };
