import Trusty from "./Trusty.js"
const trustieParams = [
    {
        img: "chocolate.png",
        id: "trustie-avatar"
    },
    {
        img: "coffee.png",
        id: "trustie-avatar"
    },
    {
        img: "fisherman.png",
        id: "trustie-avatar"
    },
    {
        img: "market-logo.png",
        id: "trustie-avatar"
    },
    {
        img: "mountain-bike.png",
        id: "trustie-avatar"
    },
    {
        img: "mountains.png",
        id: "trustie-avatar"
    }

]
const trustie1 = new Trusty(trustieParams[0])
const trustie2 = new Trusty(trustieParams[1])
const trustie3 = new Trusty(trustieParams[2])
const trustie4 = new Trusty(trustieParams[3])
const trustie5 = new Trusty(trustieParams[4])
const trustie6 = new Trusty (trustieParams[5])
const trusties = [trustie1, trustie2,trustie3,trustie4,trustie5,trustie6]
export default trusties;