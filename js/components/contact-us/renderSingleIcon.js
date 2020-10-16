function renderSingleIcon(leftIcons) {
    return `<div class="icons3 col-4 col-xl-4 col-md-4 col-sm-12'>
                <span class="${leftIcons.icon}"></span>
                <p class="icon-title">${leftIcons.title}</p>
                <p class="icon-content-line">${leftIcons.content}</p>
            </div>`
};

export {renderSingleIcon};