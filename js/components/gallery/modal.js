function generateModal(imagePath, images) {

    let modal = document.querySelectorAll('#myModal');
    let img = document.querySelectorAll('.gallery-item');
    let modalImg = document.querySelectorAll('#imgModal');
    
   
    for (let i = 0; i < img.length; i++) {
        img[i].onclick = function() {
        modal[i].style.display ='block';
        modalImg[i].src = imagePath + images[i].image;
        }

        let closeBtn = document.querySelectorAll('.closeImage');
        closeBtn[i].onclick = function() {
        modal[i].style.display ='none';
        }
    }
};

export { generateModal }