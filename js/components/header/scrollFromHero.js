
function HeroScroll (){
   let navLinks= document.querySelectorAll(".nav-links")
    let navList = Array.from(navLinks);
    const about = document.querySelector(".about-section")
    const height = about.offsetTop;
    navList[1].addEventListener('click',function(){
        window.scrollTo({
            top:height,
            behavior: 'smooth'
        })
    })
    


    // navLinks.forEach(function(elem){
    //     let index=0;
    //         elem.addEventListener('click', function(){
    //             window.scrollTo({
    //                             top: height,
    //                             behavior: 'smooth'
    //                         });
    //         })
    //         index++;
    // })
// const navLinks = document.querySelectorAll(".nav-links")
// let navLinksList = Array.from(navLinks)
// console.log(navLinksList);
// for ( let i=0; i < navLinksList.length ; i++) {
    
// }
}
export default HeroScroll;



// const allSeeLessDOM = document.querySelectorAll('.post .less');

// for (let i = 0; i < allSeeLessDOM.length; i++) {
//     const seeLess = allSeeLessDOM[i];
//     seeLess.addEventListener('click', () => {
//         const contentDOM = seeLess.closest('.content');
//         contentDOM.classList.remove('show');
//         // issiaiskinti kokiame aukstyje yra .post elementas
//         const postDOM = contentDOM.closest('.post');
//         const postHeightPosition = postDOM.offsetTop;
//         // scrollinime i nurodyta auksti
//         window.scrollTo({
//             top: postHeightPosition - 40,
//             behavior: 'smooth'
//         });