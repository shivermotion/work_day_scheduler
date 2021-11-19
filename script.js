let currentDate = moment().format("MMMM Do YYYY, h:mm:ss a");
console.log(currentDate);
let timeSlot = document.getElementById("currentDay");
console.log(timeSlot.textContent);
timeSlot.textContent = currentDate;
