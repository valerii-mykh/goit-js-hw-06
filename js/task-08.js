const elements = {
    email: document.querySelector('email'),
    password: document.querySelector('password'),
}
elements.email.addEventListener ('submit', buttonClick);
function buttonClick(event) {
    if (!email.value) {
        alert ('Всі поля повинні бути заповнені');
       
    };
};