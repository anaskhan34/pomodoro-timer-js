
var timerDisplay = document.getElementById("timer")
var timerLeft = 25 * 60;
var timer;

function updateDisplay(){
    var minutes = Math.floor(timerLeft/60)
    var seconds = Math.floor(timerLeft%60)
    timerDisplay.textContent = `${minutes.toString().padStart(2,"0")}:${seconds.toString().padStart(2,"0")}`
    
}
// updateDisplay(console.log(timerDisplay))


function startTimer(){
    if(!timer){
        timer = setInterval(function(){
            if(timerLeft>0){
                timerLeft--
                updateDisplay()
            }else{
                timer = clearInterval(timer)
                timer = null
            }
        },1000)
    }
}


function stopTimer(){
    timer = clearInterval(timer)
    updateDisplay()
    
}

function resetTimer(){
    stopTimer()
    timerLeft = 25 * 60
    updateDisplay()
    
}

function shortBreak(){
    stopTimer()
    timerLeft = 5 * 60
    updateDisplay()
    
}

function longBreak(){
    stopTimer()
    timerLeft = 15 * 60
    updateDisplay()
}

function increaseTime(){
    timerLeft += 60
    updateDisplay()
    
}

function decreaseTime(){
    if(timerLeft === 0){
        timerLeft = 0
    }
    else{
    timerLeft -= 60
    updateDisplay()
    }
}

