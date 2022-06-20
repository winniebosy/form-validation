const form = document.forms['sign-up'];
const email = document.querySelector('#email');
const password = document.querySelector('#password');

const hint = document.querySelector(".hint");
const pwdHint = document.querySelector(".pwd-hint");
const submitBtn = form.querySelector('#submit-btn');



//validating emails

function validateEmail(email) {
    const re = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    return re.test(String(email).toLowerCase());

}
email.addEventListener("input", function(e) {
    //e.preventDefault();
    const mail = email.value;
    if (validateEmail(mail)) {
        hint.style.display = 'none';
        email.setAttribute('aria-required', false);
        email.setAttribute('aria-invalid', false);
    } else {
        hint.style.display = 'block';
        email.setAttribute('aria-required', true);
        email.setAttribute('aria-invalid', true)
    }
});

//validating passwords
password.addEventListener('input', function(e) {
    const userPswd = password.value;
    if (userPswd.length < 6) {
        pwdHint.style.display = "block";
        pwdHint.focus();
    } else {
        pwdHint.style.display = "none";
    }


});

form.addEventListener('submit', (e) => {
    e.preventDefault();
    alert('Thank you. Signup was successful');

});