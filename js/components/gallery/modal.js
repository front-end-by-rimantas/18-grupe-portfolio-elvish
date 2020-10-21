function generateModal(imagePath, gallery) {

    let modal = document.querySelectorAll('#myModal');
    let img = document.querySelectorAll('#gallery-image');
    // console.log(img);
    let modalImg = document.querySelectorAll('#imgModal');
    
    for (let i = 0; i < img.length; i++) {
        img[i].onclick = function() {
        modal[i].style.display = 'block';
        modalImg[i].src = imagePath + gallery[i].image; 
    }}

};

export { generateModal };
