function renderSingleBar(bar, i) {

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