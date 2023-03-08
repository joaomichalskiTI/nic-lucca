let date1 = new Date('2022-11-24');
let date2 = new Date();
let diffTime = Math.abs(date2.getTime() - date1.getTime());
let diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
console.log(diffDays);

function dias() {
    document.getElementById('dias').innerHTML = diffDays;

}
const daysEl = document.getElementById('days');
const hoursEl = document.getElementById('hours');
const minsEl = document.getElementById('mins');
const secondsEl = document.getElementById('seconds');

const newYears = new Date("November 26, 2023");
const timestamp = newYears.getTime();

function countdown(){
    const newYearsDate = new Date(newYears);
    const currentDate = new Date();

    const totalSeconds = (newYearsDate - currentDate) / 1000;

    const days = Math.floor(totalSeconds / 3600 / 24);
    const hours = Math.floor(totalSeconds / 3600) % 24;
    const mins = Math.floor(totalSeconds / 60) % 60;
    const seconds = Math.floor(totalSeconds) % 60;

    daysEl.innerHTML = days;
    hoursEl.innerHTML = formatTime(hours);
    minsEl.innerHTML = formatTime(mins);
    secondsEl.innerHTML = formatTime(seconds);
    console.log('countdown')

    
}
function formatTime(time){
    return time < 10 ? `0${time}` : time;
}
    
dias()
countdown()
setInterval(countdown, 1000);