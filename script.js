const timeCounter1 = document.getElementById('time-counter-1');
const timeCounter2 = document.getElementById('time-counter-2');

const light1 = document.getElementById('light1');
const light2 = document.getElementById('light2');
const light3 = document.getElementById('light3');

const startButton = document.getElementById('start-button');

let intialTime = 0;

function starting() {
    timeCounter1.textContent = intialTime;
    changingToRed();
    const intervalId = setInterval(() => {
        timeCounter1.textContent = intialTime;
        intialTime++;
        if (intialTime === 11) {
            changingToYellow();
        } else if (intialTime === 16) {
            changingToGreen();
        } else if (intialTime === 25) {
            intialTime = 0;
            changingToRed();
        }
    }, 1000);
}

function changingToRed() {
    light2.classList.remove('green');
    light3.classList.remove('green');
    light1.classList.remove('green');
    
    light1.classList.add('red');
    light2.classList.add('red');
    light3.classList.add('red');
}

function changingToYellow() {
    light1.classList.remove('red');
    light2.classList.remove('red');
    light3.classList.remove('red');

    light1.classList.add('yellow');
    light2.classList.add('yellow');
    light3.classList.add('yellow');
}

function changingToGreen() {
    light1.classList.remove('yellow');
    light2.classList.remove('yellow');
    light3.classList.remove('yellow');

    light1.classList.add('green');
    light2.classList.add('green');
    light3.classList.add('green');
}

startButton.addEventListener('click', starting)


















