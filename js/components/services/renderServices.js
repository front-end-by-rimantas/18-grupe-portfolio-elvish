import renderSingleService from './renderSingleService.js';

function renderServices(list) {
    
    let HTML = '';

    for (let i = 0; i < list.length; i++) {
        const item = list[i];
        HTML += renderSingleService(item, i);

        const servicesDOM = document.querySelector('.services');
        servicesDOM.innerHTML = HTML;
    }

}
    
export default renderServices;

