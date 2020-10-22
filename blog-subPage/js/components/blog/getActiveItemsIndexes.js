function getActiveBlogItemsIndexes(blogData) {

    let activeBlogItemsIndexes = [];

    let totalBlogItems = blogData.blogItems.length;

    for (let i = 0; i < totalBlogItems; i++) {
        if (blogData.blogItems[i].active) {
            activeBlogItemsIndexes.push(i)
        } 
    }
    
    return activeBlogItemsIndexes;
    
}

export { getActiveBlogItemsIndexes }