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

        display.classList.add(
            "filled"
        );

    } else {

        display.classList.remove(
            "filled"
        );
    }
}


/* =========================================================
   NUMBER BUTTON
========================================================= */

function pressKey(number) {

    /*
       Maximum 8 digits.
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
   SHOW POPUP
========================================================= */

function showPopup(type) {

    const overlay =
        document.getElementById(
            "popup-overlay"
        );

    const doodle =
        document.getElementById(
            "popup-doodle"
        );

    const popupMessage =
        document.getElementById(
            "popup-message"
        );

    const popupHearts =
        document.getElementById(
            "popup-hearts"
        );


    /*
       WRONG PASSWORD POPUP
    */

    if (type === "wrong") {

        doodle.textContent =
            "🥺💗";

        popupMessage.innerHTML =
            "Baby!!!! You've entered the wrong password.";

        popupHearts.textContent =
            "♡ ✿ ♡";


        /*
           Little sad/cute animation.
        */

        doodle.style.color =
            "#e22d5a";

    }


    /*
       CORRECT PASSWORD POPUP
    */

    else if (type === "correct") {

        doodle.textContent =
            "🎀💗✨";

        popupMessage.innerHTML =
            "Welcome, Baby! 💕<br>I've been waiting for you! 🌸";

        popupHearts.textContent =
            "♡ ✿ ♡ ✿ ♡";

        doodle.style.color =
            "#e22d5a";
    }


    /*
       Make popup visible.
    */

    overlay.classList.add(
        "show"
    );
}


/* =========================================================
   CLOSE POPUP
========================================================= */

function closePopup() {

    const overlay =
        document.getElementById(
            "popup-overlay"
        );

    overlay.classList.remove(
        "show"
    );
}


/* =========================================================
   CHECK PASSWORD
========================================================= */

function checkPassword() {

    const display =
        document.getElementById(
            "password-display"
        );


    /*
       CORRECT PASSWORD
    */

    if (
        enteredPassword ===
        CORRECT_PASSWORD
    ) {

        /*
           Small success animation.
        */

        display.animate(

            [
                {
                    transform:
                        "scale(1)"
                },

                {
                    transform:
                        "scale(1.08)"
                },

                {
                    transform:
                        "scale(1)"
                }
            ],

            {
                duration:
                    450
            }
        );


        /*
           Show cute welcome popup.
        */

        setTimeout(() => {

            showPopup(
                "correct"
            );

        }, 350);


        /*
           Keep password accepted.
           Page 2 will be connected here later.
        */

        return;
    }


    /*
       WRONG PASSWORD
    */

    else {

        /*
           Shake password display.
        */

        display.animate(

            [
                {
                    transform:
                        "translateX(0)"
                },

                {
                    transform:
                        "translateX(-8px)"
                },

                {
                    transform:
                        "translateX(8px)"
                },

                {
                    transform:
                        "translateX(-6px)"
                },

                {
                    transform:
                        "translateX(6px)"
                },

                {
                    transform:
                        "translateX(0)"
                }
            ],

            {
                duration:
                    350
            }
        );


        /*
           Show wrong-password popup.
        */

        setTimeout(() => {

            showPopup(
                "wrong"
            );

        }, 300);


        /*
           Clear wrong password
           after a short delay.
        */

        setTimeout(() => {

            enteredPassword = "";

            updateDisplay();

        }, 700);
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

            pressKey(
                event.key
            );
        }


        /*
           Backspace
        */

        else if (
            event.key ===
            "Backspace"
        ) {

            deleteKey();
        }


        /*
           Enter
        */

        else if (
            event.key ===
            "Enter"
        ) {

            checkPassword();
        }


        /*
           Escape closes popup.
        */

        else if (
            event.key ===
            "Escape"
        ) {

            closePopup();
        }

    }
);


/* =========================================================
   CLOSE POPUP WHEN CLICKING OUTSIDE
========================================================= */

document.addEventListener(
    "DOMContentLoaded",
    function () {

        updateDisplay();


        const overlay =
            document.getElementById(
                "popup-overlay"
            );


        overlay.addEventListener(
            "click",
            function (event) {

                /*
                   Only close when the
                   dark background itself
                   is clicked.
                */

                if (
                    event.target ===
                    overlay
                ) {

                    closePopup();
                }

            }
        );

    }
);
