const secondsHand = document.querySelector('.secondsHand');
const minutesHand = document.querySelector('.minutesHand');
const hoursHand = document.querySelector('.hoursHand');
const dayScreen = document.querySelector('.dayScreen');
const dayName = document.querySelector('.dayName');

function setDate(){
    const now = new Date();
    const seconds = now.getSeconds();
    const minutes = now.getMinutes();
    const hours = now.getHours();

    const secondsDegrees = ((seconds / 60) * 360);
    const minutesDegrees = ((minutes / 60) * 360);
    const hoursDegrees = ((hours / 12) * 360);

    secondsHand.style.transform = `translateX(-50%) rotate(${secondsDegrees}deg)`;
    minutesHand.style.transform = `translateX(-50%) rotate(${minutesDegrees}deg)`;
    hoursHand.style.transform = `translateX(-50%) rotate(${hoursDegrees}deg)`;

    const dayStrOptions = { weekday: 'long'}
    const dayStr = now.toLocaleDateString('fr-FR', dayStrOptions);
    dayName.textContent = dayStr;

    const dayNumOptions = { day: 'numeric'}
    const dayNum = now.toLocaleDateString('fr-FR', dayNumOptions);
    dayScreen.textContent = dayNum
}

setInterval(setDate, 1000);

setDate();

const now = new Date();
const options = { weekday: 'short', month: 'short', day: 'numeric'}

const date = new Date();

