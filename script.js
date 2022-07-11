const togglePassword = document.querySelector('.password_show');
const password = document.getElementById("password_form");

togglePassword.addEventListener("click", function () {
    const type = password.getAttribute('type') === 'password' ? 'text' : 'password';
    password.setAttribute("type", type);
    
    this.classList.toggle("bi-eye-slash");
});

// prevent form submit
const form = document.querySelector("form");
form.addEventListener('submit', function (e) {
    e.preventDefault();
});