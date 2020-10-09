const text = document.querySelector(".changing-text")
let textList=["Elvish Walter", "a developer", "a designer"];
function textChanging (){
   
    setInterval(function(){ Elvish();}, 1000);
    setInterval(function(){ developer();}, 4000);
    setInterval(function(){ designer();}, 5000);
    }

    function Elvish () {
return text.innerHTML= "" + textList[0];
    }
    function developer (){
        return text.innerHTML=textList[1];
    }
    function designer (){
        return   text.innerHTML=textList[2];
    }

    export default textChanging;