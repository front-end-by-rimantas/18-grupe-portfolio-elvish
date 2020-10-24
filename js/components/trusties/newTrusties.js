    import trustieData from "../../data/dataTrusties.js"

    function renderSignleTrustieAvatar(trustieData) {
        return `<div class="col-2 col-lg-4 col-md-12 ${trustieData.id}"> <img src="./img/client-logos/${trustieData.img}" alt=" Client logo"> </div> `;
    };

    export default renderSignleTrustieAvatar;
    
