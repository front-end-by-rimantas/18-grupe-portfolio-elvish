
function mobNavigation () {
    const mobNav = document.querySelector(".mobile-navigation")
    let HTML= `  <div class="mob-nav-items">Home</div>
    <div class="mob-nav-items">About</div>
    <div class="mob-nav-items">Services</div>
    <div class="mob-nav-items">Education</div>
    <div class="mob-nav-items">Work</div>
    <div class="mob-nav-items">Client</div>
    <div class="mob-nav-items">Blog</div>
    <div class="mob-nav-items">Contact</div>`
    mobNav.innerHTML=HTML


}

export default mobNavigation;