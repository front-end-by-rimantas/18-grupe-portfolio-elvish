function scrollTop () {
    const toTop = document.querySelector(".to-top");
    toTop.addEventListener('click',function(){
        window.scrollTo({
            top:0,
            behavior: 'smooth'
        })
    })
}
export default scrollTop;