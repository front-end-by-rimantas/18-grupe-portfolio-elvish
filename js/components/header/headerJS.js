function headerEffects () {
    window.addEventListener( "scroll", function()  { 
        let header = document.querySelector ("header");
        let burger = document.querySelectorAll("#burger");
        let burgerArray = Array.from(burger)
        header.classList.toggle("sticky",window.scrollY > 0);
        if (window.scrollY > 10) {
          for ( let i=0; i < burgerArray.length;i++) {
            burgerArray[i].style.background="black";
          }
        }
        else {
          for ( let i=0; i < burgerArray.length;i++) {
            burgerArray[i].style.background="white";
          }
        }
        })
      
}
  export default headerEffects;
   