/* =========================================================
   PASSWORD
========================================================= */

const CORRECT_PASSWORD = "0309";

let enteredPassword = "";


/* =========================================================
   DISPLAY
========================================================= */

function updateDisplay() {

    const display =
        document.getElementById("password-display");

    display.textContent =
        "•".repeat(enteredPassword.length);

    if (enteredPassword.length > 0) {

        display.classList.add("filled");

    } else {

        display.classList.remove("filled");

    }
}


/* =========================================================
   NUMBER
========================================================= */

function pressKey(number) {

    if (enteredPassword.length >= 8) {
        return;
    }

    enteredPassword += number;

    updateDisplay();

    clearMessage();
}


/* =========================================================
   DELETE
========================================================= */

function deleteKey() {

    enteredPassword =
        enteredPassword.slice(0, -1);

    updateDisplay();

    clearMessage();
}


/* =========================================================
   CHECK PASSWORD
========================================================= */

function checkPassword() {

    if (
        enteredPassword ===
        CORRECT_PASSWORD
    ) {

        /*
           Correct password.
           Show welcome popup.
        */

        showWelcomePopup();

    } else {

        /*
           Wrong password.
           Show cute error popup.
        */

        showWrongPopup();
    }
}


/* =========================================================
   WRONG POPUP
========================================================= */

function showWrongPopup() {

    const popup =
        document.getElementById("wrong-popup");

    popup.classList.add("show");
}


function closeWrongPopup() {

    const popup =
        document.getElementById("wrong-popup");

    popup.classList.remove("show");

    enteredPassword = "";

    updateDisplay();

    clearMessage();
}


/* =========================================================
   WELCOME POPUP
========================================================= */

function showWelcomePopup() {

    const popup =
        document.getElementById("welcome-popup");

    popup.classList.add("show");
}


function closeWelcomePopup() {

    /*
       Close popup first.
    */

    const popup =
        document.getElementById("welcome-popup");

    popup.classList.remove("show");


    /*
       Then open Page 2.
    */

    setTimeout(function () {

        window.location.href =
            "page2.html";

    }, 300);
}


/* =========================================================
   CLEAR MESSAGE
========================================================= */

function clearMessage() {

    const message =
        document.getElementById(
            "password-message"
        );

    message.textContent = "";
}


/* =========================================================
   KEYBOARD
========================================================= */

document.addEventListener(
    "keydown",
    function (event) {

        if (
            event.key >= "0" &&
            event.key <= "9"
        ) {

            pressKey(event.key);

        } else if (
            event.key === "Backspace"
        ) {

            deleteKey();

        } else if (
            event.key === "Enter"
        ) {

            checkPassword();

        }

    }
);


/* =========================================================
   INITIALIZE
========================================================= */

document.addEventListener(
    "DOMContentLoaded",
    function () {

        updateDisplay();

    }
);
