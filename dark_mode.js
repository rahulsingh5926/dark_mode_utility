// Function to toggle dark mode
function darkMode() {
  var element = document.body;
  element.classList.toggle("dark-mode");
}

// Create button element
// Create the container div
const containerDiv = document.createElement("div");
var darkModeButton = document.createElement("input");

// Create the label element
const labelElement = document.createElement("label");
labelElement.classList.add("cl-switch");

// Create the input element
const inputElement = document.createElement("input");
inputElement.id = "dark-mode-toggle";
inputElement.setAttribute("type", "checkbox");

// Create the span element
const spanElement = document.createElement("span");

// Append the input and span elements to the label element
labelElement.appendChild(inputElement);
labelElement.appendChild(spanElement);

// Append the label element to the container div
containerDiv.appendChild(labelElement);

// Append the container div to the document body or any desired parent element
document.body.appendChild(containerDiv);

// Event listener for button click
document.getElementById("dark-mode-toggle").addEventListener("click", darkMode);
