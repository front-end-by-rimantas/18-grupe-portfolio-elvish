import renderStatisticsItem from './renderStatisticsItem.js'

function renderStatistics(statisticsData) {
    // console.log(statisticsData);

    let HTML = '';
    let count = statisticsData.length;
    for (let i = 0; i < count;  i++) {
        const item = statisticsData[i];
        HTML += renderStatisticsItem(item);
    }

    // console.log(HTML);

    //susirandame elementa, kuriame norime perrasyti turini
    const statisticsDOM = document.querySelector('.statistics-container');
    // console.log(feedDOM);

    //i ta elementa ikeliame HTML kintamojo reiksme
    statisticsDOM.innerHTML = HTML;
    // renderStatisticsItem(statisticsData);
}

export default renderStatistics;