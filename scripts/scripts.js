console.log("loading...");

// countdown timer: start at 5 minutes and update #promo element
function startCountdown(durationSeconds, displayElement) {
  let remaining = durationSeconds;
  const intervalId = setInterval(() => {
    const minutes = Math.floor(remaining / 60);
    const seconds = remaining % 60;
    displayElement.textContent = `${minutes}:${seconds.toString().padStart(2, '0')}`;

    if (remaining <= 0) {
      clearInterval(intervalId);
      displayElement.textContent = "00:00";
      // you could trigger another action when countdown finishes
    }

    remaining -= 1;
  }, 1000);
}

document.addEventListener('DOMContentLoaded', () => {
  const promo = document.getElementById('promo');
  if (promo) {
    // 5 minutes = 300 seconds
    startCountdown(300, promo);
  }
});