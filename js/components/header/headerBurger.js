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
        sandwichIcon.classList.add("change")
    }
    else if (clickCount == 1 || window.innerWidth > 980) 
    {
    mobileNavBar.style.display="none";
    sandwichIcon.classList.remove("change")
    return clickCount=0;
    }
   headerFixes ();
}
sandwichIcon.addEventListener('click', sandwich)
export default sandwich;