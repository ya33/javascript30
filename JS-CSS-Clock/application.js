const setDate = () => {
  const now = new Date;
  const hour = now.getHours();
  const min = now.getMinutes();
  const sec = now.getSeconds();
  const secDegrees = sec * 6 + 180;
  const minDegrees = min * 6 + 180;
  const hourDegrees = hour * 360 / 24 + 180;
  const hourHand = document.getElementById('hour-hand')
  const minHand = document.getElementById('min-hand')
  const secHand = document.getElementById('sec-hand')
  secHand.style.transform = `rotate(${secDegrees}deg)`;
  minHand.style.transform = `rotate(${minDegrees}deg)`;
  hourHand.style.transform = `rotate(${hourDegrees}deg)`;
}


setInterval(setDate,1000);
