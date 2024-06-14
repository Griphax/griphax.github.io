// const audio = new Audio("https://www.myinstants.com/en/instant/slark-in-the-bag/?utm_source=copy&utm_medium=share")
// const buttons = document.getElementById("button")

/**
 * @dev Method to import local sound to a button
 */

document.getElementById('griphax').addEventListener('click', function () {
    let audio = new Audio('sounds/slark.mp3');
    audio.play();
});

