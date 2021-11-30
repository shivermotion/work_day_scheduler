let currentDate = moment().format("MMMM Do YYYY, h:mm a");
console.log(currentDate);
let timeSlot = document.getElementById("currentDay");
console.log(timeSlot.textContent);
timeSlot.textContent = currentDate;
let saveBtn9 = document.getElementById("saveBtn9");
let text9 = document.getElementById("hour9");

text9.textContent = localStorage.getItem("9AM");

saveBtn9.addEventListener("click", function () {
	let taValue = text9.value;
	console.log(taValue);
	localStorage.setItem("9AM", taValue);
});
