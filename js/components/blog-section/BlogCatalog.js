class BlogCatalog {

    constructor (params){
        this.image1=params.blogItems[0].media.img;
        this.image2=params.blogItems[1].media.img;
        this.image3=params.blogItems[2].media.img;
        this.header1=params.blogItems[0].title;
        this.header2=params.blogItems[1].title;
        this.header3=params.blogItems[2].title;
        this.category1=params.blogItems[0].category;
        this.category2=params.blogItems[1].category;
        this.category3=params.blogItems[2].category;
        this.date1=params.blogItems[0].date.month;
        this.date2=params.blogItems[0].date.month;
        this.date3=params.blogItems[0].date.month;
        this.description1=params.blogItems[0].description
        this.description2=params.blogItems[1].description
        this.description3=params.blogItems[2].description
        this.type=params.type;
        this.state=params.state;
        this.slidesNum=3;
        this.selectior=document.querySelector(".blog-catalog")
    }
            render () {
               let domHTML =
                                `
                                <div class="blog-card">
                                <img src="../../../blog-subPage/img/${this.image1}" alt="blog-image1">
                                <a href=""../../../blog-subPage/index.html""> <h3>${this.header1}</h3> </a>
                                <span>${this.category1}</span>
                                <span>13${this.date1} <strong>By Envato</strong></span>
                                <p>${this.description1} </p>
                                <a href="./blog-subPage/index.html"> <span>Read more...</span></a>  </div>
                               
                                <div class="blog-card video-card">
                                <img src="../../../blog-subPage/img/${this.image2}" alt="blog-image1">
                                <a href=""../../../blog-subPage/index.html""> <h3>${this.header2}</h3> </a>
                                <span>${this.category2}</span>
                                <span>13${this.date2} <strong>By Envato</strong></span>
                                <p>${this.description2} </p>
                                <a href="./blog-subPage/index.html"> <span>Read more...</span></a>  </div>
                                

                                <div class="blog-card">
                                <img src="../../../blog-subPage/img/${this.image3}" alt="blog-image1">
                                <a href=""../../../blog-subPage/index.html""> <h3>${this.header3}</h3> </a>
                                <span>${this.category3}</span>
                                <span>13${this.date3} <strong>By Envato</strong></span>
                                <p>${this.description3} </p>
                                <a href="./blog-subPage/index.html"> <span>Read more...</span></a>  </div>
                               

                                `
            //    this.image+this.header+this.category+this.date+this.description
               const b= document.querySelector(".blog-catalog");
               b.innerHTML=domHTML;
               console.log(this.date);
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


{/* <div class="video-responsive"> <iframe width="560" height="315" src="https://www.youtube.com/embed/pVE92TNDwUk" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe> </div> */}