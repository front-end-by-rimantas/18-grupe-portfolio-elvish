import statisticsNumberTransform from './statisticsNumberTransform.js'

function numberTransformOnscroll() {
    
    window.addEventListener('scroll', function() {
        let element = document.querySelectorAll('.statistics-item');

        for (let i = 0; i < element.length; i++) {
            
            let position = element[i].getBoundingClientRect();

            // checking whether fully visible
            let counter = element[i].querySelector(".counter");
            if(position.top >= 60 && position.bottom <= window.innerHeight) {
                statisticsNumberTransform(counter);
            }
        }
    });
}

export { numberTransformOnscroll };
