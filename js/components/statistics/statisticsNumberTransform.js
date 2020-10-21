function statisticsNumberTransform(counter) {
    const speed = 100; //the higher the slower
    
            const updateCount = () => {
                const target = +counter.getAttribute('data-target');
                const count = +counter.innerText;
    
                const inc = Math.round(target / speed);
    
                if (count < target ){
                    counter.innerText = count+inc;
                    setTimeout(updateCount, 50)
                } else {
                    counter.innerText = target
                }
        }
    
        updateCount();
    }

export default statisticsNumberTransform;