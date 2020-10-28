function scrollTop () {
    const toTop = document.querySelector(".to-top");
    window.addEventListener('scroll', ()=> {
        if ( window.scrollY == 0) {
            toTop.style.display="none"
        }
        else {
            toTop.style.display="block"
        }
    })
   
    toTop.addEventListener('click',function(){
        window.scrollTo({
            top:0,
            behavior: 'smooth'
        })
    })

}
export default scrollTop;