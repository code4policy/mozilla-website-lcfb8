// Store a reference to the <h1> in a variable
const myHeading = document.querySelector("h1");
// Update the text content of the <h1>
myHeading.textContent = "Hello, world!";

 // Define a Function
 function sayOuch() {
 	alert('Ouch! Stop poking me!');
 }
 
 // Use a CSS selector to identify an element
 var foxImage = document.querySelector('img');
 
 // Assign the function to the onclick event on that element
 foxImage.onclick = sayOuch;

 // JavaScript: add event handlers to show/hide the image
const img = document.getElementById('photo');
const showBtn = document.getElementById('showBtn');
const hideBtn = document.getElementById('hideBtn');

showBtn.addEventListener('click', () => { img.style.display = 'block'; });
hideBtn.addEventListener('click', () => { img.style.display = 'none'; });