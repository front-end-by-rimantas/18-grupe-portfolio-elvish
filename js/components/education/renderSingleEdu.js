function renderSingleEdu(eduData) {

    return `<div class="edu">   
                <div class="year-edu"><span><i id="circl" class="fa fa-circle"></i></span>${eduData.year}</div>
                    <h4>${eduData.university}</h4>
                    <p>${eduData.description}</p>
            </div>`
};

export {renderSingleEdu};