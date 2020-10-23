function isValidBlogItem(item, showErrors = false) {

    let errors = [];

    if (item.title === '') {
        if (showErrors === true) {
            console.error('ERROR: paslauga turi buti objektas.');
        }
        return false;
    }

    if (typeof item.title !== 'string') {
        errors.push('ERROR: paslaugos pavadinimas turi buti tekstinis.');
    } else {
        if (item.title === '') {
            errors.push('ERROR: paslaugos pavadinimas negali buti tuscias.');
        }
        if (item.title.length > 50) {
            errors.push('ERROR: paslaugos pavadinimas yra per ilgas.');
        }
    }

    if (typeof item.description !== 'string') {
    errors.push('ERROR: paslaugos aprasymas turi buti tekstinis.');
    } else {
        if (item.description === '') {
            errors.push('ERROR: paslaugos aprasymas negali buti tuscias.');
        }
        if (item.description.length > 500) {
            errors.push('ERROR: paslaugos aprasymas yra per ilgas.');
        }
    }

    if (typeof item.link !== 'string') {
        errors.push('ERROR: paslaugos nuoroda turi buti tekstine.');
    } else {
        if (item.link === '') {
            errors.push('ERROR: paslaugos nuoroda negali buti tuscia.');
        }
        if (item.link.length > 30) {
            errors.push('ERROR: paslaugos nuoroda yra per ilga.');
        }
    }

    if (typeof item.media !== 'string') {
        errors.push('ERROR: paslaugos nuotraukos pavadinimas turi buti tekstinis.');
    }
    //  else {
        // if (item.image.length < 20) {
        //     errors.push('ERROR: paslaugos nuotraukos pavadinimas negali buti per trumpas.');
        // }
        // if (item.image.length > 50) {
        //     errors.push('ERROR: paslaugos nuotraukos pavadinimas yra per ilgas.');
        // }
    // }

    if (errors.length > 0) {
        if (showErrors === true) {
            for (let i = 0; i < errors.length; i++) {
                console.error(errors[i]);
            }
        }
        return false;
    }

    return true;
}

export { isValidBlogItem }