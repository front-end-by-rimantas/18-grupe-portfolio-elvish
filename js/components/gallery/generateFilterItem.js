function generateFilterItem(data, galleryFilter) {

    let HTML = `<li class="filter-list-item star" data-filter="${data.filter}">${data.button}</li>`

    if(data === galleryFilter[0]){
         HTML = `<li class="filter-list-item active" data-filter="${data.filter}">${data.button}</li>`
    } 
    return HTML;    
}

export { generateFilterItem };