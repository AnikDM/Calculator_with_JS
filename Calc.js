let screen = document.getElementById('input');
buttons = document.querySelectorAll('button');
let screenValue = '';

for (item of buttons) {
    item.addEventListener('click', (e) => {
        buttonText = e.target.innerText;
        console.log('Button', buttonText);
        if (buttonText == 'X') {
            buttonText = '*';
            screen.value += buttonText;
            screenValue = screen.value;;
        } else if (buttonText == 'C')
            screen.value = " ";

        else if (buttonText == '=')
            screen.value = eval(screenValue);
        else if (buttonText == 'sqrt') {
            screenValue = Math.sqrt(screen.value);
            screen.value = '√' + screen.value;
        } else if (buttonText == 'x^2') {
            screenValue = Math.pow(screen.value, 2);
            screen.value += '^2';
        } else if (buttonText == 'x^3') {
            screenValue = Math.pow(screen.value, 3);
            screen.value += '^3';
        } else if (buttonText == 'log') {
            screenValue = Math.log(screen.value)
            screen.value = 'log' + screen.value;
        } else if (buttonText == '^') {
            screenValue = Math.pow(screen.value)
            screen.value = (screen.value / 10) + '^' + (screen.value % 10);
        } else {
            screen.value += buttonText;
            screenValue = screen.value;
        }
    })
}