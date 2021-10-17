/** Countdown - 18 Novembre
 *  Faire un compteur
 *  - Choisir Date
 *  - Lorsque finis afficher un message
 * 
 */

const toReach = new Date('11-11-2021 00:00:00');
const now = new Date();

const MILLISECONDS = 1,
    SECONDS = 1000 * MILLISECONDS,
    MINUTES = 60 * SECONDS,
    HOURS = 60 * MINUTES,
    DAYS = 24 * HOURS

const logElement = document.querySelector('#status')
const delta = toReach - now;
let timeLeft, timer;
if (delta > 0) {
    timeLeft = SplitTime(delta);
    timer = setInterval(Countdown, 10);
}
else {
    console.error('The date cannot be later than now');
    logElement.innerText = 'The date cannot be later than now';
    logElement.style.color = 'red';
}


function Countdown() {
    if (timeLeft.milliseconds !== 0) {
        timeLeft.milliseconds--;
    }
    else if (timeLeft.seconds !== 0) {
        timeLeft.seconds--;
        timeLeft.milliseconds = 99;
    }
    else if (timeLeft.minutes !== 0) {
        timeLeft.minutes--;
        timeLeft.seconds = 59;
        timeLeft.milliseconds = 99;
    }
    else if (timeLeft.hours !== 0) {
        timeLeft.hours--;
        timeLeft.minutes = 59;
        timeLeft.seconds = 59;
        timeLeft.milliseconds = 99;
    }
    else if (timeLeft.days !== 0) {
        timeLeft.days--;
        timeLeft.hours = 23;
        timeLeft.minutes = 59;
        timeLeft.seconds = 59;
        timeLeft.milliseconds = 99;
    }
    else {
        logElement.style.fontSize = '10vw';
        logElement.innerText = 'Time reached !';
        logElement.style.color = 'green';
        document.querySelector('.countdown').classList.remove('displayed');
        clearInterval(timer);
        console.log('Time reached !');
    }
    PrintTime(timeLeft)
}

function PrintTime(t) {
    document.querySelector('#days').innerText = t.days;
    document.querySelector('#hours').innerText = t.hours;
    document.querySelector('#minutes').innerText = t.minutes;
    document.querySelector('#seconds').innerText = t.seconds;
    document.querySelector('#millis').innerText = t.milliseconds;
}

function SplitTime(delta) {
    const d = Math.floor(delta / DAYS);
    const h = Math.floor((delta % DAYS) / HOURS);
    const m = Math.floor((delta % HOURS) / MINUTES);
    const s = Math.floor((delta % MINUTES) / SECONDS);
    const ms = Math.round((delta % SECONDS) / 10);
    return { days: d, hours: h, minutes: m, seconds: s, milliseconds: ms }
}