import { renderFormInputs } from './renderFormInputs.js';
import { renderFormTextarea } from './renderFormTextarea.js';
import { renderFormButton } from './renderFormButton.js';

function renderForm(formData) {

    let HTML = '';

    for (let i = 0; i < formData.length; i++) {
        const item = formData[i];
        if (item.sectionType === 'input') {
            HTML += renderFormInputs(item);
        } else if (item.sectionType === 'textarea') {
            HTML += renderFormTextarea(item);
        } else if (item.sectionType === 'button')
            HTML += renderFormButton(item);
    }
    const eduDOM = document.querySelector('.contact-form');
    eduDOM.innerHTML = HTML;
};


export { renderForm };