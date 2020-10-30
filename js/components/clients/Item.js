class Item {
    constructor(testimonials, imgPath){
        this.reviews = testimonials;
        this.imgPath = imgPath;
    }

    validTestimonials(){
        let validTestimonials = [];

        for (let i = 0; i < this.reviews.length; i++) {
            if (this.reviews[i].active && this.reviews[i].active === true){
                if(this.reviews[i].review && this.reviews[i].review !== ''){
                    validTestimonials.push([i])
                }
            }
        }
    return validTestimonials 

    }

    generateList(){

        let validTestimonials = this.validTestimonials()
        
        const itemWidth = 100 / validTestimonials.length;

        let listHTML = ``

        for (let i = 0; i < validTestimonials.length; i++) {
                listHTML += `<div id="test" class='testimonials-item' style="width: ${itemWidth}%">
                                <div class='test-item-width'>`

                if(this.reviews[validTestimonials[i]].avatar && this.reviews[validTestimonials[i]].avatar !==""){
                    listHTML += `<img class='testimonials-avatar' src="" alt="Testimonials avatar">`
                } else {
                    listHTML += `<i class="avatar-icon mbri-user"></i>`
                }

                if(this.reviews[validTestimonials[i]].name &&  this.reviews[validTestimonials[i]].name !=='' && this.reviews[validTestimonials[i]].surname &&  this.reviews[validTestimonials[i]].surname !==''){
                    listHTML += `<h5 class='name'>${this.reviews[validTestimonials[i]].name} ${this.reviews[validTestimonials[i]].surname}</h5>`
                } else {
                    listHTML += `<h5 class='name'>Anonymous</h5>`
                }

                if(this.reviews[validTestimonials[i]].company &&  this.reviews[validTestimonials[i]].company !==''){
                    listHTML += `<h6 class='company'>${this.reviews[validTestimonials[i]].company}</h6>`
                } else {
                    listHTML += ``
                }

                listHTML += `<p class='testimonial'>"${this.reviews[validTestimonials[i]].review}"</p></div></div>`
            }

        return listHTML
    }

}

export { Item }