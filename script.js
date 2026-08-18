/* =========================================================
   PASSWORD
========================================================= */

const correctPassword = "0309";

let enteredPassword = "";


/* =========================================================
   GET ELEMENTS
========================================================= */

const passwordDisplay =
    document.getElementById("passwordDisplay");

const passwordMessage =
    document.getElementById("passwordMessage");

const wrongPopup =
    document.getElementById("wrongPopup");

const successPopup =
    document.getElementById("successPopup");


/* =========================================================
   UPDATE PASSWORD DISPLAY
========================================================= */

function updateDisplay() {

    passwordDisplay.textContent = "";

    for (
        let i = 0;
        i < enteredPassword.length;
        i++
    ) {

        const dot =
            document.createElement("span");

        dot.textContent = "•";

        passwordDisplay.appendChild(dot);
    }


    if (enteredPassword.length > 0) {

        passwordDisplay.classList.add("filled");

    } else {

        passwordDisplay.classList.remove("filled");
    }
}


/* =========================================================
   PRESS NUMBER
========================================================= */

function pressKey(number) {

    if (enteredPassword.length >= 8) {
        return;
    }

    enteredPassword += number;

    updateDisplay();

    passwordMessage.textContent = "";
}


/* =========================================================
   DELETE
========================================================= */

function deleteKey() {

    enteredPassword =
        enteredPassword.slice(0, -1);

    updateDisplay();

    passwordMessage.textContent = "";
}


/* =========================================================
   CHECK PASSWORD
========================================================= */

function checkPassword() {

    if (enteredPassword === correctPassword) {

        showSuccess();

    } else {

        showWrong();
    }
}


/* =========================================================
   WRONG PASSWORD
========================================================= */

function showWrong() {

    passwordMessage.textContent = "";

    passwordDisplay.animate(
        [
            {
                transform: "translateX(0)"
            },
            {
                transform: "translateX(-10px)"
            },
            {
                transform: "translateX(10px)"
            },
            {
                transform: "translateX(-7px)"
            },
            {
                transform: "translateX(7px)"
            },
            {
                transform: "translateX(0)"
            }
        ],
        {
            duration: 400
        }
    );


    setTimeout(function() {

        wrongPopup.classList.add("show");

    }, 250);


    enteredPassword = "";

    setTimeout(function() {

        updateDisplay();

    }, 500);
}


/* =========================================================
   CLOSE WRONG POPUP
========================================================= */

function closeWrongPopup() {

    wrongPopup.classList.remove("show");

    passwordMessage.textContent = "";
}


/* =========================================================
   CORRECT PASSWORD
========================================================= */

function showSuccess() {

    passwordDisplay.animate(
        [
            {
                transform: "scale(1)"
            },
            {
                transform: "scale(1.1)"
            },
            {
                transform: "scale(1)"
            }
        ],
        {
            duration: 600
        }
    );


    setTimeout(function() {

        successPopup.classList.add("show");

    }, 400);
}


/* =========================================================
   CLOSE SUCCESS POPUP
========================================================= */

function closeSuccessPopup() {

    successPopup.classList.remove("show");

    passwordMessage.textContent = "";
}


/* =========================================================
   KEYBOARD SUPPORT
========================================================= */

document.addEventListener(
    "keydown",
    function(event) {

        if (
            event.key >= "0" &&
            event.key <= "9"
        ) {

            pressKey(event.key);
        }


        if (
            event.key === "Backspace"
        ) {

            deleteKey();
        }


        if (
            event.key === "Enter"
        ) {

            checkPassword();
        }


        if (
            event.key === "Escape"
        ) {

            closeWrongPopup();

            closeSuccessPopup();
        }

    }
);


/* =========================================================
   CLICK OUTSIDE POPUP
========================================================= */

wrongPopup.addEventListener(
    "click",
    function(event) {

        if (event.target === wrongPopup) {

            closeWrongPopup();
        }

    }
);


successPopup.addEventListener(
    "click",
    function(event) {

        if (event.target === successPopup) {

            closeSuccessPopup();
        }

    }
);


/* =========================================================
   SIMPLE MOUSE EFFECT
========================================================= */

document.addEventListener(
    "mousemove",
    function(event) {

        if (window.innerWidth <= 900) {
            return;
        }


        const x =
            (event.clientX /
            window.innerWidth) - 0.5;

        const y =
            (event.clientY /
            window.innerHeight) - 0.5;


        const photo =
            document.querySelector(
                ".photo-section"
            );

        const password =
            document.querySelector(
                ".password-section"
            );


        photo.style.transform =
            "translate(" +
            (x * 8) +
            "px, " +
            (y * 5) +
            "px)";


        password.style.transform =
            "translate(" +
            (x * -5) +
            "px, " +
            (y * -4) +
            "px)";
    }
);


/* =========================================================
   INITIALIZE
========================================================= */

updateDisplay();
