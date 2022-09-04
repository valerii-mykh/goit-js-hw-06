const counter = {
    value: 0,
    increment() {
        this.value +=1;
    },
    decrement() {
        this.value -= 1;
    },
};
const counters = document.getElementById('counter');

const decrementBtn = counters.getAttribute("decrement");
const incrementBtn = counters.getAttribute("increment");
const valueEl = document.getElementById('value');

decrementBtn.addEventListener('click', () => {
    counter.decrement();
    valueEl.textContent = counter.value;
});
incrementBtn.addEventListener('click', () => {
    counter.increment();
    valueEl.textContent = counter.value;
});
