import { renderBlog } from '../blog/renderBlog.js'

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
            // console.log(current);
                    let selectedCategory = (current.innerHTML).slice(3);

                    let list = [];

                    for (let i = 0; i < sortedBlogItemsIndexes.length; i++) {  
                        // console.log(data[sortedBlogItemsIndexes[i]].category);   
                        if (data[sortedBlogItemsIndexes[i]].category === selectedCategory) {
                            list.push(i)                
                        }       
                    }

                    renderBlog(params.blogData, 1, list);
                })})

        


}

export { onClick }