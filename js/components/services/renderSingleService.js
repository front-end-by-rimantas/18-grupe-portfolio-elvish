// import list from "./services.js";

function renderSingleService(services, i) {

    return `<div class ="servicesjs col-4 col-md-6 col-sm-12">
                <span class=${services.icon}></span>
                <h5><bold>${services.header}</bold></h5>
                <p>${services.paragraph}</p></div>
</div>`
}
export default renderSingleService;
