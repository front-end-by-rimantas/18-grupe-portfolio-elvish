function renderSingleEdu(eduData) {

    //input validation
    // if (!eduData) {
    //     return '';
    // }
    // if (typeof eduData.university !== 'string') {
    //     console.error('ERROR: title name must be string');
    // }
    // if (typeof eduData.university === '') {
    //     console.error();
    // }
    // if (typeof eduData.university.lenght > 50) {
    //     console.error();
    // }


    //logic
    const HTML = `<div class="edu">   
                    <div class="year-edu">${eduData.year}</div>
                    <h4>${eduData.university}</h4>
                    <p>${eduData.description}</p>
                </div>`
    return HTML;
};

export {renderSingleEdu};