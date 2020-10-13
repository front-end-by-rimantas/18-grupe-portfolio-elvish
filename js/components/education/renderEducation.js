import {renderSingleEdu} from './renderSingleEdu.js';

function renderEducation(eduData) {
    //input validation

    //logic

    //post logic validation

    //output

    let HTML = '';

    for (let i = 0; i < eduData.length / 2; i++) {
        const item = eduData[i];
        HTML += renderSingleEdu(item);
        
        const eduDOM = document.querySelector('.edu-1');
        eduDOM.innerHTML = HTML;

    }

    HTML = '';
    for (let i = eduData.length / 2; i < eduData.length; i++) {
        const item = eduData[i];
        HTML += renderSingleEdu(item);

        
        const eduDOM = document.querySelector('.edu-2');
        eduDOM.innerHTML = HTML;
    }
};


export {renderEducation};