function renderSingleBlog(data, imagePath ) {
console.log(imagePath);
    return `<div class ="blogjs">
                <img src="${imagePath + data.img}" alt="image">
                <h5><a href="#" >${data.header}</a></h5>
                <a href="#">${data.lifestyleA}</a>
                <p>${data.paDate}<a href="#"> By Envato</a></p>
                <p>${data.paragraph}</p>
                <a href="#">${data.aRead}</a>
                
</div>`
}
export { renderSingleBlog };