function findDefaultFilter() {

    let count = document.querySelectorAll('.filter-list-item');

    for (let i=0; i< count.length; i++) {
        if (count[i].innerHTML === 'All') {
            count[i].classList.add('active');
        } 
    }
}

export { findDefaultFilter };


