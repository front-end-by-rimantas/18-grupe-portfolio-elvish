
let textList = ["a developer", "a designer","Elvish Walter"];
let counter = 0;
let changingPart = document.querySelector(".changing-text");
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