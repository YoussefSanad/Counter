//Set initial count
let count = 0;

const value = document.querySelector('#value');
const buttons = document.querySelectorAll('.btn')

buttons.forEach(button => {
    button.addEventListener('click', (e) => {
        const classes = e.currentTarget.classList;
        performButtonAction(classes);
        value.textContent = count.toString();
        value.style.color = getValueColor();
    });
})

const performButtonAction = (classes) => {
    if (classes.contains('decrease')) {
        count--;
    } else if (classes.contains('increase')) {
        count++;
    } else {
        count = 0;
    }
}

const getValueColor = () => {
    return count > 0 ? 'green' : (count < 0 ? 'red' : '#222');
}