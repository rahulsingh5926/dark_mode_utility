// Function to toggle dark mode
function darkMode() {
  var element = document.body;
  element.classList.toggle("dark-mode");
}

// Create the div container element with class "theme-switch"
const themeSwitchDiv = document.createElement("div");
themeSwitchDiv.classList.add("theme-switch");

// Create the input element
const checkbox = document.createElement("input");
checkbox.setAttribute("type", "checkbox");
checkbox.id = "theme-checkbox";

// Create the label element
const label = document.createElement("label");
label.setAttribute("for", "theme-checkbox");

// Create the first span element with an empty div
const emptyDiv = document.createElement("div");

// Create the first span element with the first SVG
const svg1 = document.createElementNS("http://www.w3.org/2000/svg", "svg");
svg1.setAttribute("xmlns", "http://www.w3.org/2000/svg");
svg1.setAttribute("viewBox", "0 0 24 24");
svg1.setAttribute("fill", "currentColor");
svg1.classList.add("w-6", "h-6");

// Create the path element for the first SVG
const path1 = document.createElementNS("http://www.w3.org/2000/svg", "path");
path1.setAttribute("fill-rule", "evenodd");
path1.setAttribute(
  "d",
  "M9.528 1.718a.75.75 0 01.162.819A8.97 8.97 0 009 6a9 9 0 009 9 8.97 8.97 0 003.463-.69.75.75 0 01.981.98 10.503 10.503 0 01-9.694 6.46c-5.799 0-10.5-4.701-10.5-10.5 0-4.368 2.667-8.112 6.46-9.694a.75.75 0 01.818.162z"
);
path1.setAttribute("clip-rule", "evenodd");

// Append the path element to the first SVG
svg1.appendChild(path1);

// Create the second span element with the second SVG
const svg2 = document.createElementNS("http://www.w3.org/2000/svg", "svg");
svg2.setAttribute("xmlns", "http://www.w3.org/2000/svg");
svg2.setAttribute("viewBox", "0 0 24 24");
svg2.setAttribute("fill", "currentColor");
svg2.classList.add("w-6", "h-6");

// Create the path element for the second SVG
const path2 = document.createElementNS("http://www.w3.org/2000/svg", "path");
path2.setAttribute(
  "d",
  "M12 2.25a.75.75 0 01.75.75v2.25a.75.75 0 01-1.5 0V3a.75.75 0 01.75-.75zM7.5 12a4.5 4.5 0 119 0 4.5 4.5 0 01-9 0zM18.894 6.166a.75.75 0 00-1.06-1.06l-1.591 1.59a.75.75 0 101.06 1.061l1.591-1.59zM21.75 12a.75.75 0 01-.75.75h-2.25a.75.75 0 010-1.5H21a.75.75 0 01.75.75zM17.834 18.894a.75.75 0 001.06-1.06l-1.59-1.591a.75.75 0 10-1.061 1.06l1.59 1.591zM12 18a.75.75 0 01.75.75V21a.75.75 0 01-1.5 0v-2.25A.75.75 0 0112 18zM7.758 17.303a.75.75 0 00-1.061-1.06l-1.591 1.59a.75.75 0 001.06 1.061l1.591-1.59zM6 12a.75.75 0 01-.75.75H3a.75.75 0 010-1.5h2.25A.75.75 0 016 12zM6.697 7.757a.75.75 0 001.06-1.06l-1.59-1.591a.75.75 0 00-1.061 1.06l1.59 1.591z"
);

// Append the path element to the second SVG
svg2.appendChild(path2);

// Create the first span element and append the empty div and first SVG
const span1 = document.createElement("span");
span1.appendChild(emptyDiv);
span1.appendChild(svg1);

// Create the second span element and append the second SVG
const span2 = document.createElement("span");
span2.appendChild(svg2);

// Append the first and second span elements to the label
label.appendChild(span1);
label.appendChild(span2);

// Append the input and label elements to the container div
themeSwitchDiv.appendChild(checkbox);
themeSwitchDiv.appendChild(label);

// Append the container div to the document body or any desired parent element
document.body.appendChild(themeSwitchDiv);

// Event listener for checkbox toggle
checkbox.addEventListener("change", function () {
  // Call darkMode function when checkbox is toggled
  darkMode();
});
