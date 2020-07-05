const secondHand = document.querySelector('.second-hand')
const minHand = document.querySelector('.min-hand')
const hourHand = document.querySelector('.hour-hand')

function setDate() {
  const now = new Date();
  
  const seconds =  now.getSeconds();
  const secondsDegrees = ((seconds / 60) * 360) + 90;
  if (secondsDegrees == 90 ) {
    secondHand.classList.add("no-transition");
  } else {
    secondHand.classList.remove("no-transition");
  } 
  secondHand.style.transform = `rotate(${secondsDegrees}deg)`;

  const mins = now.getMinutes();
  const minsDegrees = ((mins / 60) * 360) + 90;
  if (minsDegrees == 90) {
    minHand.classList.add("no-transition");
  } else {
    minHand.classList.remove("no-transition");
  }
  minHand.style.transform = `rotate(${minsDegrees}deg)`;

  const hour = now.getHours();
  const hoursDegrees = ((hour / 12) * 360) + 90;
  if (hoursDegrees == 90) {
    hourHand.classList.add("no-transition");
  } else {
    hourHand.classList.remove("no-transition");
  }
  hourHand.style.transform = `rotate(${hoursDegrees}deg)`;
}
setInterval(setDate, 1000); 
