//RT-Clock
let currentDate = moment().format("MMMM Do YYYY, h:mm a");
console.log(currentDate);
let timeSlot = document.getElementById("currentDay");
console.log(timeSlot.textContent);
timeSlot.textContent = currentDate;

//9AM//
//hooking in elements
let saveBtn9 = document.getElementById("9amSaveBtn");
let text9 = document.getElementById("text9am");

//text area is fill with 9AM key value from local storage
text9.textContent = localStorage.getItem("9AM");

//event listener added to save button to set keyvalue and value pair
saveBtn9.addEventListener("click", function () {
	let taValue = text9am.value;
	console.log(taValue);
	localStorage.setItem("9AM", taValue);
});

//10AM//
//hooking in elements
let saveBtn10 = document.getElementById("10amSaveBtn");
let text10 = document.getElementById("text10am");

//passes key value from local storage into element text content
text10.textContent = localStorage.getItem("10AM");

//event listener added to save button to set keyvalue and value pair
saveBtn9.addEventListener("click", function () {
	let taValue = text10am.value;
	console.log(taValue);
	localStorage.setItem("10AM", taValue);
});

//11AM//
//hooking in elements
let saveBtn11 = document.getElementById("11amSaveBtn");
let text11 = document.getElementById("text11am");

//text area is fill with 9AM key value from local storage
text11.textContent = localStorage.getItem("11AM");

//event listener added to save button to set keyvalue and value pair
saveBtn11.addEventListener("click", function () {
	let taValue = text11am.value;
	console.log(taValue);
	localStorage.setItem("11AM", taValue);
});

//12PM//
//hooking in elements
let saveBtn12 = document.getElementById("12pmSaveBtn");
let text12 = document.getElementById("text12pm");

//text area is fill with 9AM key value from local storage
text9.textContent = localStorage.getItem("12PM");

//event listener added to save button to set keyvalue and value pair
saveBtn9.addEventListener("click", function () {
	let taValue = text12pm.value;
	console.log(taValue);
	localStorage.setItem("12PM", taValue);
});
