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
export default scrollFromTop;
