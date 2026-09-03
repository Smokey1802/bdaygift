const noButton = document.getElementById("noButton");
const yesButton = document.getElementById("yesButton");
const dateResponse = document.getElementById("dateResponse");

function moveNoButton() {

    const maxX = window.innerWidth - noButton.offsetWidth;
    const maxY = window.innerHeight - noButton.offsetHeight;

    const randomX = Math.random() * maxX;
    const randomY = Math.random() * maxY;

    noButton.style.position = "fixed";
    noButton.style.left = randomX + "px";
    noButton.style.top = randomY + "px";
}

noButton.addEventListener("mouseover", moveNoButton);

noButton.addEventListener("click", moveNoButton);

const dateSection = document.getElementById("dateSection");
const dateChoiceSection = document.getElementById("dateChoiceSection");

yesButton.addEventListener("click", function() {

    dateSection.style.display = "none";
    dateChoiceSection.style.display = "flex";

});


const cinemaButton = document.getElementById("cinemaButton");
const dinnerButton = document.getElementById("dinnerButton");
const choiceResponse = document.getElementById("choiceResponse");

function wrongChoice() {

    choiceResponse.innerHTML = `
        Engkk, engot!! We'll do BOTH, you dummy! 
        <br><br>
        🎬 Cinema + 🍽️ Dinner
        <br>
        <small> pero siyempre libre mo :P </small>
    `;

}

cinemaButton.addEventListener("click", wrongChoice);
dinnerButton.addEventListener("click", wrongChoice);


const foundGiftButton = document.getElementById("foundGiftButton");
const closingMessage = document.getElementById("closingMessage");

foundGiftButton.addEventListener("click", function() {

    closingMessage.innerHTML = `
        Hope you liked it.
        <br><br>
        Only time can tell how much I love u.
        <br>
        Hope this little 'thing' help u with that 
        <br><br>
        I love so much. Here's to more birthdays,
        more memories, more dates, and more adventures together.
        <br><br>
         Always yours, nigga q. <3
    `;

    closingMessage.style.display = "block";

    foundGiftButton.style.display = "none";

});