const form = document.getElementById('shopping-form');
const input = document.getElementById('item');
const list = document.getElementById('shopping-list');

form.addEventListener('submit', (event) => {
    event.preventDefault();
    if (input.value.trim() === '') {
        alert('Voer een item in.');
    } else {
        const item = document.createElement('li');
        item.innerText = input.value;
        const deleteButton = document.createElement('button');
        deleteButton.innerText = 'X';
        deleteButton.addEventListener('click', () => {
            list.removeChild(item);
        });
        item.appendChild(deleteButton);
        list.appendChild(item);
        input.value = '';
    }
});