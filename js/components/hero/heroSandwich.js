import headerFixes from "../header/headerFixes.js";
let sandwichIcon = document.querySelector(".header-sandwhich")
const mobileNavBar = document.querySelector(".mobile-navigation ")
let clickCount=0;
let windowWidth = window.innerWidth;
function sandwich () 
{
   
    if (clickCount == 0 && window.innerWidth < 980) 
    {
        mobileNavBar.style.display="block";
        clickCount++;
       
    }
    else if (clickCount == 1 || window.innerWidth > 980) 
    {
    mobileNavBar.style.display="none";
    return clickCount=0;
    }
  
   headerFixes ();
}
sandwichIcon.addEventListener('click', sandwich)
export default sandwich;