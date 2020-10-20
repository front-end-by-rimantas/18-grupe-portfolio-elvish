
const sectionHeights = [
    {
        name: "home",
        height: 0,
    },
    {
        name: "about",
        height: document.querySelector(".aboutMe").offsetTop
    },
    {
        name: "services",
        height: document.querySelector(".servicesRow").offsetTop
    },
    {
        name: "education",
        height: document.querySelector(".education").offsetTop
    },
    {
        name: "work",
        height: document.querySelector(".our-work-section").offsetTop
    },
    {
        name:"client",
        height: document.querySelector(".clients").offsetTop
    },
    {
        name: "blog",
        height: document.querySelector(".subscribe-form").offsetTop-600//reiks papildyti kai turesim kolkas cia placeholderis
    },
    {
        name:"contact",
        height: document.querySelector(".subscribe-form").offsetTop //papildyti
    }
]
export default sectionHeights;
