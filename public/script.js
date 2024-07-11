document.addEventListener("DOMContentLoaded", () => {
    const passwordInput = document.getElementById('password');
    const togglePassword = document.getElementById('togglePassword');
    const eyeClose = document.getElementById('eyeClose');
    const eyeOpen = document.getElementById('eyeOpen');
    const message = document.getElementById('message');
    const strengthText = document.getElementById('strength');

    togglePassword.addEventListener('click', () => {
        if (passwordInput.type === "password") {
            passwordInput.type = "text";
            eyeClose.style.display = "none";
            eyeOpen.style.display = "block";
        } else {
            passwordInput.type = "password";
            eyeClose.style.display = "block";
            eyeOpen.style.display = "none";
        }
    });

    passwordInput.addEventListener('input', () => {
        const value = passwordInput.value;
        let strength = 'Weak';
        if (value.length >= 6 && /[A-Z]/.test(value) && /[0-9]/.test(value)) {
            strength = 'Strong';
        } else if (value.length >= 6) {
            strength = 'Medium';
        }
        strengthText.textContent = strength;
        message.style.display = value.length ? 'block' : 'none';
    });
});
