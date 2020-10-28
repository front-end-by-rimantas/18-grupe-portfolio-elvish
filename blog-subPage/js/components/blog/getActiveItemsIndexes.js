function getActiveBlogItemsIndexes(blogData) {

    let activeBlogItemsIndexes = [];

    let totalBlogItems = blogData.blogItems.length;

    for (let i = 0; i < totalBlogItems; i++) {
        if (blogData.blogItems[i].active) {
            activeBlogItemsIndexes.push(i)
        } 
    }
    // console.log(activeBlogItemsIndexes);

    // isrūšiuoja pagal datą

    // let months = [
    //     'January', 'February', 'March', 'April', 'May',
    //     'June', 'July', 'August', 'September',
    //     'October', 'November', 'December'
    //     ];

    // let sortedBlogItemsIndexes = [];

    // sortedBlogItemsIndexes.push(activeBlogItemsIndexes[0])
  
    // console.log(months.indexOf(blogData.blogItems[activeBlogItemsIndexes[1]].date.month));

    // for (let i = 0; i < activeBlogItemsIndexes.length-1; i++) {
    //     let year1 = blogData.blogItems[sortedBlogItemsIndexes[i]].date.year;
    //     let year2 = blogData.blogItems[activeBlogItemsIndexes[i+1]].date.year;
    //     if (year2 > year1) {
    //          sortedBlogItemsIndexes.unshift(activeBlogItemsIndexes[i+1]);
    //          console.log(sortedBlogItemsIndexes);
    //     } else {
    //         if (year2 = year1){
    //             let month1 = months.indexOf(blogData.blogItems[sortedBlogItemsIndexes[i]].date.month);
    //             let month2 = months.indexOf(blogData.blogItems[activeBlogItemsIndexes[i+1]].date.month);
    //             if (month2 > month1) {
    //                 sortedBlogItemsIndexes.unshift(activeBlogItemsIndexes[i+1]);
    //         } else {
    //             if (month2 = month1) {
    //                 let day1 = blogData.blogItems[sortedBlogItemsIndexes[i]].date.day;
    //                 let day2 = blogData.blogItems[activeBlogItemsIndexes[i+1]].date.day;
    //                 if (day2 >= day1) {
    //                     sortedBlogItemsIndexes.unshift(activeBlogItemsIndexes[i+1]);
    //                 } else {
    //                     sortedBlogItemsIndexes.push(activeBlogItemsIndexes[i+1]);
    //                 }
    //             }
    //         }  
    //         }  
    //     }
    // }

    // console.log(sortedBlogItemsIndexes);

 return activeBlogItemsIndexes;

  
    
}


export { getActiveBlogItemsIndexes }