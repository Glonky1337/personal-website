const messageInput = document.getElementById('message');
const counter = document.getElementById('character-counter');

messageInput.addEventListener('input', updateCounter);

function updateCounter() {
  const messageLength = messageInput.value.length;
  counter.textContent = messageLength + '/200';
}

updateCounter(); // Call initially to display counter on load

// Client-side form validation
document.addEventListener("DOMContentLoaded", function() {
    let contactForm = document.getElementById("contact-form");
    let formResponse = document.getElementById("form-response");
  
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
  
        // Create FormData object to send form data
        let formData = new FormData();
        formData.append("firstName", firstName);
        formData.append("lastName", lastName);
        formData.append("email", email);
        formData.append("phoneNumber", phoneNumber);
        formData.append("message", message);
  
        // Send form data via AJAX
        let xhr = new XMLHttpRequest();
        xhr.open("POST", "../php/contact-form.php", true);
        xhr.onreadystatechange = function() {
            if (xhr.readyState === XMLHttpRequest.DONE) {
                if (xhr.status === 200) {
                    formResponse.textContent = "Form submitted successfully!";
                    contactForm.reset(); // Reset form fields
                } else {
                    formResponse.textContent = "Failed to submit the form. Please try again later.";
                }
            }
        };
        xhr.send(formData);
    });
});

function validateEmail(email) {
    let regex = /^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/;
    return regex.test(email);
}