import {renderSingleEdu} from './renderSingleEdu.js';

function renderEducation(eduData) {
    //input validation

    //logic

    //post logic validation

    //output

    let HTML = '';

    for (let i = 0; i < eduData.length; i++) {
        const item = eduData[i];
        HTML += renderSingleEdu(item);
    }
        
        const eduDOM = document.querySelector('.edu-12');
        eduDOM.innerHTML = HTML;

    }

export {renderEducation};

//     let HTML = '';
//     let count = statisticsData.length;
//     for (let i = 0; i < count;  i++) {
//         const item = statisticsData[i];
//         HTML += renderStatisticsItem(item);
//     }

//     console.log(HTML);

//     //susirandame elementa, kuriame norime perrasyti turini
//     const statisticsDOM = document.querySelector('.statistics-container');
//     // console.log(feedDOM);

//     //i ta elementa ikeliame HTML kintamojo reiksme
//     statisticsDOM.innerHTML = HTML;
//     // renderStatisticsItem(statisticsData);
// }

// export default renderStatistics;