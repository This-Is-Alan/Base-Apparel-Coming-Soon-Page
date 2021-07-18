const emailButton = document.getElementById('email-button');
const emailContainer = document.querySelector('.email__container');
const errorIcon = document.querySelector('.error-icon');
const errorMessage = document.querySelector('.email__error');

function showErrors(){
    emailContainer.classList.toggle('email__container--active');
    errorIcon.classList.toggle('error-icon--active');
    errorMessage.classList.toggle('email__error--active');
}

emailButton.addEventListener('click', showErrors);