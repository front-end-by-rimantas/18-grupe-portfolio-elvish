function renderSingleEdu(eduData) {
    const HTML = `<div class="edu col-6 col-lg-12 col-md-12 col-sm-12">   
                    <div class="year-edu">${eduData.year}</div>
                    <h4>${eduData.university}</h4>
                    <p>${eduData.description}</p>
                </div>`
    return HTML;
};

export {renderSingleEdu};