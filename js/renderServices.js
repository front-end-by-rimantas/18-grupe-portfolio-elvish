import renderSingleService from './renderSingleService.js';

function renderServices(list) {
    
    let HTML = '';
    
    for (let i = 0; i < 3; i++) {
        const item = list[i];
        HTML += renderSingleService(item, i);

        const servicesDOM = document.querySelector('.services .services-topas');
        servicesDOM.innerHTML = HTML;
    }
    HTML = '';

    for (let i = 3; i < list.length; i++) {
        const item = list[i];
        HTML += renderSingleService(item, i);

        const servicesDOM = document.querySelector('.services .services-bot');
        servicesDOM.innerHTML = HTML;
    }

}
    
export default renderServices;

