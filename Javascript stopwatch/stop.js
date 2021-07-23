document.addEventListener('DOMContentLoaded', () => {

const timeLeftDisplay = document.querySelector('#time-left')
const startBtn = document.querySelector('#start-button')
let timeLeft = 1000

function countDown(){
    setInterval(function counter(){
        if (timeLeft <= 0){
            clearInterval(timeLeft = 0)
        }
        timeLeftDisplay.innerHTML = timeLeft;
        timeLeft-= 1;
    }, 1000);
}

startBtn.addEventListener('click', countDown)

})