const passwordInput = document.getElementById("password");
const unlockButton = document.getElementById("unlockButton");

const wrongPopup = document.getElementById("wrongPopup");
const welcomePopup = document.getElementById("welcomePopup");

const wrongClose = document.getElementById("wrongClose");
const welcomeClose = document.getElementById("welcomeClose");


/*
    CHANGE THE PASSWORD HERE.

    Example:
    const correctPassword = "tisha";

    You can replace "tisha" with whatever password you want.
*/

const correctPassword = "tisha";


unlockButton.addEventListener("click", function () {

    const enteredPassword = passwordInput.value.trim();

    if (enteredPassword === correctPassword) {

        welcomePopup.classList.add("show");

    } else {

        wrongPopup.classList.add("show");

    }

});


passwordInput.addEventListener("keydown", function (event) {

    if (event.key === "Enter") {
        unlockButton.click();
    }

});


wrongClose.addEventListener("click", function () {

    wrongPopup.classList.remove("show");

    passwordInput.value = "";
    passwordInput.focus();

});


welcomeClose.addEventListener("click", function () {

    welcomePopup.classList.remove("show");

});


wrongPopup.addEventListener("click", function (event) {

    if (event.target === wrongPopup) {
        wrongPopup.classList.remove("show");
    }

});


welcomePopup.addEventListener("click", function (event) {

    if (event.target === welcomePopup) {
        welcomePopup.classList.remove("show");
    }

});
