    import trustieData from "../../data/dataTrusties.js"

    function renderSignleTrustieAvatar(trustieData) {
        return `<div class="${trustieData.id}"> <img src="./img/client-logos/${trustieData.img}" alt=" Client logo"> </div> `;
    };

    export default renderSignleTrustieAvatar;
    
