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


    /*
       Show a dot for every number entered.
    */

    display.textContent =
        "•".repeat(
            enteredPassword.length
        );


    /*
       Empty = hollow box
       Numbers entered = white box
    */

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

    /*
       Maximum 8 digits.
       This also prevents accidental
       unlimited input.
    */

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


        /*
           Small success animation.
        */

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


        /*
           For now we stop here.

           Later, when Page 2 is ready,
           this is where we'll transition
           to the next page.
        */

        setTimeout(() => {

            message.textContent =
                "✨ Welcome... ✨";

        }, 600);


    } else {

        message.textContent =
            "Not quite... try again ♡";


        message.style.color =
            "#ffe1ea";


        /*
           Shake the password box.
        */

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


        /*
           Clear wrong password.
        */

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

        /*
           Number keys
        */

        if (
            event.key >= "0" &&
            event.key <= "9"
        ) {

            pressKey(event.key);

        }


        /*
           Backspace
        */

        else if (
            event.key === "Backspace"
        ) {

            deleteKey();

        }


        /*
           Enter
        */

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
