/* Given Code, don't edit */

document.querySelector("button").addEventListener("click", handleClick);

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

/* End Given Code, don't edit above here...*/

/* Write your implementation of greet() */
const greet = (timeString) => {
 let time = timeString.split(':')
  parsedTime = parseInt(time[0])
  if(time < 12) { return "Good Morning" }
  else if (time > 12 && time < 17) { return "Good Afternoon" }
  else { return "Good Evening" }
}

const greeting = document.getElementById("greeting")

/* Write your implementation of displayMessage() */
displayMessage(arg) {
  greeting.innerContent
}