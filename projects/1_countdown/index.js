/** Countdown - 18 Novembre
 *  Faire un compteur
 *  - Choisir Date
 *  - Lorsque finis afficher un message
 * 
 */

const toReach = new Date('11-11-2021 12:00:00');
const now = new Date();

const HOURS = 24, MINUTES = 60, SECONDS = 60, MILLISECONDS = 1000;
const logElement = document.querySelector('#status')
const delta = toReach - now;
let timeLeft, timer;
if(delta > 0){
    timeLeft = SplitTime(delta);
    timer = setInterval(Countdown, 10);
}
else{
    console.error('The date cannot be later than now');
    logElement.innerText = 'The date cannot be later than now';
    logElement.style.color = 'red';
}


function Countdown(){
    if(timeLeft.milliseconds !== 0){
        timeLeft.milliseconds--;
    }
    else if(timeLeft.seconds !== 0){
        timeLeft.seconds--;
        timeLeft.milliseconds = 99;
    }
    else if(timeLeft.minutes !== 0){
        timeLeft.minutes--;
        timeLeft.seconds = SECONDS-1;
        timeLeft.milliseconds = 99;
    }
    else if(timeLeft.hours !== 0){
        timeLeft.hours--;
        timeLeft.minutes = MINUTES-1;
        timeLeft.seconds = SECONDS-1;
        timeLeft.milliseconds =  99;
    }
    else if(timeLeft.days !== 0){
        timeLeft.days--;
        timeLeft.hours = HOURS-1;
        timeLeft.minutes = MINUTES-1;
        timeLeft.seconds = SECONDS-1;
        timeLeft.milliseconds =  99;
    }
    else{
        logElement.style.fontSize = '10vw';
        logElement.innerText = 'Time reached !';
        logElement.style.color = 'green';
        document.querySelector('.countdown').classList.remove('displayed');
        clearInterval(timer);
        console.log('Time reached !');
    }

    PrintTime(timeLeft)
}

function PrintTime(t){
    document.querySelector('#days').innerText = t.days;
    document.querySelector('#hours').innerText = t.hours;
    document.querySelector('#minutes').innerText = t.minutes;
    document.querySelector('#seconds').innerText = t.seconds;
    document.querySelector('#millis').innerText = t.milliseconds;
}

function SplitTime(delta) {
    let d = Math.floor(delta / HOURS / MINUTES / SECONDS / MILLISECONDS);
    delta -= d * HOURS * MINUTES * SECONDS * MILLISECONDS;

    let h = Math.floor(delta / MINUTES / SECONDS / MILLISECONDS);
    delta -= h * MINUTES * SECONDS * MILLISECONDS;

    let m = Math.floor(delta / SECONDS / MILLISECONDS);
    delta -= m * SECONDS * MILLISECONDS;

    let s = Math.floor(delta / MILLISECONDS);
    delta -= s * MILLISECONDS;

    let ms = Math.round(delta / 10);

    return { days: d, hours: h, minutes: m, seconds: s, milliseconds: ms }
}






