var nameError = document.getElementById('name-error');
var companyError = document.getElementById('company-error');
var emailError = document.getElementById('email-error');
var submitError = document.getElementById('submit-error');


function validateName() {
    var name = document.getElementById('contact-name').value;

    if (name.length == 0) {
        nameError.innerHTML = 'Name is required';
        return false;
    }
    if (!name.match(/^[A-Za-z]*\s{1}[A-Za-z]*$/)) {
        nameError.innerHTML = 'Write full name';
        return false;
    }
    nameError.innerHTML = '<i class="fa-solid fa-check-circle"></i>';
    return true;

}

function validateCompany() {
    var company = document.getElementById('contact-company').value;

    if (company.length == 0) {
        companyError.innerHTML = 'Company is required';
        return false;
    }
    if (!company.match(/^[A-Za-z]$/)) {
        companyError.innerHTML = '<i class="fa-solid fa-check-circle"></i>';
        return true;
    }


}


function validateEmail() {
    var email = document.getElementById('contact-email').value;

    if (email.length == 0) {
        emailError.innerHTML = 'Email is required';
        return false;
    }
    if (!email.match(/^[A-Za-z\._\-[0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/)) {
        emailError.innerHTML = 'Email Invalid';
        return false;
    }
    emailError.innerHTML = '<i class="fa-solid fa-check-circle"></i>';
    return true;

}

function validateForm() {
    if (!validateName() || !validateCompany() || !validateEmail()) {
        submitError.style.display = 'block';
        submitError.innerHTML = 'Please fill the form to proceed';
        setTimeout(function () { submitError.style.display = 'none'; }, 3000);
        return false;
    }
}