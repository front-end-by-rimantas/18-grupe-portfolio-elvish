import sectionHeights from "../../data/section-heigths.js"
function scrollFromTop () {
    const navigationLinks = document.querySelectorAll(".nav-links");
    const navArray = Array.from(navigationLinks);
    for ( let i=0; i < navArray.length;i++) {
        // console.log(sectionHeights[i].height);
        navArray[i].addEventListener('click', function (e) {
            e.preventDefault();
            window.scrollTo ({
                top:sectionHeights[i].height,
                behavior: 'smooth'
            })
        })
    }
}
// preventDefault
export default scrollFromTop;


// let footerSocials = document.querySelectorAll("#footer-socials");
// let socialList = Array.from(footerSocials)

// window.scrollTo({
//     top: 100,
//     left: 100,
//     behavior: 'smooth'
//   });
// yes_js_login = function(e) {
//     e.preventDefault();
//   }