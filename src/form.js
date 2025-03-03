import formHTML from "./form.html";

const formContainer = document.querySelector('.form');
formContainer.innerHTML = formHTML;

// get all elements as constants
const form = document.querySelector('form');
const email = document.getElementById('email');
const country = document.getElementById('country');
const postalCode = document.getElementById('postal-code');
const password = document.getElementById('password');
const confirmPassword = document.getElementById('confirm-password');
// const submitButton = document.getElementsByClassName('submit-button')[0];
const errorMessages = document.getElementsByClassName('error-message')[0];

// validity functions
function isFormValid() {
    const emailValid = isEmailValid(email);
    const countryValid = isCountryValid(country);
    const postalCodeValid = isPostalCodeValid(country, postalCode);
    const passwordValid = isPasswordValid(password);
    const confirmPasswordValid = isConfirmPasswordValid(password, confirmPassword);
    if (
        emailValid &&
        countryValid &&
        postalCodeValid &&
        passwordValid &&
        confirmPasswordValid
    ) {
        return true;
    } else {
        return false;
    }
}

function makeInvalid(element) {
    element.classList.remove('valid');
    element.classList.add('invalid');
}

function makeValid(element) {
    element.classList.remove('invalid');
    element.classList.add('valid');
}

// On the following validity functions, be sure to check data type, right?
function isEmailValid(email) {
    const emailRegExp = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    if (email.value.length !== 0 &&
        emailRegExp.test(email.value)
    ) {
        makeValid(email);
        return true;
    } else {
        addErrorMessage('You must enter a valid email. Example: "name@domain.com".');
        makeInvalid(email);
        return false;
    }
}

function isCountryValid(country) {
    console.log(country)
    if (country.value === 'canada' ||
        country.value === 'mexico' ||
        country.value === 'united-states'
    ) {
        makeValid(country);
        return true;
    } else {
        addErrorMessage('You must choose a listed country: Canada, Mexico, or the United States.');
        makeInvalid(country);
        return false;
    }
}

function isPostalCodeValid(country, postalCode) {
    const canadaCodeRegExp = /^[a-zA-Z0-9]{3} ?[a-zA-Z0-9]{3}$/;
    const mexicoCodeRegExp = /^[0-9]{5}$/;
    const usCodeRegExp = /^[0-9]{5}((-| )?[0-9]{4})?$/;
    if (
        country.value === 'canada' &&
        postalCode.value.length !== 0 &&
        canadaCodeRegExp.test(postalCode.value)
    ) {
            makeValid(postalCode);
            return true;
    } else if (
        country.value === 'mexico' &&
        postalCode.value.length !== 0 &&
        mexicoCodeRegExp.test(postalCode.value)
    ) {
        makeValid(postalCode);
        return true;
    } else if (
        country.value === 'united-states' &&
        postalCode.value.length !== 0 &&
        usCodeRegExp.test(postalCode.value)
    ) {
        makeValid(postalCode);
        return true;
    } else {
        addErrorMessage('You must enter a valid postal code for your selected country.');
        makeInvalid(postalCode);
        return false;
    }
}

function isPasswordValid(password) {
    const passwordRegExp = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@.#$!%*?&])[A-Za-z\d@.#$!%*?&]{8,15}$/;
    if (
        password.value.length !== 0 &&
        passwordRegExp.test(password.value)
    ) {
        makeValid(password);
        return true;
    } else {
        addErrorMessage('You must enter a valid password. It must: be at least 8 characters long and contain at least one upper case letter, lower case letter, number, and symbol.');
        makeInvalid(password);
        return false;
    }
}

function isConfirmPasswordValid(password, confirmPassword) {
    if (
        confirmPassword.value === password.value &&
        password.classList.contains('valid')
    ) {
        makeValid(confirmPassword);
        return true;
    } else {
        addErrorMessage('You must confirm your password by reentering the same password as above.');
        makeInvalid(confirmPassword);
        return false;
    }
}

// error message functions
function addErrorMessage(message) {
    const newMessage = document.createElement('p');
    newMessage.innerText = `${message}`;
    errorMessages.appendChild(newMessage);
}

function clearErrorMessages() {
    while (errorMessages.firstChild) {
        errorMessages.removeChild(errorMessages.lastChild);
    }
}

// event listeners for each field that checks validity of input (either live or once unfocused)
// Should call addErrorMessage to give user feedback
email.addEventListener('input', () => {
    clearErrorMessages();
    isEmailValid(email);
})

country.addEventListener('input', () => {
    clearErrorMessages();
    isCountryValid(country);
})

postalCode.addEventListener('input', () => {
    clearErrorMessages();
    isPostalCodeValid(country, postalCode);
}) // error!

password.addEventListener('input', () => {
    clearErrorMessages();
    isPasswordValid(password);
})

confirmPassword.addEventListener('input', () => {
    clearErrorMessages();
    isConfirmPasswordValid(password, confirmPassword);
}) // error!

// event listener that checks all fields on submit
form.addEventListener('submit', (event) => {
    event.preventDefault();
    clearErrorMessages();
    const formStatus = isFormValid();
    if (formStatus) {
        errorMessages.classList.add('thumbs-up');
        addErrorMessage('Thumbs up!');
    } else {
        errorMessages.classList.remove('thumbs-up')
    }
})
