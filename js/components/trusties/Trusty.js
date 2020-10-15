class Trusty  {
        constructor (params) {
            this.img = params.img;
            this.id = params.id;
        }
         showImage () {
             return`<div class="${this.id}"> <img src="./img/client-logos/${this.img}" alt=" Client logo"> </div> `;
        }
}
export default Trusty;


