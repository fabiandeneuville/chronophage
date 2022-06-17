const secondsHand = document.querySelector('.secondsHand');
const minutesHand = document.querySelector('.minutesHand');
const hoursHand = document.querySelector('.hoursHand')

function setDate(){
    const now = new Date();
    const seconds = now.getSeconds();
    const minutes = now.getMinutes();
    const hours = now.getHours();

    const secondsDegrees = ((seconds / 60) * 360);
    const minutesDegrees = ((minutes / 60) * 360);
    const hoursDegrees = ((hours / 12) * 360);

    secondsHand.style.transform = `translateX(-50%) rotate(${secondsDegrees}deg)`
    minutesHand.style.transform = `translateX(-50%) rotate(${minutesDegrees}deg)`
    hoursHand.style.transform = `translateX(-50%) rotate(${hoursDegrees}deg)`
}

setInterval(setDate, 1000);

setDate();