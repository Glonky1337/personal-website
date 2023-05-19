document.addEventListener("DOMContentLoaded", function() {
    let contactForm = document.getElementById("contact-form");
    contactForm.addEventListener("submit", function(event) {
        event.preventDefault(); // Prevent form submission

        // Client-side validation
        let firstNameInput = document.getElementById("first-name");
        let lastNameInput = document.getElementById("last-name");
        let emailInput = document.getElementById("email");
        let phoneNumberInput = document.getElementById("phone-number");
        let messageInput = document.getElementById("message");

        let firstName = firstNameInput.value.trim();
        let lastName = lastNameInput.value.trim();
        let email = emailInput.value.trim();
        let phoneNumber = phoneNumberInput.value.trim();
        let message = messageInput.value.trim();

        if (firstName === "") {
            firstNameInput.focus()
            return false;
        }
        if (lastName === "") {
            lastNameInput.focus();
            return false;
        }
        if (!validateEmail(email)) {
            emailInput.focus();
            return false;
        }
        if (phoneNumber === "") {
            phoneNumberInput.focus();
            return false;
        }
        if (message === "") {
            messageInput.focus();
            return false;
        }
        // Submit if all fields valid
        this.submit();
    });
});

function validateEmail(email) {
    let regex = /^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/;
    return regex.test(email);
}