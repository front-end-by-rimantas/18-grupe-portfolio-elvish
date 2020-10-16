import {renderFormInputs} from './renderFormInputs';

function renderForm(formData) {

    let HTML = '';

    for (let i = 0; i < formData.length; i++) {
        const item = formData[i];
        HTML += renderFormInputs(item);
    }
    const eduDOM = document.querySelector('.contact-form');
    eduDOM.innerHTML = HTML;
};


export {renderForm};