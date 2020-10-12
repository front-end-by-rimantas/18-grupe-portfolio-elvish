function renderStatisticsItem(statisticsData) {
            // console.log(statisticsData); 
            return `<div class='statistics-item'>
                        <span class="${statisticsData.icon}"></span>
                        <h2>${statisticsData.number}</h2>
                        <h4>${statisticsData.title}</h4>
                    </div>`
};

export default renderStatisticsItem;