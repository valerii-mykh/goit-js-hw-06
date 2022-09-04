const elements = {
    input: document.getElementById('name-input'),
    nameLabel: document.getElementById('name-output'),
}
elements.input.addEventListener('input', onInputChange);
function onInputChange(even) {
    elements.nameLabel.textContent = even.currentTarget.value;
    if (even.currentTarget.value === '') {
       elements.nameLabel.textContent = 'Anonymous';
    }
}
