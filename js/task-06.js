const elements = {
    input: document.getElementById('validation-input'),
   }
   elements.input.addEventListener('input', onInputChange);
function onInputChange(even) {
       if (even.currentTarget.value.length > 6) {
        elements.input.classList.replace('valid', 'invalid');
        
    } else{elements.input.classList.add('valid');
        elements.input.classList.replace('invalid', 'valid');} 
}