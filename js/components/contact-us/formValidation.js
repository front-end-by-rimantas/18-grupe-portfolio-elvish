function contactFormValidation() {

//     const name = document.querySelector("#name").value;
//     const email = document.querySelector("#email").value;
//     const subject = document.querySelector("#subject".value);
//     const message = document.querySelector("#message");
//     const messError = document.querySelector(".message-error");
//     let emailFormat = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
//     let messForm = document.querySelector("#messageform");
//     let error_message=[];


    
//     messForm.addEventListener('submit', (e) => {

//     if (name.lenght < 2 && name != string || name === '') {
//         error_message.push("Please enter valid name");
//         e.preventDefault();
//         // messError.style.display = "block";
//         // messError.innerHTML = error_message;
//         document.getElementById("message-error").innerHTML = error_message;
//     }
//     if (email.lenght < 6 && email != emailFormat || email === '') {
//         error_message.push("Please enter valid email");
//         e.preventDefault();
//         messError.innerHTML = error_message;
//     }
//     if (subject.lenght < 6 && subject != string || subject === '') {
//         error_message.push("Please enter valid subject");
//         e.preventDefault();
//         messError.innerHTML = error_message;
//     }
//     if (message.lenght < 10 && message.lenght > 140 && message != string || message === '') {
//         error_message.push("Please enter valid message");
//         e.preventDefault();
//         messError.innerHTML = error_message;
//     }

//     return error_message;
// })
// }

export { contactFormValidation };
