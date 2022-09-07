const elements = {
    email: document.getElementsByClassName('email'),
    password: document.getElementsByClassName('password'),
}
elements.email.addEventListener('submit', buttonClick);
function buttonClick(event) {
    if (!email.value) {
        alert ('Всі поля повинні бути заповнені');
       
    };
};