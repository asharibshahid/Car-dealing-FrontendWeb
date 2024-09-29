// Function to validate the contact form
function validateForm(event) {
    event.preventDefault(); // Prevent form submission for validation

    // Get form fields
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const car = document.getElementById('car').value;
    const message = document.getElementById('message').value;

    // Simple validation logic
    if (name.trim() === "") {
        alert("Please enter your name.");
        return false;
    }

    if (email.trim() === "") {
        alert("Please enter your email.");
        return false;
    }

    if (!validateEmail(email)) {
        alert("Please enter a valid email address.");
        return false;
    }

    if (car === "") {
        alert("Please select a car.");
        return false;
    }

    if (message.trim() === "") {
        alert("Please enter your message.");
        return false;
    }

    // If all validations pass
    alert("Thank you for your inquiry! We will get back to you soon.");
    document.querySelector('form').reset(); // Reset the form after successful validation
}

// Function to validate email format using regular expression
function validateEmail(email) {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailPattern.test(email);
}

// Attach the validateForm function to the form's submit button
document.querySelector('form').addEventListener('submit', validateForm);
