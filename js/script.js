const display = document.querySelector('#display');
const buttons = document.querySelectorAll('button');

buttons.forEach((item)=> {
    item.onclick = () =>  {
        if (item.id == 'clear') {
            display.innerText = '';
        } else if (item.id == 'backspace') {
            let string = display.innerText.toString();
            display.innerText = string.substr(0, string.length - 1);
        } else if (display.innerText != '' && item.id == 'equal') {
            display.innerText = eval(display.innerText);
        } else if (display.innerText == '' && item.id == 'equal') {
            display.innerText = 'Empty';
            setTimeout(() => (display.innerText = ''), 2000);
        } else {
            display.innerText += item.id;
        }
    }
})

const tematoggleBtn = document.querySelector('.tema-toggle');
const calculadora = document.querySelector('.calculadora');
const toggleIcon = document.querySelector('.toggle-icon');
let isDark = true;
tematoggleBtn.onclick = () => {
    calculadora.classList.toggle('dark');
    tematoggleBtn.classList.toggle('active');
    isDark = !isDark;
}