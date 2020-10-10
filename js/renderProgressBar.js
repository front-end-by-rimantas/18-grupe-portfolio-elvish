import renderSingleBar from './renderSingleBar.js';

function renderProgressBar(bar) {

    let HTML = '';

    for (let i = 0; i < bar.length; i++) {
        const item = bar[i];
        HTML += renderSingleBar(item, i);

            const barDOM = document.querySelector('.bar2');
            barDOM.innerHTML = HTML;
    }
};

export default renderProgressBar;

// if (item < bar.length / 2) {
//     const barDOM = document.querySelector('.bar1');
//     barDOM.innerHTML = HTML;
    
// } else {
//     const barDOM = document.querySelector('.bar2');
//     barDOM.innerHTML = HTML;
// }
// console.log(item);