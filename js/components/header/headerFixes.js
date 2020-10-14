// sita funckcija, pataiso headerio, burgerio spalva kai scroliname zemyn/aukstyn, sita funkcija galbut gal ibut papildyta
//ateityje jeigu reikes daugiau pataisymu kazka darant su headeariu pvz taskiukai ant teksto
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