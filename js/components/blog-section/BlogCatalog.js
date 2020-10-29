class BlogCatalog {

    constructor (params){
        this.image=params.image;
        this.header=params.header;
        this.category=params.category;
        this.date=params.date;
        this.description=params.description;
        this.type=params.type;
        this.state=params.state;
        this.slidesNum=3;
        this.selectior=document.querySelector(".blog-catalog")
    }
            render () {
               let domHTML = this.image+this.header+this.category+this.date+this.description
               const b= document.querySelector(".blog-card");
               b.innerHTML=domHTML;
            }

}
export {BlogCatalog};
/* <div class="blog-card">
<img src="./blog-subPage/img/blogItem-image1.PNG" alt="">
<a href="./blog-subPage/index.html"> <h3>Contrary to popular belief</h3> </a>
<span>Lifestyle</span>
<span>13 February 2018 <strong>By Envato</strong></span>
<p>Sit sagittis vulputate laoreet sodales tortor nulla lobortis bibendum netus primis fames. Lobortis ultricies.</p>
<a href="./blog-subPage/index.html"> <span>Read more...</span></a>
</div> */