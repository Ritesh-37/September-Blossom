/* =====================================================
   🎂 BIRTHDAY SECRET — PAGE 1
===================================================== */


/* =====================================================
   PASSWORD
===================================================== */

const correctPassword = "03092005";

let enteredPassword = "";



/* =====================================================
   NUMERIC KEYPAD
===================================================== */

function pressKey(number) {

    if (enteredPassword.length >= 8) {
        return;
    }

    enteredPassword += number;

    updatePasswordDisplay();

}



/* =====================================================
   UPDATE PASSWORD DISPLAY
===================================================== */

function updatePasswordDisplay() {

    const display =
        document.getElementById(
            "password-text"
        );

    const box =
        document.getElementById(
            "password-display"
        );


    if (enteredPassword.length === 0) {

        display.textContent =
            "ENTER PASSWORD";

        box.classList.remove(
            "has-password"
        );

        return;
    }


    display.textContent =
        "•".repeat(
            enteredPassword.length
        );

    box.classList.add(
        "has-password"
    );

}



/* =====================================================
   DELETE LAST NUMBER
===================================================== */

function deleteLast() {

    enteredPassword =
        enteredPassword.slice(
            0,
            -1
        );

    updatePasswordDisplay();

}



/* =====================================================
   CLEAR PASSWORD
===================================================== */

function clearPassword() {

    enteredPassword = "";

    updatePasswordDisplay();

    document.getElementById(
        "password-status"
    ).textContent = "";

}



/* =====================================================
   CHECK PASSWORD
===================================================== */

function checkPassword() {

    const card =
        document.querySelector(
            ".password-card"
        );

    const status =
        document.getElementById(
            "password-status"
        );


    if (
        enteredPassword ===
        correctPassword
    ) {

        /* =============================================
           CORRECT PASSWORD
        ============================================== */

        status.textContent =
            "✓ ACCESS GRANTED";

        status.style.color =
            "#3b9b72";


        card.style.boxShadow =
            "0 0 50px rgba(80,210,150,0.25), 0 25px 80px rgba(110,65,130,0.18)";


        setTimeout(() => {

            openWelcomePopup();

        }, 500);

    }

    else {

        /* =============================================
           WRONG PASSWORD
        ============================================== */

        status.textContent =
            "✕ WRONG PASSWORD";

        status.style.color =
            "#d3477f";


        card.classList.remove(
            "shake"
        );


        void card.offsetWidth;


        card.classList.add(
            "shake"
        );


        setTimeout(() => {

            openWrongPopup();

        }, 350);

    }

}



/* =====================================================
   WRONG PASSWORD POPUP
===================================================== */

function openWrongPopup() {

    document
        .getElementById(
            "wrong-popup"
        )
        .classList.add(
            "show"
        );

}


function closeWrongPopup() {

    document
        .getElementById(
            "wrong-popup"
        )
        .classList.remove(
            "show"
        );

}



/* =====================================================
   WELCOME VIDEO POPUP
===================================================== */

function openWelcomePopup() {

    const popup =
        document.getElementById(
            "welcome-popup"
        );

    const video =
        document.getElementById(
            "welcome-video"
        );


    popup.classList.add(
        "show"
    );


    /*
       Because the password button was clicked,
       the browser normally allows video playback
       with sound.
    */

    video.currentTime = 0;

    video.play()
        .catch(() => {

            /*
               If the browser blocks autoplay,
               the video controls are still available.
            */

            console.log(
                "Video autoplay was blocked by the browser."
            );

        });

}


function closeWelcomePopup() {

    const popup =
        document.getElementById(
            "welcome-popup"
        );

    const video =
        document.getElementById(
            "welcome-video"
        );


    video.pause();

    popup.classList.remove(
        "show"
    );

}



/* =====================================================
   ESC KEY CLOSES POPUPS
===================================================== */

document.addEventListener(
    "keydown",
    function(event) {

        if (
            event.key === "Escape"
        ) {

            closeWrongPopup();

            closeWelcomePopup();

        }

    }
);



/* =====================================================
   ENTER KEY
===================================================== */

document.addEventListener(
    "keydown",
    function(event) {

        if (
            event.key === "Enter"
        ) {

            checkPassword();

        }

    }
);



/* =====================================================
   PREVENT RIGHT CLICK
   Optional little extra
===================================================== */

document.addEventListener(
    "contextmenu",
    function(event) {

        event.preventDefault();

    }
);
