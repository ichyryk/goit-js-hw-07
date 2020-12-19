// // Напиши скрипт, который для каждого элемента массива ingredients создаст отдельный li,
// // после чего вставит все li за одну операцию в список ul.ingredients.
// // Для создания DOM - узлов используй document.createElement().

const ingredients = [
    'Картошка',
    'Грибы',
    'Чеснок',
    'Помидоры',
    'Зелень',
    'Приправы',
];

const listItemsRef = document.querySelector('#ingredients');

const createItem = item => {
    const itemRef = document.createElement('li');
    itemRef.textContent = item;
    return itemRef;
};

// const items = ingredients.map(item => createItem(item));
// console.log(items);

listItemsRef.append(...ingredients.map(item => createItem(item)));

