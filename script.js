/* =====================================================
   🎂 BIRTHDAY SECRET — PAGE 1
===================================================== */


/* =====================================================
   🔐 PASSWORD
===================================================== */

const SECRET_PASSWORD = "03092005";


let enteredPassword = "";


/* =====================================================
   🔢 NUMBER BUTTON
===================================================== */

function pressNumber(number) {

    if (enteredPassword.length >= 8) {
        return;
    }


    enteredPassword += number;


    updatePasswordDisplay();


    document.getElementById(
        "password-message"
    ).textContent = "";


    /*
        Automatically check the password
        once all 8 numbers have been entered.
    */

    if (enteredPassword.length === 8) {

        setTimeout(() => {

            checkPassword();

        }, 250);

    }

}


/* =====================================================
   🔢 UPDATE PASSWORD DISPLAY
===================================================== */

function updatePasswordDisplay() {

    const boxes =
        document.querySelectorAll(
            "#password-display span"
        );


    boxes.forEach(
        (box, index) => {

            if (
                index <
                enteredPassword.length
            ) {

                box.textContent = "●";

            }

            else {

                box.textContent = "_";

            }

        }
    );

}


/* =====================================================
   ❌ DELETE NUMBER
===================================================== */

function deleteNumber() {

    enteredPassword =
        enteredPassword.slice(
            0,
            -1
        );


    updatePasswordDisplay();


    document.getElementById(
        "password-message"
    ).textContent = "";

}


/* =====================================================
   🧹 CLEAR PASSWORD
===================================================== */

function clearPassword() {

    enteredPassword = "";


    updatePasswordDisplay();


    document.getElementById(
        "password-message"
    ).textContent = "";

}


/* =====================================================
   🔐 CHECK PASSWORD
===================================================== */

function checkPassword() {

    if (
        enteredPassword ===
        SECRET_PASSWORD
    ) {

        correctPassword();

    }

    else {

        wrongPassword();

    }

}


/* =====================================================
   ❌ WRONG PASSWORD
===================================================== */

function wrongPassword() {

    const message =
        document.getElementById(
            "password-message"
        );


    message.textContent =
        "❌ Oye! Galat password! 😂";


    /*
        Show the meme popup.
    */

    document
        .getElementById(
            "wrong-popup"
        )
        .classList.add("show");


    /*
        Clear the password
        so they can try again.
    */

    enteredPassword = "";


    updatePasswordDisplay();

}


/* =====================================================
   ❌ CLOSE WRONG POPUP
===================================================== */

function closeWrongPopup() {

    document
        .getElementById(
            "wrong-popup"
        )
        .classList.remove("show");


    document.getElementById(
        "password-message"
    ).textContent = "";


}


/* =====================================================
   ✅ CORRECT PASSWORD
===================================================== */

function correctPassword() {

    document.getElementById(
        "password-message"
    ).textContent =
        "🎉 Correct! Welcome, Chirkoot!";


    /*
        Small delay makes the success
        feel more dramatic.
    */

    setTimeout(() => {

        openWelcomeVideo();

    }, 500);

}


/* =====================================================
   🎥 OPEN WELCOME VIDEO
===================================================== */

function openWelcomeVideo() {

    const popup =
        document.getElementById(
            "welcome-popup"
        );


    popup.classList.add("show");


    const video =
        document.getElementById(
            "welcome-video"
        );


    /*
        Because the user just clicked
        the password buttons, browsers
        usually allow sound here.
    */

    video.currentTime = 0;


    video.muted = false;


    video.volume = 1;


    const playPromise =
        video.play();


    if (
        playPromise !== undefined
    ) {

        playPromise.catch(
            () => {

                /*
                    If the browser still blocks
                    autoplay with sound, the
                    video controls will allow
                    the user to press Play.
                */

                console.log(
                    "Video autoplay was blocked by the browser."
                );

            }
        );

    }

}


/* =====================================================
   🎥 VIDEO FINISHED
===================================================== */

document.addEventListener(
    "DOMContentLoaded",
    () => {

        const video =
            document.getElementById(
                "welcome-video"
            );


        if (!video) {
            return;
        }


        video.addEventListener(
            "ended",
            () => {

                document
                    .getElementById(
                        "continue-button"
                    )
                    .classList.add(
                        "ready"
                    );

            }
        );

    }
);


/* =====================================================
   ➡️ NEXT PAGE
===================================================== */

function goToNextPage() {

    /*
        FOR NOW:
        We simply show a temporary message.

        In the NEXT STEP we will connect this
        to your full Birthday Adventure page.
    */


    const video =
        document.getElementById(
            "welcome-video"
        );


    video.pause();


    document
        .getElementById(
            "welcome-popup"
        )
        .classList.remove(
            "show"
        );


    alert(
        "🎉 PASSWORD ACCEPTED!\n\nPAGE 2 COMING NEXT! 💗"
    );

}


/* =====================================================
   ⌨️ KEYBOARD SUPPORT
===================================================== */

document.addEventListener(
    "keydown",
    event => {

        /*
            Allow keyboard numbers too.
        */

        if (
            event.key >= "0" &&
            event.key <= "9"
        ) {

            pressNumber(
                event.key
            );

        }


        if (
            event.key === "Backspace"
        ) {

            deleteNumber();

        }


        if (
            event.key === "Escape"
        ) {

            closeWrongPopup();

        }

    }
);


/* =====================================================
   🖼️ PHOTO ERROR FALLBACK
===================================================== */

document.addEventListener(
    "DOMContentLoaded",
    () => {

        const photo =
            document.getElementById(
                "my-photo"
            );


        if (!photo) {
            return;
        }


        photo.addEventListener(
            "error",
            () => {

                /*
                    If your photo hasn't been added yet,
                    use a temporary birthday image.

                    Later just add:

                    media/my-photo.jpg

                    and this fallback won't be needed.
                */

                photo.src =
                    "https://placehold.co/600x600/ffb6d9/ffffff?text=YOUR+PHOTO";

            }
        );

    }
);
