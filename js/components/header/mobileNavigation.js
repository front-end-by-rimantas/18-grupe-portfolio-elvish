
function mobNavigation () {
    const mobNav = document.querySelector(".mobile-navigation")
    let HTML= 
    `<a href="#home"> <div class="mob-nav-items">Home</div> </a>
    <a href="#about"> <div class="mob-nav-items">About</div>
    <a href="#services"> <div class="mob-nav-items">Services</div>
    <a href="#education">  <div class="mob-nav-items">Education</div>
    <a href="#work"> <div class="mob-nav-items">Work</div>
    <a href="#client">  <div class="mob-nav-items">Client</div>
    <a href="#blog">  <div class="mob-nav-items">Blog</div>
    <a href="#contact">  <div class="mob-nav-items">Contact</div>`
    mobNav.innerHTML=HTML
}

export default mobNavigation;
