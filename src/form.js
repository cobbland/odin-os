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

// On the following validity functions, be sure to check data type, right?
function isEmailValid(email) {
    console.log(email.value)
    // Check if email is valid
    // Return true valid
    // Otherwise return false
    if (email.value === '') {
        addErrorMessage('You must enter an email.')
        return false;
    }
}

function isCountryValid(country) {
    if (country.value === 'canada' ||
        country.value === 'mexico' ||
        country.value === 'united-states'
    ) {
        return true;
    } else if (country.value === 'blank') {
        addErrorMessage('You must choose a country.')
        return false;
    }
}

function isPostalCodeValid(country, postalCode) {
    // Check if valid based on country
    // Return true valid
    // Otherwise return false
    if (postalCode.value === '') {
        addErrorMessage('You must enter a postal code.')
        return false;
    }
}

function isPasswordValid(password) {
    // Check if valid
    // Return true valid
    // Otherwise return false
    if (password.value === '') {
        addErrorMessage('You must enter a password.')
        return false;
    }
}

function isConfirmPasswordValid(password, confirmPassword) {
    // Check if valid and matching password
    // Return true valid
    // Otherwise return false
    if (confirmPassword.value === '') {
        addErrorMessage('You must confirm your password.')
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

// event listener that checks all fields on submit
form.addEventListener('submit', (event) => {
    event.preventDefault();
    const formStatus = isFormValid();
    if (formStatus) {
        clearErrorMessages();
        errorMessages.classList.add('thumbs-up');
        addErrorMessage('Thumbs up!');
        form.reset();
    } else {
        clearErrorMessages();
        isFormValid()
    }
})
