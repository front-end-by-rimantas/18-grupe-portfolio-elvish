// var height = document.documentElement.scrollHeight - document.documentElement.clientHeight
// document.body.scrollTop || document.documentElement.scrollTop;
const sectionHeights = [
    {
        name: "home",
        height: document.getElementById("home").offsetTop
    },
    {
        name: "about",
        height: document.getElementById("about").offsetTop
    },
    {
        name: "services",
        height: document.getElementById("services").offsetTop
    },
    {
        name: "education",
        height: document.getElementById("education").offsetTop
    },
    {
        name: "work",
        height: (document.getElementById("work").offsetTop+70)
    },
    {
        name:"client",
        height: document.getElementById("client").offsetTop
    },
    {
        name: "blog",
        height: document.getElementById("blog").offsetTop//reiks papildyti kai turesim kolkas cia placeholderis
    },
    {
        name:"contact",
        height: document.getElementById("contact").offsetTop //papildyti
    }
]
export default sectionHeights;
