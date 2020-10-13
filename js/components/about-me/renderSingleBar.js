function renderSingleBar(bar, i) {

    return `<div class="progressBar">
                    <div class="top">
                        <div class="label">${bar.label}</div>
                        <div class="value">${bar.value}</div>
                    </div>
                    <div class="bottom">
                        <div class="progress" style="width:${bar.value}">
                        <div class="bar"></div></div>
                    </div>
            </div>`
}

export default renderSingleBar;