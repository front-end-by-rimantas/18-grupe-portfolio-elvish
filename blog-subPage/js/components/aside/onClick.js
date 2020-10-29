function onClick(params){
    let sortedBlogItemsIndexes = params.sortedBlogItemsIndexes
    let data = params.blogData.blogItems
    // console.log(params);
    // console.log(sortedBlogItemsIndexes);

    let categories = document.querySelectorAll('.categories-item')

    categories.forEach(category => {
        category.addEventListener('click', () => {

            categories.forEach(category => {
                category.classList.remove('active-category')});
                
            category.classList.add('active-category')
            
            let current = document.querySelector('.categories > .active-category');
                    let selectedCategory = current.innerHTML

                    let list = [];

                    for (let i = 0; i < sortedBlogItemsIndexes.length; i++) {     
                        if (data[i].category === selectedCategory) {
                            list.push(i)                
                        }       
                    }
                    console.log(list);
                })})
        
    //         let pageIndex = Number (pageButton.innerHTML);
    //         renderBlog(blogData, pageIndex, activeBlogItemsIndexes);

    //         let allLinks = document.querySelectorAll('a');
    //         allLinks.forEach(element => {
    //             element.classList.remove('active-page')});
    
    //         pageButton.classList.add('active-page');
    // })


}

export { onClick }