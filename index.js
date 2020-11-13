/* Given Code, don't edit */

document.querySelector("button").addEventListener("click", handleClick);

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

/* End Given Code, don't edit above here...*/

/* Write your implementation of greet() */
const greet = (timeString) => {
  let time = timeString.split(':').map(t => parseInt(t, 10))
  let hours = time[0]
  hours < 12 ? return "Good Morning" 
  : hours > 17 ? return "Good Evening" 
  : return "Good Afternoon"
}


/* Write your implementation of displayMessage() */
const displayMessage = (message) => {
const greeting = document.getElementById("greeting")
  greeting.innerText = message;
}