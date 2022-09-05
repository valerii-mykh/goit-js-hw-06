const elements = {
    input: document.getElementById('font-size-control'),
    text: document.getElementById('text'),
   }
   elements.input.addEventListener("input", handleInputRange);
   function handleInputRange(event) {
     text.style.fontSize = event.currentTarget.value + "px";
   }