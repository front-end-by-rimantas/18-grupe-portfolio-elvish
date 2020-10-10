// const text = document.querySelector(".changing-text")
// let textList=["Elvish Walter", "a developer", "a designer"];
// // function textChanging (){
// //     developer();
// //     // setInterval(function(){ developer();},3000);
// //     // setInterval(function(){ Elvish();}, 6050);
// //     // setInterval(function(){ designer();}, 9000);
// //     }

// //     function Elvish () {
// //         console.log("start");
// // return text.innerHTML= "" + textList[0];
// //     }
//     function developer (){
//         console.log("finish");
//         return  text.innerHTML=textList[1];
//     }
//     // function designer (){
//     //     return   text.innerHTML=textList[2];
//     // }

//     export default developer;

let textList = ["a developer", "a designer","Elvish Walter"];
let counter = 0;
let changingPart = document.querySelector(".changing-text");
console.log(changingPart);
setInterval(heroTextTransform, 4000);

function heroTextTransform() {
    changingPart.classList.add('hide-text');
    setTimeout(function () {
        changingPart.innerHTML = textList[counter];
        changingPart.classList.remove('hide-text');
        counter++;
        if (counter >= textList.length) {
            counter = 0;
        }
    }, 2000);
}
export default heroTextTransform;