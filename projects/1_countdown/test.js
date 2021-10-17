const getTimeLeft = (endDate) => {
    const today = new Date().getTime();
    const timeleft = endDate - today;
    return timeleft;
}

function convertMilis(timeLeft) {
    const calcDays = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
    const calcHours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const calcMinutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
    const calcSeconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

    document.querySelector('#days').innerText = calcDays;
    document.querySelector('#hours').innerText = calcHours;
    document.querySelector('#minutes').innerText = calcMinutes;
    document.querySelector('#seconds').innerText = calcSeconds;
}

const endDate = new Date(2021, 9, 29).getTime();

function displayMsg() {
    if (getTimeLeft(endDate) >= 0) {
        setInterval(() => {
            convertMilis(getTimeLeft(endDate));
        }, 1000)
    } else {
        alert('TIME UP !');
    }
}

displayMsg();