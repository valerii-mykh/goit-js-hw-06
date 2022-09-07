const form = document.querySelector('.login-form');

form.addEventListener('submit', onFormSubmit);

function onFormSubmit(event) {
    event.preventDefault();
    const formElements = event.currentTarget.elements;
    const mail = formElements.email.name + " " + formElements.email.value;
    const password = formElements.password.name + " " + formElements.password.value;
    if (!formElements.password.value) {
        alert ('Всі поля повинні бути заповнені!')
    } else{
        console.log(mail);
        console.log(password);
        form.reset();
    };
};