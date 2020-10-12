function renderSingleEdu(eduData) {

    return `<div class="edu-12">
                    <i class="fa fa-circle"></i>
                    <h4>${eduData.year}</h4>
                    <h2>${eduData.university}</h2>
                    <p>${eduData.description}</p>
            </div>`
};

export {renderSingleEdu};