import { renderBlog } from './renderBlog.js'

function prevNext(blogData) {

    let prev = document.querySelector('.prev')

    prev.addEventListener('click', () => {

        let current = document.querySelector('.active-page');
        let currentNumber = Number(current.innerHTML)

        if (current.previousElementSibling !== null) {
            renderBlog(blogData, currentNumber-1);

            current.classList.remove('active-page')
            current.previousElementSibling.classList.add('active-page');

        }})
    
    let next = document.querySelector('.next')

    next.addEventListener('click', () => {

        let current = document.querySelector('.active-page');
        let currentNumber = Number(current.innerHTML)

        if (current.nextElementSibling !== null) {
            renderBlog(blogData, currentNumber+1);

            current.classList.remove('active-page')
            current.nextElementSibling.classList.add('active-page');

        }})
    
}

export { prevNext }