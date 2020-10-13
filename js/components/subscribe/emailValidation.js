function subscribeEmailValidation () {
const email = document.querySelector(".subscribe-input")
const emailError = document.querySelector(".subscribe-error")
let message=[];
let form = document.querySelector("form")
form.addEventListener('submit', (e)=> {
  if ( !email.value.match (/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) {
    message.push("It doesn't look like an email");
        e.preventDefault();
  }
if(message.length > 0) {

    emailError.innerHTML = message;
}
 message=[];
})

}

export default subscribeEmailValidation;



