import { isValidBlogItem } from './isValidBlogItem.js'


function generateBlogItem(item, imagePath, showErrors = false) {

    if (!isValidBlogItem(item, showErrors)) {
        return '';
    }

    if (item.category === '') {
          item.category = 'Other'
    } 

    let HTML = '<div class="row blogItem">'

    HTML += `<img class="col-12" src=${imagePath + item.media} alt="">
    <h4 class='col-12'>${item.title}</h4>
    <div class="blogCategory col-12">${item.category}</div>`

    HTML += `<div class="blogDate col-12">${item.date.day} ${item.date.month} ${item.date.year} <a class='author' href="#">By ${item.author}</a></div>`

    HTML += `<p class="blogText col-12">${item.description}</p>
    <a class="readMore col-12" href="${item.link}">Read more...</a>
    </div>`
    
    
  

    return HTML
};

export { generateBlogItem };
