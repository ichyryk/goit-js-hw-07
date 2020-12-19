let counterValue = 0;

const btnIncrementRef = document.querySelector('#counter button[data-action="increment"]');
const btnDecrementRef = document.querySelector('#counter button[data-action="decrement"]');
const counterTag = document.querySelector('span#value');

const decrement = () => { 
    counterTag.textContent -= 1;
}

const increment = () => {
    counterTag.textContent =(counterValue +=1);
}

btnIncrementRef.addEventListener("click", increment);

btnDecrementRef.addEventListener("click", decrement);

// Счетчик состоит из спана и кнопок, которые должны увеличивать и уменьшать значение счетчика на 1.

// Создай переменную counterValue в которой будет хранится текущее значение счетчика.
// Создай функции increment и decrement для увеличения и уменьшения значения счетчика
// Добавь слушатели кликов на кнопки, вызовы функций и обновление интерфейса