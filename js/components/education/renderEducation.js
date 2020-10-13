import {renderSingleEdu} from './renderSingleEdu.js';

function renderEducation(eduData) {
    //1. input validation

    

    //3. post logic validation

    //4. output


//2. logic
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