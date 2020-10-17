function generateStatisticsItem(statisticsData) {
            // console.log(statisticsData); 
            return `<div class='statistics-item'>
                        <span class="${statisticsData.icon}"></span>
                        <div class="counter" data-target=${statisticsData.number}>0</div>
                        <h4>${statisticsData.title}</h4>
                    </div>`
};

export {generateStatisticsItem};

//input validation
//logic
//post logic validation
//output