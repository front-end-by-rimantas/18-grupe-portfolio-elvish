function renderSingleEdu(eduData) {
    const HTML = `<div class="edu">   
                    <div class="year-edu">${eduData.year}</div>
                    <h4>${eduData.university}</h4>
                    <p>${eduData.description}</p>
                </div>`
    return HTML;
};

export {renderSingleEdu};