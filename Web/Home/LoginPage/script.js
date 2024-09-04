function togglePasswordVisibility(passwordFieldId, toggleIcon) {
    const passwordField = document.getElementById(passwordFieldId);
    if (passwordField.type === 'password') {
        passwordField.type = 'text';
        toggleIcon.innerHTML = '&#128065;'; // Eye icon (open)
    } else {
        passwordField.type = 'password';
        toggleIcon.innerHTML = '&#128065;'; // Eye icon (closed)
    }
}

document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the form from submitting the traditional way

    const email = document.getElementById('loginEmail').value;
    const password = document.getElementById('loginPassword').value;

    // Simple validation (could be expanded)
    if (email === '' || password === '') {
        alert('Please fill out all fields.');
    } else {
        alert(`Login Successful!\nEmail: ${email}`);
        // Perform the login operation here (e.g., send data to the server)
    }
});

document.getElementById('signupForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the form from submitting the traditional way

    const fullName = document.getElementById('fullName').value;
    const username = document.getElementById('username').value;
    const phone = document.getElementById('phone').value;
    const email = document.getElementById('signupEmail').value;
    const password = document.getElementById('signupPassword').value;

    // Simple validation (could be expanded)
    if (fullName === '' || username === '' || phone === '' || email === '' || password === '') {
        alert('Please fill out all fields.');
    } else {
        alert(`Signup Successful!\nFull Name: ${fullName}\nUsername: ${username}\nPhone: ${phone}\nEmail: ${email}`);
        // Perform the signup operation here (e.g., send data to the server)
    }
});
