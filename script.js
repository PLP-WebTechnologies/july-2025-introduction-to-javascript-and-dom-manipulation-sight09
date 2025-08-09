//  Part 1: JavaScript Basics

let userName = prompt("What's your name?");
let userAge = parseInt(prompt("How old are you?"));

// Conditional
if (userAge >= 18) {
  document.getElementById(
    "greeting"
  ).textContent = `Hello ${userName}, you're an adult.`;
} else {
  document.getElementById(
    "greeting"
  ).textContent = `Hi ${userName}, enjoy your youth!`;
}

// Part 2: Functions

// Function to calculate sum
function calculateSum(a, b) {
  return a + b;
}

// Function to format a name
function formatName(name) {
  return name.trim().toUpperCase();
}

let sumResult = calculateSum(10, 20);
document.getElementById(
  "function-result"
).textContent = `Sum of 10 and 20 is: ${sumResult}. Formatted name: ${formatName(
  userName
)}`;

// Part 3: Loops

let colors = ["Red", "Green", "Blue"];

// for loop
for (let i = 0; i < colors.length; i++) {
  let li = document.createElement("li");
  li.textContent = colors[i];
  document.getElementById("loop-list").appendChild(li);
}

// while loop - countdown
let count = 3;
while (count > 0) {
  console.log(`Countdown: ${count}`);
  count--;
}

// Part 4: DOM Manipulation

// Toggle content visibility
document.getElementById("toggle-btn").addEventListener("click", function () {
  let msg = document.getElementById("toggle-message");
  msg.style.display = msg.style.display === "none" ? "block" : "none";
});

// Add new list item dynamically
document.getElementById("add-item").addEventListener("click", function () {
  let newItem = document.createElement("li");
  newItem.textContent = "New Dynamic Item";
  document.getElementById("dynamic-list").appendChild(newItem);
});

// Change text on hover (another DOM interaction)
document.getElementById("part4").addEventListener("mouseover", function () {
  document.getElementById("part4").style.backgroundColor = "#f0f0f0";
});
document.getElementById("part4").addEventListener("mouseout", function () {
  document.getElementById("part4").style.backgroundColor = "";
});
