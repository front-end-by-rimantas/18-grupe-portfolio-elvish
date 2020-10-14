// import list from "./services.js";

function renderSingleService(services, i) {

    return `<div class ="servicesjs">
                <span class=${services.icon}></span>
                <h5 class="font-weight-bold">${services.header}</h5>
                <p>${services.paragraph}</p></div>
</div>`
}
export default renderSingleService;
