function contactFormValidation(data) {

    const name = document.querySelector("#name").value;
    const email = document.querySelector("#email").value;
    const subject = document.querySelector("#subject".value);
    const message = document.querySelector("#message");
    let emailFormat = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    let error_message=[];
    

    if (name.lenght < 2 && name != string || name === '') {
        error_message.push("Please enter valid name");
        return false;
    }
    if (email.lenght < 6 && email != emailFormat || email === '') {
        error_message.push("Please enter valid email");
        return false;
    }
    if (subject.lenght < 6 && subject != string || subject === '') {
        error_message.push("Please enter valid subject");
        return false;
    }
    if (message.lenght < 10 && message.lenght > 140 && message != string || message === '') {
        error_message.push("Please enter valid message");
        return false;
    }
    console.log(data);
    // alert ("Message submitted successfuly!");
    return true;
}

export { contactFormValidation }
