
function hoverAnimation () {
   let footerSocials = document.querySelectorAll("#footer-socials");
   let socialList = Array.from(footerSocials)
    for ( let i=0; i < socialList.length;i++) {
 socialList[i].onmouseout = function (){socialList[i].classList.add("rotate-back")}
    }
}
export default hoverAnimation;
