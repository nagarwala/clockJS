const secondHand = document.querySelector('.second-hand');
const minsHand = document.querySelector('.min-hand');
const hourHand = document.querySelector('.hour-hand');

function addZero(i) {
  if (i < 10) {
    i = "0" + i;
  }
  return i;
}

function myFunction() {
var d = new Date();
var x = document.getElementById("demo");

x.innerHTML = h + ":" + m + ":" + s;
}

function setDate() {
  const now = new Date();
  var x = document.getElementById("demo");

  const seconds = addZero(now.getSeconds());
  const secondsDegrees = ((seconds / 60) * 360) + 90;
  secondHand.style.transform = `rotate(${secondsDegrees}deg)`;

  const mins = addZero(now.getMinutes());
  const minsDegrees = ((mins / 60) * 360) + ((seconds/60)*6) + 90;
  minsHand.style.transform = `rotate(${minsDegrees}deg)`;

  const hour = addZero(now.getHours());
  const hourDegrees = ((hour / 12) * 360) + ((mins/60)*30) + 90;
  hourHand.style.transform = `rotate(${hourDegrees}deg)`;

  x.innerHTML = hour + ":" + mins + ":" + seconds;

}

setInterval(setDate, 1000);

setDate();
