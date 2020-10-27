function renderSingleBlog(data, imagePath ) {
console.log(imagePath);
    return `<div class ="blogjs col-4">
    <a class="blogvideo" href="${data.video}"><i class="fa fa-play" aria-hidden="true"></i></a>
                <img class="blogimages" src="${imagePath + data.img}" alt="image">
                <h5><a class="hdr" href="#" >${data.header}</a></h5>
                <a class="travel" href="#">${data.lifestyleA}</a>
                <p class="date">${data.paDate}<a class="envato" href="#"> By Envato</a></p>
                <p class="parag">${data.paragraph}</p>
                <a class="more" href="#">${data.aRead}</a>
                
</div>`
}
export { renderSingleBlog };


