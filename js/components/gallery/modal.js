function generateModal(imagePath, gallery) {

    let modal = document.querySelectorAll('#myModal');
    let img = document.querySelectorAll('#gallery-image');
    let modalImg = document.querySelectorAll('#imgModal');
//  let closeBtn = document.querySelectorAll('.closeImage');
   
    for (let i = 0; i < img.length; i++) {
        img[i].onclick = function() {
        modal[i].style.display = 'block';
        modalImg[i].src = imagePath + gallery[i].image; 

// closeBtn[i].onclick = function() { 
// modal[i].style.display = 'none';
// }
    }}

};

export { generateModal };