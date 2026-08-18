/* =====================================================
   🎂 BIRTHDAY ADVENTURE
===================================================== */


/* =====================================================
   PASSWORD
===================================================== */

const PASSWORD = "03092005";

let enteredPassword = "";


/* =====================================================
   NUMERIC KEYPAD
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
       Automatically check when
       all 8 digits are entered.
    */

    if (enteredPassword.length === 8) {

        setTimeout(() => {

            checkPassword();

        }, 250);

    }

}


/* =====================================================
   UPDATE PASSWORD DISPLAY
===================================================== */

function updatePasswordDisplay() {

    const slots =
        document.querySelectorAll(
            "#password-display span"
        );


    slots.forEach(
        (slot, index) => {

            if (
                index <
                enteredPassword.length
            ) {

                slot.textContent = "●";

                slot.classList.add(
                    "filled"
                );

            }

            else {

                slot.textContent = "_";

                slot.classList.remove(
                    "filled"
                );

            }

        }
    );

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
        enteredPassword === PASSWORD
    ) {

        correctPassword();

    }

    else {

        wrongPassword();

    }

}


/* =====================================================
   WRONG PASSWORD
===================================================== */

function wrongPassword() {

    const message =
        document.getElementById(
            "password-message"
        );


    message.textContent =
        "❌ WRONG PASSWORD";


    /*
       Small shake animation
    */

    const keypad =
        document.querySelector(
            ".keypad"
        );


    keypad.animate(

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
                    "translateX(-7px)"
            },

            {
                transform:
                    "translateX(0)"
            }

        ],

        {
            duration: 400
        }

    );


    /*
       Show meme after
       short delay.
    */

    setTimeout(() => {

        document
            .getElementById(
                "wrong-popup"
            )
            .classList.add("show");

    }, 350);


    clearPassword();

}


/* =====================================================
   CLOSE WRONG PASSWORD
===================================================== */

function closeWrongPopup() {

    document
        .getElementById(
            "wrong-popup"
        )
        .classList.remove("show");

}


/* =====================================================
   CORRECT PASSWORD
===================================================== */

function correctPassword() {

    document.getElementById(
        "password-message"
    ).textContent =
        "✅ ACCESS GRANTED";


    /*
       Open welcome video.
    */

    setTimeout(() => {

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

           Because the user just clicked
           the keypad, browsers normally
           allow video with sound.
        */

        video.currentTime = 0;


        video.play()
            .catch(error => {

                console.log(
                    "Video autoplay issue:",
                    error
                );

            });

    }, 500);

}


/* =====================================================
   WELCOME VIDEO FINISHED
===================================================== */

document
    .getElementById("welcome-video")
    .addEventListener(
        "ended",
        () => {

            const popup =
                document.getElementById(
                    "welcome-popup"
                );


            popup.classList.remove(
                "show"
            );


            /*
               Open the original
               Birthday Adventure.
            */

            showBirthdayAdventure();

        }
    );


/* =====================================================
   SHOW BIRTHDAY ADVENTURE
===================================================== */

function showBirthdayAdventure() {

    const passwordScreen =
        document.getElementById(
            "password-screen"
        );


    passwordScreen.style.opacity = "0";

    passwordScreen.style.pointerEvents =
        "none";


    setTimeout(() => {

        passwordScreen.style.display =
            "none";


        const game =
            document.getElementById(
                "game-screen"
            );


        game.classList.add(
            "active"
        );


        createConfetti(100);

        startMusic();

        updateProgress();

    }, 500);

}


/* =====================================================
   ORIGINAL GAME
===================================================== */

const birthdayPerson =
    "Birthday Star";


const birthdayDate =
    "2026-09-15T00:00:00";


const surprises = [

    {
        emoji: "🎀",

        title: "The First Surprise",

        question:
            "What is 2 + 2?",

        answer: "4",

        message: `
            <h3>🎀 You found the first surprise!</h3>

            <p>
                The adventure has officially begun!
                💗
            </p>

            <p>
                Nine more secrets remain...
            </p>
        `
    },


    {
        emoji: "💌",

        title: "A Secret Message",

        question:
            "What do you get when you mix cake, candles and presents?",

        answer: "birthday",

        message: `
            <h3>💌 A Secret Message</h3>

            <p>
                Happy Birthday to one of the
                most amazing people ever! 🥹💗
            </p>

            <p>
                I hope you know how special you are.
            </p>
        `
    },


    {
        emoji: "📸",

        title: "A Special Photo",

        question:
            "What has a face and two hands but cannot smile?",

        answer: "clock",

        message: `
            <h3>📸 A Special Memory</h3>

            <img
                src="media/photo1.jpg"
                alt="Special memory"
            >

            <p>
                A memory worth keeping forever. 💗
            </p>
        `
    },


    {
        emoji: "🎥",

        title: "Secret Video",

        question:
            "What goes up but never comes down?",

        answer: "age",

        message: `
            <h3>🎥 SECRET VIDEO!</h3>

            <video controls playsinline>

                <source
                    src="media/video1.mp4"
                    type="video/mp4"
                >

            </video>

            <p>
                🍿 Enjoy!
            </p>
        `
    },


    {
        emoji: "⭐",

        title: "Birthday Wish",

        question:
            "I shine at night and disappear in the morning. What am I?",

        answer: "star",

        message: `
            <h3>🌟 My Birthday Wish</h3>

            <p>
                May this year bring you happiness,
                laughter, adventures and dreams
                coming true.
            </p>

            <p>
                LOTS OF CAKE. 🎂
            </p>
        `
    },


    {
        emoji: "🦋",

        title: "Something Special",

        question:
            "What has many keys but cannot open a door?",

        answer: "piano",

        message: `
            <h3>🦋 You Found It!</h3>

            <p>
                Never stop being curious,
                funny and completely yourself.
            </p>
        `
    },


    {
        emoji: "🎂",

        title: "Cake Time",

        question:
            "What food is usually the most important part of a birthday?",

        answer: "cake",

        message: `
            <h3>🎂 IMPORTANT ANNOUNCEMENT</h3>

            <p>
                Birthday cake has officially
                been declared calorie-free. 😂
            </p>
        `
    },


    {
        emoji: "💖",

        title: "A Tiny Compliment",

        question:
            "What is the opposite of sad?",

        answer: "happy",

        message: `
            <h3>💖 You Are Awesome</h3>

            <p>
                You are genuinely amazing.
            </p>
        `
    },


    {
        emoji: "🌈",

        title: "The Rainbow Surprise",

        question:
            "What comes after the letter A?",

        answer: "b",

        message: `
            <h3>🌈 You Made It!</h3>

            <p>
                Every little surprise was just
                an excuse to remind you that
                you're pretty amazing.
            </p>
        `
    },


    {
        emoji: "🔮",

        title: "The Final Secret",

        question:
            "What do you say when someone has a birthday?",

        answer: "happy birthday",

        message: `
            <h3>🔮 THE FINAL SECRET!</h3>

            <p>
                You unlocked the final surprise!
            </p>
        `
    }

];


let currentChallenge = 0;

let unlocked = [];

let musicPlaying = false;

let easterClicks = 0;


/* =====================================================
   OPEN CHALLENGE
===================================================== */

function openChallenge(index) {

    currentChallenge = index;

    const challenge =
        surprises[index];


    if (unlocked[index]) {

        showSurprise(index);

        return;

    }


    document.getElementById(
        "challenge-emoji"
    ).textContent =
        challenge.emoji;


    document.getElementById(
        "challenge-title"
    ).textContent =
        challenge.title;


    document.getElementById(
        "challenge-question"
    ).textContent =
        challenge.question;


    document.getElementById(
        "wrong-answer"
    ).textContent =
        "";


    const input =
        document.getElementById(
            "answer-input"
        );


    input.value = "";


    document
        .getElementById(
            "challenge-popup"
        )
        .classList.add("show");


    setTimeout(() => {

        input.focus();

    }, 200);

}


/* =====================================================
   CHECK GAME ANSWER
===================================================== */

function checkAnswer() {

    const input =
        document.getElementById(
            "answer-input"
        );


    const userAnswer =
        input.value
            .trim()
            .toLowerCase();


    const correctAnswer =
        surprises[currentChallenge]
            .answer
            .trim()
            .toLowerCase();


    const error =
        document.getElementById(
            "wrong-answer"
        );


    if (
        userAnswer ===
        correctAnswer
    ) {

        unlocked[currentChallenge] =
            true;


        error.textContent =
            "🎉 CORRECT!";


        createConfetti(80);

        updateProgress();


        setTimeout(() => {

            closeChallenge();

            showSurprise(
                currentChallenge
            );

        }, 600);

    }

    else {

        error.textContent =
            "❌ Nope! Try again! 💗";

    }

}


/* =====================================================
   CLOSE CHALLENGE
===================================================== */

function closeChallenge() {

    document
        .getElementById(
            "challenge-popup"
        )
        .classList.remove("show");

}


/* =====================================================
   SHOW SURPRISE
===================================================== */

function showSurprise(index) {

    const surprise =
        surprises[index];


    document.getElementById(
        "surprise-emoji"
    ).textContent =
        surprise.emoji;


    document.getElementById(
        "surprise-title"
    ).textContent =
        surprise.title;


    document.getElementById(
        "surprise-content"
    ).innerHTML =
        surprise.message;


    document
        .getElementById(
            "surprise-popup"
        )
        .classList.add("show");


    createConfetti(50);


    if (
        unlocked.filter(Boolean).length ===
        surprises.length
    ) {

        setTimeout(() => {

            closeSurprise();

            showFinal();

        }, 1800);

    }

}


/* =====================================================
   CLOSE SURPRISE
===================================================== */

function closeSurprise() {

    document
        .getElementById(
            "surprise-popup"
        )
        .classList.remove("show");

}


/* =====================================================
   PROGRESS
===================================================== */

function updateProgress() {

    const amount =
        unlocked.filter(Boolean).length;


    document.getElementById(
        "progress-count"
    ).textContent =
        amount;


    const hint =
        document.getElementById(
            "game-hint"
        );


    if (amount === 0) {

        hint.textContent =
            "🔐 Everything is locked...";

    }

    else if (amount < 10) {

        hint.textContent =
            `✨ ${amount} surprise${amount === 1 ? "" : "s"} unlocked!`;

    }

    else {

        hint.textContent =
            "🎉 EVERYTHING UNLOCKED!";

    }

}


/* =====================================================
   FINAL
===================================================== */

function showFinal() {

    document.getElementById(
        "final-name"
    ).textContent =
        birthdayPerson;


    document
        .getElementById(
            "final-popup"
        )
        .classList.add("show");


    createConfetti(200);

}


/* =====================================================
   PARTY
===================================================== */

function massiveParty() {

    createConfetti(350);

}


/* =====================================================
   INSTRUCTIONS
===================================================== */

function showInstructions() {

    document
        .getElementById(
            "instructions-popup"
        )
        .classList.add("show");

}


function closeInstructions() {

    document
        .getElementById(
            "instructions-popup"
        )
        .classList.remove("show");

}


/* =====================================================
   GENERIC CLOSE
===================================================== */

function closeOverlay(id) {

    document
        .getElementById(id)
        .classList.remove("show");

}


/* =====================================================
   LETTER
===================================================== */

function openEnvelope() {

    document
        .getElementById(
            "letter-popup"
        )
        .classList.add("show");

}


function openLetter() {

    const envelope =
        document.querySelector(
            ".envelope"
        );


    const letter =
        document.getElementById(
            "letter-content"
        );


    envelope.classList.add("open");


    setTimeout(() => {

        letter.classList.add("open");

    }, 700);

}


/* =====================================================
   GALLERY
===================================================== */

function openGallery() {

    document
        .getElementById(
            "gallery-popup"
        )
        .classList.add("show");

}


/* =====================================================
   VIDEO ROOM
===================================================== */

function openVideoRoom() {

    document
        .getElementById(
            "video-popup"
        )
        .classList.add("show");

}


/* =====================================================
   RANDOM SURPRISE
===================================================== */

function openRandomSurprise() {

    const randomIndex =
        Math.floor(
            Math.random() *
            surprises.length
        );


    openChallenge(randomIndex);

}


/* =====================================================
   COUNTDOWN
===================================================== */

function openCountdown() {

    document
        .getElementById(
            "countdown-popup"
        )
        .classList.add("show");


    updateCountdown();

}


function updateCountdown() {

    const target =
        new Date(birthdayDate)
            .getTime();


    const now =
        Date.now();


    let difference =
        target - now;


    if (difference < 0) {

        difference =
            new Date(
                new Date(
                    birthdayDate
                ).getFullYear() + 1,

                new Date(
                    birthdayDate
                ).getMonth(),

                new Date(
                    birthdayDate
                ).getDate()
            ).getTime() - now;

    }


    document.getElementById(
        "days"
    ).textContent =
        Math.floor(
            difference /
            86400000
        );


    document.getElementById(
        "hours"
    ).textContent =
        Math.floor(
            difference /
            3600000
        ) % 24;


    document.getElementById(
        "minutes"
    ).textContent =
        Math.floor(
            difference /
            60000
        ) % 60;


    document.getElementById(
        "seconds"
    ).textContent =
        Math.floor(
            difference /
            1000
        ) % 60;

}


setInterval(
    updateCountdown,
    1000
);


/* =====================================================
   MUSIC
===================================================== */

function startMusic() {

    const music =
        document.getElementById(
            "birthday-music"
        );


    music.volume = 0.25;


    music.play()
        .then(() => {

            musicPlaying = true;

            updateMusicButton();

        })
        .catch(() => {

            musicPlaying = false;

        });

}


function toggleMusic() {

    const music =
        document.getElementById(
            "birthday-music"
        );


    if (music.paused) {

        music.play();

        musicPlaying = true;

    }

    else {

        music.pause();

        musicPlaying = false;

    }


    updateMusicButton();

}


function updateMusicButton() {

    document.getElementById(
        "music-button"
    ).textContent =
        musicPlaying
            ? "🔊"
            : "🎵";

}


/* =====================================================
   NIGHT MODE
===================================================== */

function toggleNightMode() {

    document.body.classList.toggle(
        "night"
    );


    const button =
        document.getElementById(
            "theme-button"
        );


    button.textContent =
        document.body.classList.contains(
            "night"
        )
            ? "☀️"
            : "🌙";

}


/* =====================================================
   CONFETTI
===================================================== */

function createConfetti(amount) {

    const container =
        document.getElementById(
            "confetti-container"
        );


    const colors = [

        "#ff65aa",
        "#a66ee8",
        "#ffd45c",
        "#65d9ff",
        "#72df9a"

    ];


    for (
        let i = 0;
        i < amount;
        i++
    ) {

        const piece =
            document.createElement(
                "div"
            );


        piece.className =
            "confetti";


        piece.style.left =
            Math.random() * 100 +
            "vw";


        piece.style.background =
            colors[
                Math.floor(
                    Math.random() *
                    colors.length
                )
            ];


        piece.style.width =
            6 +
            Math.random() * 8 +
            "px";


        piece.style.height =
            10 +
            Math.random() * 15 +
            "px";


        piece.style.animationDuration =
            2 +
            Math.random() * 4 +
            "s";


        container.appendChild(
            piece
        );


        setTimeout(() => {

            piece.remove();

        }, 7000);

    }

}


/* =====================================================
   EASTER EGG
===================================================== */

function activateEasterEgg() {

    easterClicks++;


    if (
        easterClicks >= 5
    ) {

        document
            .getElementById(
                "easter-popup"
            )
            .classList.add("show");


        createConfetti(100);

        easterClicks = 0;

    }

}


/* =====================================================
   SECRET FIREWORKS
===================================================== */

function secretFireworks() {

    closeOverlay(
        "easter-popup"
    );

    createConfetti(250);

}


/* =====================================================
   STARTUP
===================================================== */

document.addEventListener(
    "DOMContentLoaded",
    () => {

        updatePasswordDisplay();

    }
);
