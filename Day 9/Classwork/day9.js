const eventSection = document.createElement("div");
eventSection.id = "event-section";
eventSection.style.marginTop = "30px";

const eventTitle = document.createElement("h2");
eventTitle.innerText = "JavaScript Event Demo";
eventSection.appendChild(eventTitle);

// Container for event buttons/inputs
const eventContainer = document.createElement("div");
eventContainer.id = "event-buttons";
eventSection.appendChild(eventContainer);

document.body.appendChild(eventSection);

// Helper to show output
function showMessage(msg) {
  const outputDiv = document.getElementById("output");
  outputDiv.innerHTML = msg;
}

// --- onload ---
window.onload = function () {
  alert("Page has finished loading (onload event)");
};

// --- onclick ---
const clickBtn = document.createElement("button");
clickBtn.innerText = "Click Me (onclick)";
clickBtn.onclick = function () {
  showMessage("Button was clicked!");
};
eventContainer.appendChild(clickBtn);

// --- onmouseover ---
const hoverBtn = document.createElement("button");
hoverBtn.innerText = "Hover over me (onmouseover)";
hoverBtn.onmouseover = function () {
  showMessage("Mouse is over the button!");
};
eventContainer.appendChild(hoverBtn);

// --- onfocus ---
const focusInput = document.createElement("input");
focusInput.type = "text";
focusInput.placeholder = "Click here (onfocus)";
focusInput.onfocus = function () {
  showMessage("Input field got focus!");
};
eventContainer.appendChild(focusInput);

// --- onkeyup ---
const keyInput = document.createElement("input");
keyInput.type = "text";
keyInput.placeholder = "Type something (onkeyup)";
keyInput.onkeyup = function (event) {
  showMessage("You typed: " + event.target.value);
};
eventContainer.appendChild(keyInput);

// --- onsubmit ---
const form = document.createElement("form");
form.innerHTML = `<input type="text" placeholder="Enter name">
<button type="submit">Submit (onsubmit)</button>`;
form.onsubmit = function (event) {
  event.preventDefault(); // stops page reload
  showMessage("Form was submitted!");
   alert("OnSubmit event triggered");
};
eventContainer.appendChild(form);

// --- onselect ---
const selectInput = document.createElement("input");
selectInput.type = "text";
selectInput.value = "Select some text here (onselect)";
selectInput.onselect = function () {
  showMessage("Some text was selected!");
};
eventContainer.appendChild(selectInput);
