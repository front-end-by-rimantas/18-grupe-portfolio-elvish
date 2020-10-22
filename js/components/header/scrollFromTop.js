import sectionHeights from "../../data/section-heigths.js"
function scrollFromTop () {
    const navigationLinks = document.querySelectorAll(".nav-links");
    const navArray = Array.from(navigationLinks);
    const elvish=document.querySelector(".logo-container");
    elvish.addEventListener('click',function(){window.scrollTo(0,0) })
    for ( let i=0; i < navArray.length-1;i++) {
        window.addEventListener('scroll', function (){
            let currentSection = document.getElementById(sectionHeights[i].name)
            let nextSection = document.getElementById(sectionHeights[i+1].name)
            if ( window.scrollY+100 >= currentSection.offsetTop && window.scrollY+100 < nextSection.offsetTop ) {
                navArray[i].classList.add("single-dot")
            }
            else navArray[i].classList.remove("single-dot")
        })
    }
}
export default scrollFromTop;
