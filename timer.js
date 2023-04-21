// Set the date and time to count down to
var countDownDate = new Date();
countDownDate.setDate(countDownDate.getDate() + 7); // Change the date to one week from now
countDownDate.setHours(15); // Change the hours to 3 PM
countDownDate.setMinutes(37); // Change the minutes to 37
countDownDate.setSeconds(25); // Change the seconds to 25
countDownDate = countDownDate.getTime();

// Update the countdown every second
var x = setInterval(function () {
  // Get the current date and time
  var now = new Date().getTime();

  // Calculate the distance between the current time and the countdown date
  var distance = countDownDate - now;

  // Calculate the days, hours, minutes, and seconds remaining
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // Display the countdown in the specified element
  document.getElementById("demo").innerHTML =
    days + "d " + hours + "h " + minutes + "m " + seconds + "s ";

  // If the countdown is finished, display "EXPIRED"
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("demo").innerHTML = "EXPIRED";
  }
}, 1000);
