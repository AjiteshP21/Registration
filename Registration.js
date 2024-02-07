document.addEventListener('DOMContentLoaded', function () {
    const form = document.querySelector('form');
    form.addEventListener('submit', function (event) {
        event.preventDefault();
        const usernameInput = document.getElementById('username');
        const emailInput = document.getElementById('email');
        const passwordInput = document.getElementById('password');

        const username = usernameInput.value.trim();
        const email = emailInput.value.trim();
        const password = passwordInput.value.trim();

        if (!isValidUsername(username)) {
            alert('Please enter a valid username.');
            return;
        }

        if (!isValidEmail(email)) {
            alert('Please enter a valid email address.');
            return;
        }

        if (!isValidPassword(password)) {
            alert('Please enter a valid password.');
            return;
        }

        form.submit();
    });
    function isValidUsername(username) {
        return /^[a-zA-Z0-9]+$/.test(username);
    }
    function isValidEmail(email) {
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    }
    function isValidPassword(password) {
        return password.length >= 6;
    }
}