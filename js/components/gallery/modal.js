function generateModal(imagePath, images) {

    let modal = document.querySelectorAll('#myModal');
    let img = document.querySelectorAll('.gallery-item');
    let modalImg = document.querySelectorAll('#imgModal');
    // let closeBtn = document.querySelectorAll('.closeImage');
   
    for (let i = 0; i < img.length; i++) {
        img[i].onclick = function() {
        modal[i].style.display ='block';
        modalImg[i].src = imagePath + images[i].image;
        }

        // closeBtn[i].onclick = function() {
        // console.log('ok');
        // modal[i].style.display ='none';
        // console.log(modal[i]);
        // }
    }
};

export { generateModal };