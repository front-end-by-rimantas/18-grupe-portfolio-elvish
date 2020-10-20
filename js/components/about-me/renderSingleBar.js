function renderSingleBar(bar, i) {

    // console.log(bar.value);

    return `<div class="progressBar">
                    <div class="top">
                        <div class="label">${bar.label}</div>
                        <div class="value" data-target="${bar.value}">0%</div>
                    </div>
                    <div class="bottom">
                        <div class="progress"></div>
                        <div class="bar" data-target="${bar.value}">0</div>
                    </div>
            </div>`
}

export default renderSingleBar;


// return `<div class="progressBar">
// <div class="top">
//     <div class="label">${bar.label}</div>
//     <div class="value">${bar.value}%</div>
// </div>
// <div class="bottom">
//     <div class="progress" data-target=${bar.value} style="width:${bar.value}%">
//     <div class="bar"></div></div>
// </div>
// </div>`
// }