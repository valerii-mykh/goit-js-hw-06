const counter = {
    value: 0,
    increment() {
        this.value +=1;
    },
    decrement() {
        this.value -= 1;
    },
};
const decrementBtn = document.querySelector("[data-action='decrement']");
const incrementBtn = document.querySelector("[data-action='increment']");
const valueEl = document.getElementById('value');

decrementBtn.addEventListener('click', () => {
    counter.decrement();
    valueEl.textContent = counter.value;
});
incrementBtn.addEventListener('click', () => {
    counter.increment();
    valueEl.textContent = counter.value;
});
