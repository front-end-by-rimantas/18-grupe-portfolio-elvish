
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
    // {
    //     name: "blog",
    //     height: document.querySelector("") //reiks papildyti kai turesim
    // },
    // {
    //     name:"contact",
    //     height: document.querySelector("") //papildyti
    // }
]
export default sectionHeights;
