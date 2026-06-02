const timerStart = document.querySelector(".timerStart");
const timerStop = document.querySelector(".timerStop");
let timerT = document.querySelector(".timerT");

let timerId = null; 
let seconds = 0;    


timerStart.addEventListener("click", function() {

    if (timerId !== null) return; 

    timerId = setInterval(function() {
        seconds++;
        timerT.textContent = seconds;
        console.log("tick");
    }, 1000); 
});

// Функция остановки
timerStop.addEventListener("click", function() {
    clearInterval(timerId); 
    timerId = null;        
    console.log("stop");
});
