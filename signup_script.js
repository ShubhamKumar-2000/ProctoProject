document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('signup-form');
    const emailInput = document.getElementById('email');
    const passwordInput = document.getElementById('password');
    const phoneInput = document.getElementById('phone');
    const emailError = document.getElementById('email-error');
    const passwordError = document.getElementById('password-error');
    const phoneError = document.getElementById('phone-error');

    form.addEventListener('submit', function (e) {
        e.preventDefault();
        clearErrors();

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

        if (!emailRegex.test(emailInput.value)) {
            emailError.textContent = 'Invalid email address';
        }

        if (!passwordRegex.test(passwordInput.value)) {
            passwordError.textContent = 'Password must have at least 8 characters, including uppercase, lowercase, a number, and a special character';
        }

        if (!/^\d{10,}$/.test(phoneInput.value)) {
            phoneError.textContent = 'Phone number must be at least 10 digits and contain only numbers';
        }

        if (!emailError.textContent && !passwordError.textContent && !phoneError.textContent) {
            // Form is valid; you can proceed with submission here
            alert('Sign-up successful!');
        }
    });

    function clearErrors() {
        emailError.textContent = '';
        passwordError.textContent = '';
        phoneError.textContent = '';
    }
});
