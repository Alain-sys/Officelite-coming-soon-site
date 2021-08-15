// Select title date and timer elements of html
let timerTitleDate = document.querySelector('.title-date');
let timer = document.querySelectorAll('.timer');

// Take the local date of the user
let countDownDate = new Date();

//Add 30 days at the local date
countDownDate.setDate(countDownDate.getDate() + 30);

// Call countDown and update the count down every 1 second
setInterval(countDown, 1000);

// Take the date in 30 days and translate it for the title date
function setCountDownDate(x) {
  let day = countDownDate.getDate();
  let month = x.toLocaleString('en-us', { month: 'short' });
  let year = x.getFullYear();
  timerTitleDate.textContent = day + ' ' + month + ' ' + year;
}
setCountDownDate(countDownDate);

// Calculate the difference between the current date and the date in 30 days
function countDown() {
  let now = new Date().getTime();
  let distance = countDownDate - now;

  // Time calculations for days, hours, minutes and seconds
  let days = Math.floor(distance / (1000 * 60 * 60 * 24));
  let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  let seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // Write the number of days, hours, minutes and seconds in the elements html
  timer[0].textContent = days;
  timer[1].textContent = hours;
  timer[2].textContent = minutes;
  timer[3].textContent = seconds;

  // If the countdown is to 0 add 30 days
  if (distance <= 0) {
    countDownDate.setDate(countDownDate.getDate() + 30);
  }
}
