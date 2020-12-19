const getInputValue = document.querySelector('#name-input');
const nameLabelRef = document.querySelector('#name-output');
const defaultName = nameLabelRef.textContent;

getInputValue.addEventListener('input', () => (nameLabelRef.textContent = event.target.value ? event.target.value : defaultName));

// Напиши скрипт который, при наборе текста в инпуте input#name - input(событие input), подставляет его текущее значение в span#name - output.
// Если инпут пустой, в спане должна отображаться строка 'незнакомец'.