
import sectionHeights from "../../data/section-heigths.js"
function scrollFromMobileNav () {
    const mobileNav = document.querySelectorAll(".mob-nav-items");
    const mobileArray = Array.from(mobileNav)
    console.log(mobileNav);
    for ( let i=0; i < mobileArray.length;i++) {
        mobileArray[i].addEventListener('click', function(){
            window.scrollTo ({
                top:sectionHeights[i].height,
                behavior: "smooth"
            })
        })
    }
}
export default scrollFromMobileNav;




// function scrollFromTop () {
//     const navigationLinks = document.querySelectorAll(".nav-links");
//     const navArray = Array.from(navigationLinks);
//     for ( let i=0; i < navArray.length;i++) {
//         // console.log(sectionHeights[i].height);
//         navArray[i].addEventListener('click', function (e) {
//             e.preventDefault();
//             window.scrollTo ({
//                 top:sectionHeights[i].height,
//                 behavior: 'smooth'
//             })
//         })
//     }