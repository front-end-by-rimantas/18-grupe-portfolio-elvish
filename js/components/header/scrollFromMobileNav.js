import sandwich from "../hero/heroSandwich.js"
import sectionHeights from "../../data/section-heigths.js"
function scrollFromMobileNav () {
    const mobileNav = document.querySelectorAll(".mob-nav-items");
    const mobileArray = Array.from(mobileNav)
    for ( let i=0; i < mobileArray.length;i++) {
        mobileArray[i].addEventListener('click', function(){
            window.scrollTo ({
                top:sectionHeights[i].height,
                behavior: "smooth"
            })
            const hideNavigation = document.querySelector(".mobile-navigation").style.display="none"
            sandwich();
        })
    }
}
export default scrollFromMobileNav;
