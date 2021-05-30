var hours = 0;
var minutes = 0;
var seconds = 0;

var time = 1000;

var chronometer;

function start(){
    // To execute the instruction many times
    chronometer = setInterval(() => {
        format();
    }, time);
    if(true){
        document.querySelector("#start").innerHTML = '<img src="../icons/pause-fill.svg">';

        document.getElementById("start").onclick = () => {
            clearInterval(chronometer);
            document.getElementById("start").innerHTML = '<img src="../icons/play-fill.svg">';
            
            document.getElementById("start").onclick = () => {
                return start();
            }
        }
    }
}

function restart(){
    // To clear chronometer
    clearInterval(chronometer);

    hours = 0;
    minutes = 0;
    seconds = 0;

    document.getElementById("display").innerText = "00:00:00";

    document.querySelector(".punctuation").innerHTML = ""

    document.getElementById("start").innerHTML = `<img src="../icons/play-fill.svg">`
    document.getElementById("start").onclick = () => {
        return start();
    }
}

function format(){
    seconds ++;

    if(seconds == 59){
        seconds = 0;
        minutes ++;

        if(minutes == 59){
            minutes = 0;
            hours ++;
        }
    }
    var format_display = (hours < 10 ? "0" + hours : hours) + ":" + (minutes < 10 ? "0" + minutes : minutes) + ":" + (seconds < 10 ? "0" + seconds : seconds);
    document.getElementById("display").innerText = format_display;

    document.querySelector("#bestTime").onclick = () => {
        return bestTime(format_display);
    }

    return format_display;
}

function bestTime(item){
    if(item === undefined){
        document.querySelector(".punctuation").innerHTML += `<p>00:00:00</p>`
    }else{
        document.querySelector(".punctuation").innerHTML += `<p>${item}</p>`
    }
}