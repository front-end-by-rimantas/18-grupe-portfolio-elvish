function contactFormValidation() {

    const messForm = document.querySelector("#messageform");
    const name = document.querySelector("#name");
    const email = document.querySelector("#email");
    const subject = document.querySelector("#subject");
    const message = document.querySelector("#message");
    const emailFormat = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    const letters = /^[A-Za-z]+$/;
    // const alphanumeric = /^[0-9a-zA-Z]+$/;


    messForm.addEventListener('submit', (e) => {
        e.preventDefault();
        checkInputs();
    });

    function checkInputs (){
        // get values from inputs
        const nameValue = name.value.trim();
        const emailValue = email.value.trim();
        const subjectValue = subject.value.trim();
        const messageValue = message.value.trim();

        //NAME input validation

        if (nameValue === '') {
            //show error
            //add error class
            setErrorFor(name, 'Name cannot be blank');
        } else if (nameValue.length < 2 || !nameValue.match(letters)) {
            setErrorFor(name, "Please enter valid name");
        } else {
            //add success class
            setSuccessFor(name);
        }
        console.log(nameValue);
        //EMAIL input validation

        if (emailValue === '' ) {
            setErrorFor(email, 'Email cannot be blank');
        } else if (email != emailFormat) {
            setErrorFor(email, "Please enter valid email");
        } else {
            setSuccessFor(email);
        }

        //SUBJECT input validation

        if (subjectValue === '' ) {
            setErrorFor(subject, 'Subject cannot be blank');
        } else if (subjectValue.length < 5 || !subjectValue.match(letters)) {
            setErrorFor(subject, "Please enter valid subject");
        } else {
            setSuccessFor(subject);
        }

         //MEASSAGE input validation

         if (messageValue === '' ) {
            setErrorFor(message, 'Message cannot be blank');
        } else if (messageValue.length < 10 || messageValue.length > 300 || !messageValue.match(letters)) {
            setErrorFor(message, "Please enter valid message");
        } else {
            setSuccessFor(message);
        }

    }
        
        
    function setErrorFor(input, message) {
        const formRow = input.parentElement; //.form-row
        const small = formRow.querySelector('small');

        //add error message inside small text
        small.innerText = message;

        //add error class
        formRow.className = 'form-row error';

    }

    function setSuccessFor(input) {
        const formRow = input.parentElement;
        formRow.className = 'form-row success';
    }

    function setErrorFor(textarea, message) {
        const formRow = textarea.parentElement;
        const small = formRow.querySelector('small');

        small.innerText = message;
        formRow.className = 'form-row error';

    }

    function setSuccessFor(textarea) {
        const formRow = textarea.parentElement;
        formRow.className = 'form-row success';
    }
    }

export { contactFormValidation };
