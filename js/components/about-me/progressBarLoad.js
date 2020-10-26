function progressBarLoad() {
    const items = document.querySelectorAll('.bar');
    const value = document.querySelectorAll('.value');
    
    const speed = 60; //the lower the slower
    
    items.forEach(counter => {
            const updateCount = () => {
                const target = +counter.getAttribute('data-target');
                // console.log(target);
                const count = +counter.innerText;
    
                const inc = Math.round(target / speed);
                // let style = document.querySelectorAll('.bar').style.width = `0%`;
    
                if (count < target ){
                    counter.innerText = count+inc;
                    counter.style.width = `${count+inc}%`;
                    setTimeout(updateCount, 50)
                } else {
                    counter.innerText = target;
                }
        }
    
        updateCount();
    })

    value.forEach(counter => {
        const updateCount = () => {
            const target = +counter.getAttribute('data-target');
            let count = + counter.innerText.substring(0 , counter.innerText.length - 1);
            const inc = Math.round(target / speed);

            if (count < target ){
                counter.innerText = (count+inc)+'%';
                setTimeout(updateCount, 50)
            } else {
                counter.innerText = target+"%";
                
            }
            
    }

    updateCount();
})

    }
    
    export default progressBarLoad;