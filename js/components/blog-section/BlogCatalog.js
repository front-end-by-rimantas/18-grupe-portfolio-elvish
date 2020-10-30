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
                                <div class="blog-image">
                                <img src="../../../blog-subPage/img/${this.image1}" alt="blog-image1">
                                </div>
                                <a href="../../../blog-subPage/index.html"> <h3>${this.header1}</h3> </a>
                                <span>${this.category1}</span>
                                <span>13${this.date1} <strong>By Envato</strong></span>
                                <p>${this.description1} </p>
                                <a href="../../../blog-subPage/index.html"> <span>Read more...</span></a>  </div>
                               
                                <div class="video-box"> <span> x
                                 </span> </div>
                                <div class="blog-card video-card">
                                <div class="blog-image">
                                <img src="../../../blog-subPage/img/${this.image2}" alt="blog-image1">
                                </div>
                                <a href="../../../blog-subPage/index.html"> <h3>${this.header2}</h3> </a>
                                <span>${this.category2}</span>
                                <span>13${this.date2} <strong>By Envato</strong></span>
                                <p>${this.description2} </p>
                                <a href="../../../blog-subPage/index.html"> <span>Read more...</span></a>  </div>
                                

                                <div class="blog-card">
                                
                                <div class="carousel-container">
                                <div class="next-slide"> > </div>
                                <div class="prev-slide"> < </div>
                                <div class="slider">
                                <img id="last-clone" src="../../../blog-subPage/img/${this.image1}" alt="blog-image1">
                                <img src="../../../blog-subPage/img/${this.image3}" alt="blog-image1">
                                <img src="../../../blog-subPage/img/${this.image2}" alt="blog-image1">
                                <img src="../../../blog-subPage/img/${this.image1}" alt="blog-image1">
                                <img id="first-clone" src="../../../blog-subPage/img/${this.image3}" alt="blog-image1">
                                </div>
                                </div>
                                <a href="../../../blog-subPage/index.html"> <h3>${this.header3}</h3> </a>
                                <span>${this.category3}</span>
                                <span>13${this.date3} <strong>By Envato</strong></span>
                                <p>${this.description3} </p>
                                <a href="../../../blog-subPage/index.html"> <span>Read more...</span></a>  </div>
                                `
        
               const b= document.querySelector(".blog-catalog");
               b.innerHTML=domHTML;
               
            }
            blogSlider() {
                const carouselSlide= document.querySelector(".slider")
                const carouselImages = document.querySelectorAll(".slider img")
                const prevSlide = document.querySelector(".prev-slide")
                const nextSlide = document.querySelector(".next-slide")
                let counter = 1;
                let size = carouselImages[1].width;
                
                carouselSlide.style.transform="translateX(" + (-carouselImages[0].width * counter) + "px)"


            nextSlide.addEventListener('click',()=>{
                    if (counter>= carouselImages.length-1) return;
                     carouselSlide.style.transition = "transform 0.4s ease-in-out"
                     counter++;
                     carouselSlide.style.transform="translateX(" + (-carouselImages[0].width * counter) + "px)"
                    
                });
                prevSlide.addEventListener('click',()=>{
                    if (counter <=0) return;
                    carouselSlide.style.transition = "transform 0.4s ease-in-out"
                    counter--;
                    carouselSlide.style.transform="translateX(" + (-carouselImages[0].width * counter) + "px)"
                });
                 carouselSlide.addEventListener('transitionend',()=>{
                     if(carouselImages[counter].id==='last-clone') {
                        carouselSlide.style.transition = "none"
                        counter=carouselImages.length-2;
                        carouselSlide.style.transform="translateX(" + (-carouselImages[0].width * counter) + "px)"

                     }
                     if(carouselImages[counter].id==='first-clone') {
                        carouselSlide.style.transition = "none"
                        counter=carouselImages.length-counter;
                        carouselSlide.style.transform="translateX(" + (-carouselImages[0].width * counter) + "px)"

                     }
                 })
            }

        videoBox () {
            const close=document.querySelector(".video-box > span")
            const videoBox = document.querySelector(".video-box")
            const videoCard = document.querySelector(".video-card > .blog-image")
            const htmlColor = document.querySelector("body")
            let count=1;
            close.addEventListener ('click', ()=> {
                if (count==1){
                    videoBox.style.display="none"
                    count--;
                    htmlColor.style.backgroundColor="white"
                }
                else {
                    count=1;
                }
            })
            videoCard.addEventListener('click',()=>
            {
                videoBox.style.display="inline-block"
                htmlColor.style.backgroundColor="grey"
             })
        }

}
export {BlogCatalog};
