function subscribeEmailValidation () {
const email = document.querySelector(".subscribe-input")
const emailError = document.querySelector(".subscribe-error")
let message=[];
let form = document.querySelector("form")
const SuberrorIcon = document.querySelector(".subscribe-errorIcon")
form.addEventListener('submit', (e)=> {
  if ( !email.value.match (/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) {
    message.push("It doesn't look like an email");
        e.preventDefault();
        SuberrorIcon.style.display = "block";
  }
  else {
    SuberrorIcon.style.display = "none";
    emailError.style.display="none";
  }
if(message.length > 0) {
    emailError.style.display="block";
    emailError.innerHTML = message;
}
 message=[];

})

}

export default subscribeEmailValidation;



