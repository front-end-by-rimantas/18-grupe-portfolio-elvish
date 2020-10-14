function statisticsNumberTransform() {
const items = document.querySelectorAll('.counter');
// console.log(items);
const speed = 60; //the lower the slower

items.forEach(counter => {
        const updateCount = () => {
            const target = +counter.getAttribute('data-target');
            const count = +counter.innerText;

            const inc = Math.round(target / speed);

            if (count < target ){
                counter.innerText = count+inc;
                setTimeout(updateCount, 50)
            } else {
                count.innerText = target
            }
    }

    updateCount();
})
}

export default statisticsNumberTransform;