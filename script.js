/* =====================================================
   🎂 BIRTHDAY SURPRISE - PAGE 1 ONLY
===================================================== */


/* =====================================================
   PASSWORD
===================================================== */

const correctPassword = "03092005";

let enteredPassword = "";


/* =====================================================
   ADD NUMBER
===================================================== */

function addNumber(number) {

    // Don't allow more than 8 digits
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

    const boxes =
        document.querySelectorAll(
            "#password-display span"
        );


    boxes.forEach((box, index) => {

        if (index < enteredPassword.length) {

            box.textContent = "●";

        } else {

            box.textContent = "_";

        }

    });
}


/* =====================================================
   CLEAR PASSWORD
===================================================== */

function clearPassword() {

    enteredPassword = "";

    updatePasswordDisplay();

    document.getElementById(
        "password-message"
    ).textContent = "";
}


/* =====================================================
   CHECK PASSWORD
===================================================== */

function checkPassword() {

    if (
        enteredPassword === correctPassword
    ) {

        // Correct password

        document.getElementById(
            "password-message"
        ).textContent =
            "🎉 Correct! Welcome...";


        setTimeout(() => {

            openWelcomeVideo();

        }, 500);

    } else {

        // Wrong password

        document.getElementById(
            "password-message"
        ).textContent =
            "❌ Wrong password!";


        showWrongPopup();

    }

}


/* =====================================================
   WRONG PASSWORD
===================================================== */

function showWrongPopup() {

    document
        .getElementById("wrong-popup")
        .classList.add("show");

}


function closeWrongPopup() {

    document
        .getElementById("wrong-popup")
        .classList.remove("show");

}


/* =====================================================
   WELCOME VIDEO
===================================================== */

function openWelcomeVideo() {

    const popup =
        document.getElementById(
            "welcome-popup"
        );

    const video =
        document.getElementById(
            "welcome-video"
        );


    popup.classList.add("show");


    /*
    Try to automatically play
    the welcome video with sound.

    Some browsers may block
    automatic audio.

    If that happens, simply
    press the video play button.
    */

    video.muted = false;

    video.play()
        .catch(() => {

            console.log(
                "Browser blocked automatic video playback."
            );

        });

}


/* =====================================================
   NEXT PAGE
===================================================== */

function continueToNextPage() {

    /*
    =====================================================
    FOR NOW:

    We are NOT creating Page 2 yet.

    This button simply closes
    the welcome video.

    Later we'll connect this to
    your Birthday Adventure page.
    =====================================================
    */

    document
        .getElementById(
            "welcome-popup"
        )
        .classList.remove("show");

}


/* =====================================================
   KEYBOARD SUPPORT
===================================================== */

document.addEventListener(
    "keydown",
    function(event) {

        // Number keys
        if (
            event.key >= "0" &&
            event.key <= "9"
        ) {

            addNumber(event.key);

        }


        // Enter
        if (
            event.key === "Enter"
        ) {

            checkPassword();

        }


        // Backspace
        if (
            event.key === "Backspace"
        ) {

            enteredPassword =
                enteredPassword.slice(
                    0,
                    -1
                );

            updatePasswordDisplay();

        }


        // Escape
        if (
            event.key === "Escape"
        ) {

            closeWrongPopup();

        }

    }
);


/* =====================================================
   INITIALIZE
===================================================== */

document.addEventListener(
    "DOMContentLoaded",
    function() {

        updatePasswordDisplay();

    }
);
