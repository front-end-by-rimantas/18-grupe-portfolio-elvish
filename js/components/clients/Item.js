class Item {
    constructor(testimonials, imgPath){
        this.reviews = testimonials;
        // console.log(this.reviews);
        this.imgPath = imgPath;
        // console.log(this.imgPath);

        // this.generateItem()
    }

    generateItem(reviews, imagePath){
        let itemHTML = `<div class='testimonials-item'>`

        if(reviews.avatar && reviews.avatar !==""){
            itemHTML += `<img class='testimonials-avatar' src="" alt="Testimonials avatar">`
        } else {
            itemHTML += `<i class="avatar-icon mbri-user"></i>`
        }

        itemHTML += `<p class='name'>${reviews.name} ${reviews.surname}</p>
        <p class='company'>${reviews.company}</p>
        <p class='testimonial'>${reviews.review}</p>
        </div>`
        // console.log(itemHTML);

        return itemHTML
    }

    generateList(){
        let listHTML = ``
        for (let i = 0; i < this.reviews.length; i++) {
            listHTML += this.generateItem(this.reviews[i], this.imagePath);
        }
        // console.log(listHTML);
        return listHTML;
    }
}

export { Item }

// class CaseStudies {
//     constructor(params) {
//         this.data = params.data;
//         this.imgPath = params.imgPath;
//     }

//     generateHTML() {
//         let HTML = '';

//         const itemWidth = 100 / this.data.length;

//         for (let item of this.data) {
//             HTML += `<div class="case-study" style="width: ${itemWidth}%;">
//                         <div class="spacing">
//                             <div class="title">${item.title}</div>
//                         </div>
//                     </div>`;
//         }

//         return HTML;
//     }
// }

// export { CaseStudies }