/*
Напиши скрипт который, при наборе текста в инпуте input#name-input (событие input), 
подставляет его текущее значение в span#name-output. Если инпут пустой, в спане должна отображаться строка 'незнакомец'.

<input type="text" placeholder="Ваше имя?" id="name-input" />
<h1>Привет, <span id="name-output">незнакомец</span>!</h1>
*/


const inputName = document.getElementById('name-input');
const replaceName = document.getElementById('name-output');

inputName.addEventListener('input', event => {

    replaceName.textContent = event.target.value === "" ? "незнакомец" : event.target.value
});