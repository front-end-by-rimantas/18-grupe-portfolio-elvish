class Filters {
    constructor(filters, onFilterChange) {
        this.filters = filters;
        this.onFilterChange = onFilterChange;
    }

    generateHTML() {
        let HTML = '';

        for (let i = 0; i < this.filters.length; i++) {
            const name = this.filters[i];
            HTML += this.generateFilterItem(name, i);
        }

        return HTML; 
    }

    generateFilterItem(name, index) {
        let HTML = `<span class="filter-menu-star">&#65121</span>
                <li class="filter-list-item star" data-filter="${name}">${name}</li>`

        if (index === 0) {
            HTML = `<li class="filter-list-item" data-filter="${name}">${name}</li>`
        }

        return HTML
    }

    addEvents() {
        this.on('.filter-ul .filter-list-item', 'click', (event) => {
            const el = event.target;
            const filter = el.dataset.filter;
            
            let allFilter = document.querySelectorAll('.filter-list-item')
            allFilter.forEach(filter => {
               filter.classList.remove('active')
            })
    
           el.classList.add('active')
    
            if (filter === 'all') {
                this.onFilterChange();
            } else {
                this.onFilterChange(filter);
            }
        })
    }

    on(elementSelector, eventName, handler) {
        document.addEventListener(eventName, (e) => {
            // loop parent nodes from the target to the delegation node
            for (var target = e.target; target && target != this; target = target.parentNode) {
                if (target.matches(elementSelector)) {
                    handler(e);
                    break;
                }
            }
        }, false);
    };
}

export { Filters }