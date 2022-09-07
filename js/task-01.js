const categoriesEl = document.querySelectorAll('h2');
console.log(`Number of categories: ${categoriesEl.length}`);
const categoryEl = document.querySelectorAll('.item');

categoryEl.forEach(category => {
    const titleCategory = category.querySelector('h2');
    const qualityItem = category.querySelectorAll('li');

console.log(`Category: ${titleCategory.textContent} \nNumber of Elements: ${qualityItem.length}`);
});

