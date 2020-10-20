import { generateFilterItem } from './generateFilterItem.js';

function renderFilter(galleryFilter, onFilterChange) {

    let HTML = '';

    for (let i = 0; i < galleryFilter.length; i++) {

        const item = galleryFilter[i];
        HTML += generateFilterItem(item, galleryFilter);
    }

    const filterDOM = document.querySelector('.filter-ul');
    filterDOM.innerHTML = HTML;
    
    on('.filter-ul .filter-list-item', 'click', (event) => {
        const el = event.target;
        const filter = el.dataset.filter;
        
        if (filter === 'all') {
            onFilterChange();
        } else {
            onFilterChange(filter);
        }
    })

}

function on(elementSelector, eventName, handler) {
    document.addEventListener(eventName, function(e) {
        // loop parent nodes from the target to the delegation node
        for (var target = e.target; target && target != this; target = target.parentNode) {
            if (target.matches(elementSelector)) {
                handler.call(target, e);
                break;
            }
        }
    }, false);
};

export { renderFilter };


