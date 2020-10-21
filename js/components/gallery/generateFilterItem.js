function generateFilterItem(data, galleryFilter) {

    let HTML = `<span class="filter-menu-star">&#65121</span>
                <li class="filter-list-item star" data-filter="${data.filter}">${data.button}</li>`

    if(data === galleryFilter[0]){
         HTML = `<li class="filter-list-item" data-filter="${data.filter}">${data.button}</li>`
    } 
    return HTML;    
}

export { generateFilterItem };

