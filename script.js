/* ==========================================
   PASSWORD
========================================== */

const CORRECT_PASSWORD = "03092005";

let enteredPassword = "";


/* ==========================================
   NUMBER BUTTON
========================================== */

function pressNumber(number) {

    if (enteredPassword.length >= 8) {
        return;
    }

    enteredPassword += number;

    updatePasswordDisplay();

}


/* ==========================================
   DELETE BUTTON
========================================== */

function deleteNumber() {

    enteredPassword =
        enteredPassword.slice(0, -1);

    updatePasswordDisplay();

}


/* ==========================================
   PASSWORD DOTS
========================================== */

function updatePasswordDisplay() {

    const dots =
        document.querySelectorAll(
            "#password-display span"
        );

    dots.forEach(
        (dot, index) => {

            if (
                index <
                enteredPassword.length
            ) {

                dot.classList.add(
                    "filled"
                );

            } else {

                dot.classList.remove(
                    "filled"
                );
            }

        }
    );
}


/* ==========================================
   CHECK PASSWORD
========================================== */

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
            "✓ ACCESS GRANTED";

        message.style.color =
            "#65ffbd";


        setTimeout(
            playWelcomeVideo,
            500
        );

    }

    else {

        message.textContent =
            "❌ WRONG PASSWORD";

        showWrongPopup();

    }

}


/* ==========================================
   WRONG PASSWORD
========================================== */

function showWrongPopup() {

    document
        .getElementById(
            "wrong-popup"
        )
        .classList.add("show");

}


function closeWrongPopup() {

    document
        .getElementById(
            "wrong-popup"
        )
        .classList.remove("show");


    enteredPassword = "";

    updatePasswordDisplay();

    document.getElementById(
        "password-message"
    ).textContent = "";

}


/* ==========================================
   WELCOME VIDEO
========================================== */

function playWelcomeVideo() {

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
    IMPORTANT:

    The browser allows sound here because
    the user clicked the ENTER button.
    */

    video.currentTime = 0;

    video.play()
        .catch(
            error => {

                console.log(
                    "Video playback error:",
                    error
                );

            }
        );

}


/* ==========================================
   CONTINUE TO ADVENTURE
========================================== */

function continueToAdventure() {

    const video =
        document.getElementById(
            "welcome-video"
        );


    video.pause();


    document
        .getElementById(
            "welcome-popup"
        )
        .classList.remove("show");


    document
        .getElementById(
            "password-page"
        )
        .style.display =
        "none";


    document
        .getElementById(
            "game-screen"
        )
        .classList.remove(
            "hidden"
        );

}
