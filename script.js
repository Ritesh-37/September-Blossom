/* =========================================================
   PASSWORD SETTINGS
========================================================= */

const CORRECT_PASSWORD = "0309";

let enteredPassword = "";


/* =========================================================
   DOM ELEMENTS
========================================================= */

const display =
    document.getElementById(
        "password-display"
    );

const message =
    document.getElementById(
        "password-message"
    );


/* =========================================================
   UPDATE PASSWORD DISPLAY
========================================================= */

function updateDisplay() {

    display.innerHTML = "";

    /*
       Create individual animated dots.
    */

    for (
        let i = 0;
        i < enteredPassword.length;
        i++
    ) {

        const dot =
            document.createElement(
                "span"
            );

        dot.textContent = "•";

        dot.style.animation =
            "dotAppear 0.25s ease";

        display.appendChild(dot);
    }


    if (
        enteredPassword.length > 0
    ) {

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
   PRESS NUMBER
========================================================= */

function pressKey(number) {

    if (
        enteredPassword.length >= 8
    ) {

        return;
    }


    enteredPassword += number;

    updateDisplay();

    clearMessage();
}


/* =========================================================
   DELETE NUMBER
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

    if (
        enteredPassword ===
        CORRECT_PASSWORD
    ) {

        correctPassword();

    } else {

        wrongPassword();
    }
}


/* =========================================================
   CORRECT PASSWORD
========================================================= */

function correctPassword() {

    message.textContent =
        "♡ Password accepted ♡";

    message.style.color =
        "#fff";


    /*
       Beautiful glow animation.
    */

    display.animate(

        [
            {
                transform:
                    "scale(1)",
                boxShadow:
                    "0 0 0 rgba(255,255,255,0)"
            },

            {
                transform:
                    "scale(1.08)",
                boxShadow:
                    "0 0 35px rgba(255,255,255,0.7)"
            },

            {
                transform:
                    "scale(1)",
                boxShadow:
                    "0 0 0 rgba(255,255,255,0)"
            }

        ],

        {
            duration: 700,
            easing: "ease-out"
        }
    );


    /*
       Open success popup.
    */

    setTimeout(() => {

        openPopup(
            "success-popup"
        );

    }, 500);
}


/* =========================================================
   WRONG PASSWORD
========================================================= */

function wrongPassword() {

    message.textContent =
        "";


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
                    "translateX(-10px)"
            },

            {
                transform:
                    "translateX(10px)"
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
                    "translateX(0)"
            }

        ],

        {
            duration: 420,
            easing: "ease-in-out"
        }
    );


    /*
       Show cute popup.
    */

    setTimeout(() => {

        openPopup(
            "wrong-popup"
        );

    }, 300);


    /*
       Clear password.
    */

    setTimeout(() => {

        enteredPassword = "";

        updateDisplay();

    }, 700);
}


/* =========================================================
   OPEN POPUP
========================================================= */

function openPopup(id) {

    const popup =
        document.getElementById(id);

    popup.classList.add("show");

}


/* =========================================================
   CLOSE POPUP
========================================================= */

function closePopup(id) {

    const popup =
        document.getElementById(id);

    popup.classList.remove("show");


    /*
       Clear old message.
    */

    clearMessage();
}


/* =========================================================
   CLEAR MESSAGE
========================================================= */

function clearMessage() {

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


        /*
           Escape closes popup
        */

        else if (
            event.key === "Escape"
        ) {

            closePopup(
                "wrong-popup"
            );

            closePopup(
                "success-popup"
            );
        }

    }
);


/* =========================================================
   MOUSE PARALLAX
========================================================= */

document.addEventListener(
    "mousemove",
    function (event) {

        /*
           Don't run the effect on small
           screens.
        */

        if (
            window.innerWidth <= 900
        ) {

            return;
        }


        const x =
            (
                event.clientX /
                window.innerWidth
            ) - 0.5;


        const y =
            (
                event.clientY /
                window.innerHeight
            ) - 0.5;


        const left =
            document.querySelector(
                ".parallax-left"
            );


        const right =
            document.querySelector(
                ".parallax-right"
            );


        /*
           Very subtle movement.
        */

        left.style.transform =
            `translate(
                ${x * 10}px,
                ${y * 7}px
            )`;


        right.style.transform =
            `translate(
                ${x * -7}px,
                ${y * -5}px
            )`;

    }
);


/* =========================================================
   CLOSE POPUP WHEN CLICKING OUTSIDE
========================================================= */

document.querySelectorAll(
    ".popup-overlay"
).forEach(
    function (popup) {

        popup.addEventListener(
            "click",
            function (event) {

                if (
                    event.target === popup
                ) {

                    popup.classList.remove(
                        "show"
                    );

                }

            }
        );

    }
);


/* =========================================================
   INITIALIZE
========================================================= */

document.addEventListener(
    "DOMContentLoaded",
    function () {

        enteredPassword = "";

        updateDisplay();

    }
);
