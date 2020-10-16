import {renderSingleIcon} from './renderSingleIcon.js';

function renderIcons (leftIcons) {

    let HTML = '';

    for (let i = 0; i < leftIcons.length; i++) {
        const item = leftIcons[i];
        HTML += renderSingleIcon(item);
    }
    const eduDOM = document.querySelector('.icons-left');
    eduDOM.innerHTML = HTML;
};


export {renderIcons};