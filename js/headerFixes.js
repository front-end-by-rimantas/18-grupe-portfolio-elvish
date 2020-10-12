function headerFixes () {
    let burger = document.querySelectorAll("#burger");
    let burgerArray = Array.from(burger)
    let navLinks = document.querySelector(".mobile-navigation");
    if (window.innerWidth < 780) {
        for ( let i=0; i < burgerArray.length;i++) {
          burgerArray[i].style.background="black";
        }
    }
}

export default headerFixes;