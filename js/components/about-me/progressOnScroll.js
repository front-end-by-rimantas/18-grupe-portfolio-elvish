import progressBarLoad from './progressBarLoad.js';

function progressOnScroll() {

    window.addEventListener('scroll', function() {
        let bars = document.querySelectorAll('.progressBar');

        for (let i=0; i<bars.length; i++) {
            let position = bars[i].getBoundingClientRect();

            let counter = bars[i].querySelector('.bar')
            if (position.top >= 60 && position.bottom <= window.innerHeight) {
                progressBarLoad(counter);
            }
        }
    });
}

export { progressOnScroll }