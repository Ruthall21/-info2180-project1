
/* Add your JavaScript to this file */

document.addEventListener('DOMContentLoaded', function () {

    const form = document.querySelector('.newsletter form');
    const emailInput = document.querySelector('#email');
    const messageDiv = document.querySelector('.newsletter .message');

    form.addEventListener('submit', function (event) {

        event.preventDefault();

        const email = emailInput.value.trim();

        // Check if the email field is empty or invalid
        if (!email || !emailInput.checkValidity()) {

            messageDiv.textContent = 'Please enter a valid email address.';
            messageDiv.classList.remove('success');
            messageDiv.classList.add('error');

            emailInput.focus();

        } else {

            // Display success message
            messageDiv.textContent = `Thank you! Your email address ${email} has been added to our mailing list!`;

            messageDiv.classList.remove('error');
            messageDiv.classList.add('success');

            // Clear the email input
            emailInput.value = '';
        }

    });

});
