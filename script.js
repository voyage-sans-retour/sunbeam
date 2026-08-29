//Annie's button

const chaosIdeas = [
   "🍰 Eat dessert before lunch.",
   "🚌 Take the next bus and get off somewhere random.",
   "📸 Take a photo of the weirdest thing you see.",
   "💸 Find something fun that costs less than $5.",
   "☕ Go into the first café you see.",
   "🎨 Find a piece of art and decide what it means.",
   "🐕 Give every dog you see a rating out of 10.",
   "📵 Put your phone away for 20 minutes."
];


const chaosButton = document.getElementById("chaosButton");
const chaosPopup = document.getElementById("chaosPopup");
const chaosResult = document.getElementById("chaosResult");
const closeButton = document.getElementById("closeButton");
const chaosBox = document.getElementById("chaosBox");


chaosButton.addEventListener("click", function() {
   const randomIndex = Math.floor(Math.random() * chaosIdeas.length);
   chaosResult.textContent = chaosIdeas[randomIndex];
   chaosPopup.style.display = "flex";


   // restart the wiggle animation every click
   chaosBox.style.animation = "none";
   void chaosBox.offsetWidth;
   chaosBox.style.animation = "wiggleIn 0.5s ease";
});


closeButton.addEventListener("click", function() {
   chaosPopup.style.display = "none";
});
