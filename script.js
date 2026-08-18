/* =========================================
   PAGE 1 - BIRTHDAY SURPRISE
========================================= */

document.addEventListener("DOMContentLoaded", function () {

    /* -------------------------------------
       GET ELEMENTS
    ------------------------------------- */

    const giftScreen = document.getElementById("gift-screen");
    const entranceScreen = document.getElementById("entrance-screen");
    const passwordScreen = document.getElementById("password-screen");

    const envelope = document.getElementById("envelope");
    const openGiftButton = document.getElementById("open-gift-btn");

    const curiousButton = document.getElementById("curious-btn");

    const passwordInput = document.getElementById("password-input");
    const unlockButton = document.getElementById("unlock-btn");

    const wrongPopup = document.getElementById("wrong-popup");
    const tryAgainButton = document.getElementById("try-again-btn");

    const successPopup = document.getElementById("success-popup");
    const continueButton = document.getElementById("continue-btn");

    const passwordHint = document.getElementById("password-hint");

    const backgroundMusic = document.getElementById("background-music");


    /* -------------------------------------
       SECRET PASSWORD
    ------------------------------------- */

    const correctPassword = "0309";


    /* -------------------------------------
       SHOW SCREEN FUNCTION
    ------------------------------------- */

    function showScreen(screenToShow) {

        const screens = [
            giftScreen,
            entranceScreen,
            passwordScreen
        ];

        screens.forEach(function (screen) {

            screen.classList.remove("active");

        });

        setTimeout(function () {

            screenToShow.classList.add("active");

        }, 150);

    }


    /* -------------------------------------
       START MUSIC
    ------------------------------------- */

    function startMusic() {

        if (!backgroundMusic) {
            return;
        }

        backgroundMusic.volume = 0.35;

        const playPromise = backgroundMusic.play();

        if (playPromise !== undefined) {

            playPromise.catch(function () {

                console.log("Music could not start automatically.");

            });

        }

    }


    /* -------------------------------------
       OPEN THE GIFT
    ------------------------------------- */

    function openGift() {

        envelope.classList.add("unlock-success");

        openGiftButton.disabled = true;

        setTimeout(function () {

            showScreen(entranceScreen);

        }, 700);

    }


    openGiftButton.addEventListener("click", openGift);

    envelope.addEventListener("click", openGift);


    /* -------------------------------------
       OPEN PASSWORD SCREEN
    ------------------------------------- */

    curiousButton.addEventListener("click", function () {

        showScreen(passwordScreen);

        setTimeout(function () {

            passwordInput.focus();

        }, 700);

    });


    /* -------------------------------------
       CHECK PASSWORD
    ------------------------------------- */

    function checkPassword() {

        const enteredPassword = passwordInput.value.trim();

        passwordHint.textContent = "";

        if (enteredPassword === correctPassword) {

            unlockButton.disabled = true;

            passwordInput.classList.add("unlock-success");

            startMusic();

            setTimeout(function () {

                successPopup.classList.add("show");

            }, 500);

        } else {

            passwordInput.value = "";

            wrongPopup.classList.add("show");

        }

    }


    unlockButton.addEventListener("click", checkPassword);


    /* -------------------------------------
       ENTER KEY ALSO UNLOCKS
    ------------------------------------- */

    passwordInput.addEventListener("keydown", function (event) {

        if (event.key === "Enter") {

            checkPassword();

        }

    });


    /* -------------------------------------
       TRY AGAIN
    ------------------------------------- */

    tryAgainButton.addEventListener("click", function () {

        wrongPopup.classList.remove("show");

        setTimeout(function () {

            passwordInput.focus();

        }, 300);

    });


    /* -------------------------------------
       CONTINUE TO PAGE 2
    ------------------------------------- */

    continueButton.addEventListener("click", function () {

        /*
         * Page 2 will be created later.
         *
         * For now, this keeps the button from
         * causing an error while Page 2 is
         * being designed.
         */

        successPopup.classList.remove("show");

        passwordScreen.classList.remove("active");

        setTimeout(function () {

            alert(
                "Page 2 is ready to be created next! ❤️"
            );

            passwordScreen.classList.add("active");

        }, 500);

    });


    /* -------------------------------------
       CLOSE POPUP IF USER CLICKS OUTSIDE
    ------------------------------------- */

    wrongPopup.addEventListener("click", function (event) {

        if (event.target === wrongPopup) {

            wrongPopup.classList.remove("show");

        }

    });


    successPopup.addEventListener("click", function (event) {

        if (event.target === successPopup) {

            successPopup.classList.remove("show");

        }

    });

});
