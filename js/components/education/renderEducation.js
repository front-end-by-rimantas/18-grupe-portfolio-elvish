import {renderSingleEdu} from './renderSingleEdu.js';

function renderEducation(eduData) {

    let HTML = '';

    for (let i = 0; i < eduData.length; i++) {
        const item = eduData[i];
        HTML += renderSingleEdu(item);
    }
    const eduDOM = document.querySelector('.edu-1');
    eduDOM.innerHTML = HTML;
};


export {renderEducation};