/* =========================================================
   PASSWORD SETTINGS
========================================================= */

const CORRECT_PASSWORD = "0309";

let enteredPassword = "";


/* =========================================================
   PASSWORD DISPLAY
========================================================= */

function updateDisplay() {

    const display =
        document.getElementById(
            "password-display"
        );

    display.textContent =
        "•".repeat(
            enteredPassword.length
        );

    if (enteredPassword.length > 0) {

        display.classList.add("filled");

    } else {

        display.classList.remove("filled");

    }
}


/* =========================================================
   NUMBER BUTTON
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
   DELETE BUTTON
========================================================= */

function deleteKey() {

    enteredPassword =
        enteredPassword.slice(
            0,
            -1
        );

    updateDisplay();

    clearMessage();
}


/* =========================================================
   CHECK PASSWORD
========================================================= */

function checkPassword() {

    const message =
        document.getElementById(
            "password-message"
        );

    if (
        enteredPassword ===
        CORRECT_PASSWORD
    ) {

        message.textContent =
            "♡ Password accepted ♡";

        message.style.color =
            "#fff";

        const display =
            document.getElementById(
                "password-display"
            );

        display.animate(

            [
                {
                    transform: "scale(1)"
                },

                {
                    transform: "scale(1.08)"
                },

                {
                    transform: "scale(1)"
                }
            ],

            {
                duration: 450
            }

        );

        setTimeout(() => {

            message.textContent =
                "✨ Welcome... ✨";

        }, 600);


    } else {

        message.textContent =
            "Not quite... try again ♡";

        message.style.color =
            "#ffe1ea";

        const display =
            document.getElementById(
                "password-display"
            );

        display.animate(

            [
                {
                    transform: "translateX(0)"
                },

                {
                    transform: "translateX(-8px)"
                },

                {
                    transform: "translateX(8px)"
                },

                {
                    transform: "translateX(-6px)"
                },

                {
                    transform: "translateX(6px)"
                },

                {
                    transform: "translateX(0)"
                }
            ],

            {
                duration: 350
            }

        );

        setTimeout(() => {

            enteredPassword = "";

            updateDisplay();

        }, 500);
    }
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
   KEYBOARD SUPPORT
========================================================= */

document.addEventListener(
    "keydown",
    function (event) {

        if (
            event.key >= "0" &&
            event.key <= "9"
        ) {

            pressKey(event.key);

        }

        else if (
            event.key === "Backspace"
        ) {

            deleteKey();

        }

        else if (
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
