function renderSingleIcon(leftIcons) {
    return `<div class="icons3">
                <span class="${leftIcons.icon}"></span>
                <p class="icon-title">${leftIcons.title}</p>
                <p class="icon-content-line">${leftIcons.content}</p>
            </div>`
};


export {renderSingleIcon};