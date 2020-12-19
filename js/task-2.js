// Напиши скрипт, который для каждого элемента массива ingredients создаст отдельный li,
// после чего вставит все li за одну операцию в список ul.ingredients.
// Для создания DOM - узлов используй document.createElement().

const ingredients = [
    'Картошка',
    'Грибы',
    'Чеснок',
    'Помидоры',
    'Зелень',
    'Приправы',
];


const createItem = item => {
    const itemRef = document.createElement('li');
    itemRef.textContent = item;
    return itemRef;
};

const items = ingredients.map((item) => createItem(item));

const listItemsRef = document.querySelector('#ingredients');
listItemsRef.append(...items);

