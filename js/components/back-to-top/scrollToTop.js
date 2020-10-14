function scrollTop () {
    const toTop = document.querySelector(".to-top");
    toTop.addEventListener('click',function(){
        window.scrollTo({
            top:0,
            behavior: 'smooth'
        })
        console.log("labas");
    })
}
export default scrollTop;