import { generateStatisticsItem } from './generateStatisticsItem.js'

function renderStatistics(statisticsData) {

    let HTML = '';
    let count = statisticsData.length;
    for (let i = 0; i < count;  i++) {
        const item = statisticsData[i];
        HTML += generateStatisticsItem(item);
    }

    const statisticsDOM = document.querySelector('.statistics-container');

    statisticsDOM.innerHTML = HTML;
}

export default renderStatistics;