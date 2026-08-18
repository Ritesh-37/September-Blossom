/* =====================================================
   🎂 BIRTHDAY ADVENTURE
   MAIN SETTINGS
===================================================== */


/* =====================================================
   👤 BIRTHDAY PERSON
===================================================== */

const birthdayPerson = "Birthday Star";


/* =====================================================
   🎂 BIRTHDAY DATE
===================================================== */

const birthdayDate =
    "2026-09-15T00:00:00";


/* =====================================================
   🔐 PASSWORD
===================================================== */

const correctPassword = "03092005";

let enteredPassword = "";


/* =====================================================
   🎁 OLD GAME DATA
===================================================== */

const surprises = [

    {
        emoji: "🎀",
        title: "The First Surprise",
        question: "What is 2 + 2?",
        answer: "4",

        message: `
            <h3>🎀 You found the first surprise!</h3>
            <p>The adventure has officially begun! 💗</p>
            <p>Nine more secrets remain...</p>
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
            <p>I hope you know how special you are.</p>
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

            <p>Look what I found! 🌸</p>

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

            <p>🍿 Enjoy!</p>
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

            <p>
                That's what makes you awesome. 💗
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
                been declared calorie-free.
            </p>

            <p>
                Yes, I made the rules. 😂
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

            <p>
                Never forget that someone
                thinks you're special.
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

            <p>💗 Happy Birthday!</p>
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

            <p>
                But there is still one giant
                celebration waiting...
            </p>
        `
    }

];


let currentChallenge = 0;

let unlocked = [];

let musicPlaying = false;

let easterClicks = 0;


/* =====================================================
   🔢 PASSWORD KEYPAD
===================================================== */

function addNumber(number) {

    if (enteredPassword.length >= 8) {
        return;
    }

    enteredPassword += number;

    updatePasswordDisplay();

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
   PASSWORD DISPLAY
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
   🔐 CHECK PASSWORD
===================================================== */

function checkPassword() {

    const message =
        document.getElementById(
            "password-message"
        );


    if (
        enteredPassword ===
        correctPassword
    ) {

        message.textContent =
            "🎉 ACCESS GRANTED!";


        message.style.color =
            "#3baf73";


        openWelcomeVideo();

    }

    else {

        message.textContent =
            "❌ WRONG PASSWORD!";


        message.style.color =
            "#e94f79";


        showWrongPassword();

    }

}


/* =====================================================
   ❌ WRONG PASSWORD
===================================================== */

function showWrongPassword() {

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

    clearPassword();

}


/* =====================================================
   🎥 WELCOME VIDEO
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
       Because this function happens after
       the user clicks the keypad, browsers
       allow video with sound.
    */

    video.currentTime = 0;


    video.play()
        .catch(
            () => {

                /*
                   If the browser still blocks
                   autoplay, the video controls
                   are available.

                   The user can simply press Play.
                */

                console.log(
                    "Video autoplay was blocked."
                );

            }
        );

}


/* =====================================================
   🎥 WHEN WELCOME VIDEO FINISHES
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

                closeWelcomeVideo();

                enterBirthdayAdventure();

            }
        );

    }
);


/* =====================================================
   CLOSE WELCOME VIDEO
===================================================== */

function closeWelcomeVideo() {

    const popup =
        document.getElementById(
            "welcome-popup"
        );


    const video =
        document.getElementById(
            "welcome-video"
        );


    video.pause();

    popup.classList.remove("show");

}


/* =====================================================
   🎂 ENTER MAIN BIRTHDAY ADVENTURE
===================================================== */

function enterBirthdayAdventure() {

    const passwordScreen =
        document.getElementById(
            "password-screen"
        );


    const gameScreen =
        document.getElementById(
            "game-screen"
        );


    passwordScreen.classList.add("hide");


    setTimeout(
        () => {

            gameScreen.classList.add(
                "unlocked"
            );


            createConfetti(100);

            startMusic();

            updateProgress();

        },
        700
    );

}


/* =====================================================
   OLD GAME
===================================================== */

function startGame() {

    enterBirthdayAdventure();

}


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
    ).textContent = "";


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


    setTimeout(
        () => input.focus(),
        200
    );

}


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


        setTimeout(
            () => {

                closeChallenge();

                showSurprise(
                    currentChallenge
                );

            },
            600
        );

    }

    else {

        error.textContent =
            "❌ Nope! Try again! 💗";

    }

}


document.addEventListener(
    "keydown",
    event => {

        if (
            event.key === "Enter" &&
            document
                .getElementById(
                    "challenge-popup"
                )
                .classList.contains("show")
        ) {

            checkAnswer();

        }

    }
);


function closeChallenge() {

    document
        .getElementById(
            "challenge-popup"
        )
        .classList.remove("show");

}


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

        setTimeout(
            () => {

                closeSurprise();

                showFinal();

            },
            1800
        );

    }

}


function closeSurprise() {

    document
        .getElementById(
            "surprise-popup"
        )
        .classList.remove("show");

}


function updateProgress() {

    const amount =
        unlocked.filter(Boolean).length;


    const counter =
        document.getElementById(
            "progress-count"
        );


    if (counter) {

        counter.textContent =
            amount;

    }


    const hint =
        document.getElementById(
            "game-hint"
        );


    if (!hint) {
        return;
    }


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


    setTimeout(
        () => {

            letter.classList.add("open");

        },
        700
    );

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
        new Date(
            birthdayDate
        ).getTime();


    const now =
        new Date().getTime();


    let difference =
        target - now;


    if (difference < 0) {

        const oldDate =
            new Date(
                birthdayDate
            );


        const nextDate =
            new Date(
                oldDate.getFullYear() + 1,
                oldDate.getMonth(),
                oldDate.getDate()
            );


        difference =
            nextDate.getTime() -
            now;

    }


    const days =
        Math.floor(
            difference /
            (1000 * 60 * 60 * 24)
        );


    const hours =
        Math.floor(
            (difference /
                (1000 * 60 * 60)) %
            24
        );


    const minutes =
        Math.floor(
            (difference /
                (1000 * 60)) %
            60
        );


    const seconds =
        Math.floor(
            (difference / 1000) %
            60
        );


    document.getElementById(
        "days"
    ).textContent =
        days;


    document.getElementById(
        "hours"
    ).textContent =
        hours;


    document.getElementById(
        "minutes"
    ).textContent =
        minutes;


    document.getElementById(
        "seconds"
    ).textContent =
        seconds;

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


    if (!music) {
        return;
    }


    music.volume = 0.25;


    music.play()
        .then(
            () => {

                musicPlaying = true;

                updateMusicButton();

            }
        )
        .catch(
            () => {

                musicPlaying = false;

            }
        );

}


function toggleMusic() {

    const music =
        document.getElementById(
            "birthday-music"
        );


    if (!music) {
        return;
    }


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

    const button =
        document.getElementById(
            "music-button"
        );


    if (!button) {
        return;
    }


    button.textContent =
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


    if (
        document.body.classList.contains(
            "night"
        )
    ) {

        button.textContent =
            "☀️";

    }

    else {

        button.textContent =
            "🌙";

    }

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

    const element =
        document.getElementById(id);


    if (element) {

        element.classList.remove(
            "show"
        );

    }

}


/* =====================================================
   CONFETTI
===================================================== */

function createConfetti(amount) {

    const container =
        document.getElementById(
            "confetti-container"
        );


    if (!container) {
        return;
    }


    const colors = [

        "#ff65aa",
        "#a66ee8",
        "#ffd45c",
        "#65d9ff",
        "#72df9a",
        "#ff8d8d",
        "#ffffff"

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
            Math.random() *
            100 +
            "vw";


        piece.style.background =
            colors[
                Math.floor(
                    Math.random() *
                    colors.length
                )
            ];


        piece.style.animationDuration =
            (
                2 +
                Math.random() * 4
            ) +
            "s";


        piece.style.width =
            (
                6 +
                Math.random() * 8
            ) +
            "px";


        piece.style.height =
            (
                10 +
                Math.random() * 15
            ) +
            "px";


        container.appendChild(
            piece
        );


        setTimeout(
            () => piece.remove(),
            7000
        );

    }

}


/* =====================================================
   FLOATING ITEMS
===================================================== */

const floatingItems = [

    "💗",
    "💕",
    "💖",
    "💜",
    "✨",
    "⭐",
    "🌸",
    "🎀",
    "🦋",
    "🎂"

];


function createFloatingItem() {

    const container =
        document.getElementById(
            "floating-items"
        );


    if (!container) {
        return;
    }


    const item =
        document.createElement(
            "div"
        );


    item.className =
        "floating";


    item.textContent =
        floatingItems[
            Math.floor(
                Math.random() *
                floatingItems.length
            )
        ];


    item.style.left =
        Math.random() *
        100 +
        "vw";


    item.style.fontSize =
        (
            15 +
            Math.random() * 25
        ) +
        "px";


    item.style.animationDuration =
        (
            7 +
            Math.random() * 8
        ) +
        "s";


    container.appendChild(
        item
    );


    setTimeout(
        () => item.remove(),
        16000
    );

}


setInterval(
    createFloatingItem,
    800
);


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
   FIREWORKS
===================================================== */

const canvas =
    document.getElementById(
        "fireworks"
    );


let ctx = null;


if (canvas) {

    ctx =
        canvas.getContext("2d");

}


let fireworks = [];


function resizeCanvas() {

    if (!canvas) {
        return;
    }


    canvas.width =
        window.innerWidth;

    canvas.height =
        window.innerHeight;

}


resizeCanvas();


window.addEventListener(
    "resize",
    resizeCanvas
);


function fireworksShow() {

    if (!canvas || !ctx) {
        return;
    }


    for (
        let i = 0;
        i < 5;
        i++
    ) {

        setTimeout(
            () => {

                createFirework(
                    Math.random() *
                    canvas.width,

                    Math.random() *
                    canvas.height *
                    0.6
                );

            },
            i * 250
        );

    }


    animateFireworks();

}


function createFirework(x, y) {

    if (!canvas) {
        return;
    }


    const colors = [

        "#ff5ca8",
        "#ffd45c",
        "#7de2ff",
        "#c982ff",
        "#ffffff"

    ];


    const color =
        colors[
            Math.floor(
                Math.random() *
                colors.length
            )
        ];


    for (
        let i = 0;
        i < 60;
        i++
    ) {

        const angle =
            Math.random() *
            Math.PI *
            2;


        const speed =
            2 +
            Math.random() * 5;


        fireworks.push({

            x: x,

            y: y,

            vx:
                Math.cos(angle) *
                speed,

            vy:
                Math.sin(angle) *
                speed,

            life: 80,

            color: color

        });

    }

}


function animateFireworks() {

    if (!canvas || !ctx) {
        return;
    }


    ctx.clearRect(
        0,
        0,
        canvas.width,
        canvas.height
    );


    fireworks =
        fireworks.filter(
            particle => {

                particle.x +=
                    particle.vx;

                particle.y +=
                    particle.vy;

                particle.vy +=
                    0.04;

                particle.life--;


                ctx.globalAlpha =
                    particle.life /
                    80;


                ctx.fillStyle =
                    particle.color;


                ctx.beginPath();


                ctx.arc(
                    particle.x,
                    particle.y,
                    3,
                    0,
                    Math.PI * 2
                );


                ctx.fill();


                return particle.life > 0;

            }
        );


    ctx.globalAlpha = 1;


    if (
        fireworks.length > 0
    ) {

        requestAnimationFrame(
            animateFireworks
        );

    }

}


function secretFireworks() {

    closeOverlay(
        "easter-popup"
    );

    fireworksShow();

    createConfetti(250);

}


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

    fireworksShow();

}


function massiveParty() {

    createConfetti(350);

    fireworksShow();


    setTimeout(
        fireworksShow,
        800
    );


    setTimeout(
        fireworksShow,
        1600
    );

}


/* =====================================================
   🚀 STARTUP
===================================================== */

document.addEventListener(
    "DOMContentLoaded",
    () => {

        /*
           IMPORTANT:

           We do NOT automatically open the old
           birthday adventure.

           The password page stays visible until
           the correct password is entered.
        */

        updatePasswordDisplay();

        createConfetti(25);

    }
);
