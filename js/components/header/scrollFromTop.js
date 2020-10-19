import sectionHeights from "../../data/section-heigths.js"
function scrollFromTop () {
    const navigationLinks = document.querySelectorAll(".nav-links");
    const navArray = Array.from(navigationLinks);
    for ( let i=0; i < navArray.length;i++) {
        window.addEventListener('scroll', function (){
            if ( window.scrollY >= sectionHeights[i].height && window.scrollY < sectionHeights[i+1].height) {
                navArray[i].classList.add("single-dot")
            }
            else navArray[i].classList.remove("single-dot")
        })
        navArray[i].addEventListener('click', function (e) {
            console.log(window.scrollY);
            console.log(sectionHeights[i].height);
            e.preventDefault();
            window.scrollTo ({
                top:sectionHeights[i].height,
                behavior: 'smooth'
            })
        })
    }
    
}
export default scrollFromTop;
