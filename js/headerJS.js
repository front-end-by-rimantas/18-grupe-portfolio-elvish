
function headerEffects () {
    window.addEventListener( "scroll", function()  { 
        let header = document.querySelector ("header");
        let headerElements = document.querySelectorAll("a");
        header.classList.toggle("sticky",window.scrollY > 0);
       
        })
}
  export default headerEffects;