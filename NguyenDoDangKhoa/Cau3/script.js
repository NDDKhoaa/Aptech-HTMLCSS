function switchForm(formId) {
    const container = document.querySelector('.container');
    if (formId === 'signupForm') {
        container.classList.add('right-panel-active');
    } else {
        container.classList.remove('right-panel-active');
    }
}

function validateForm(form) {
    const inputs = form.querySelectorAll('input');
    let isValid = true;

    inputs.forEach(input => {
        const error = input.nextElementSibling;
        if (!input.value) {
            error.style.display = 'block';
            isValid = false;
        } else {
            error.style.display = 'none';
        }

        if (input.type === 'email' && !validateEmail(input.value)) {
            error.style.display = 'block';
            isValid = false;
        }

        if (input.type === 'password' && input.value.length < 6) {
            error.style.display = 'block';
            isValid = false;
        }
    });

    return isValid;
}

function validateEmail(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

document.getElementById('signupForm').addEventListener('submit', function (e) {
    e.preventDefault();
    if (validateForm(this)) {
        console.log('Sign up successful');
    }
});

document.getElementById('signinForm').addEventListener('submit', function (e) {
    e.preventDefault();
    if (validateForm(this)) {
        console.log('Sign in successful');
    }
});