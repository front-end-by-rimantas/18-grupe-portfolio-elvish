let sandwichIcon = document.querySelector(".header-sandwhich")
const mobileNavBar = document.querySelector(".mobile-navigation ")
let clickCount=0;

function sandwich () 
{
    if (clickCount == 0) 
    {
        mobileNavBar.style.display="block";
        clickCount++;
    }
    else if (clickCount == 1)
    {
    mobileNavBar.style.display="none";
    return clickCount=0;
    }

}
sandwichIcon.addEventListener('click', sandwich)
export default sandwich;