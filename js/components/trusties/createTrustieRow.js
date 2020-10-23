import trustieData from "../../data/dataTrusties.js";
import renderSignleTrustieAvatar from "./newTrusties.js" 

function createTrustieRow (data) {
            let trustieHTML ="";
            let getInterface=document.querySelector(".trusties-img ")
            for ( let i=0; i < trustieData.length; i++ ) {
                const item= data[i];
                trustieHTML += renderSignleTrustieAvatar (item);
               
            }
            return  getInterface.innerHTML = trustieHTML;
           
}

export default createTrustieRow;
