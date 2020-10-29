function sortedBlogItemsIndexes(blogData) {

    let data = blogData.blogItems

    let activeBlogItemsIndexes = [];

    let totalBlogItems = blogData.blogItems.length;

    for (let i = 0; i < totalBlogItems; i++) {
        if (blogData.blogItems[i].active) {
            activeBlogItemsIndexes.push(i)
        } 
    }

    let activeBlogItemsDates = []

    for (let i = 0; i < activeBlogItemsIndexes.length; i++) {
        let date = `${data[activeBlogItemsIndexes[i]].date.month} ` + `${data[activeBlogItemsIndexes[i]].date.day}, ` +  `${data[activeBlogItemsIndexes[i]].date.year}`;
        
        activeBlogItemsDates.push(Date.parse(date))
    }

    const dsu = (arr1, arr2) => arr1
    .map((item, index) => [arr2[index], item]) // add the args to sort by
    .sort(([arg1], [arg2]) => arg2 - arg1) // sort by the args
    .map(([, item]) => item); // extract the sorted items

    const sortedBlogItemsIndexes = dsu(activeBlogItemsIndexes, activeBlogItemsDates)
  
 return sortedBlogItemsIndexes;
}


export { sortedBlogItemsIndexes }