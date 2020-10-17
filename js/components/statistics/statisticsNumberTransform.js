function statisticsNumberTransform(counter) {
    const speed = 60; //the higher the slower
    
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
    // })
    }


// function statisticsNumberTransform() {
// const items = document.querySelectorAll('.counter');
// // console.log(items);
// const speed = 100; //the higher the slower

// items.forEach(counter => {
//         const updateCount = () => {
//             const target = +counter.getAttribute('data-target');
//             const count = +counter.innerText;

//             const inc = Math.round(target / speed);

//             if (count < target ){
//                 counter.innerText = count+inc;
//                 setTimeout(updateCount, 50)
//             } else {
//                 counter.innerText = target
//             }
//     }

//     updateCount();
// })
// }

export default statisticsNumberTransform;