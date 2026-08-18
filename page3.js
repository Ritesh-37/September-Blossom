document.addEventListener("DOMContentLoaded", function () {

    const transition =
        document.getElementById("pageTransition");

    const introScreen =
        document.getElementById("introScreen");

    const universe =
        document.getElementById("universe");

    const exploreButton =
        document.getElementById("exploreButton");

    const memoryStars =
        document.querySelectorAll(".memory-star");

    const memoryModal =
        document.getElementById("memoryModal");

    const closeMemory =
        document.getElementById("closeMemory");

    const memoryDone =
        document.getElementById("memoryDone");

    const memoryTitle =
        document.getElementById("memoryTitle");

    const memoryText =
        document.getElementById("memoryText");

    const memoryNumber =
        document.getElementById("memoryNumber");

    const memoryIcon =
        document.getElementById("memoryIcon");

    const progressText =
        document.getElementById("progressText");

    const progressFill =
        document.getElementById("progressFill");

    const universeComplete =
        document.getElementById("universeComplete");

    const continueButton =
        document.getElementById("continueButton");

    const starContainer =
        document.getElementById("stars");


    /* =========================================
       MEMORY CONTENT
    ========================================== */

    const memories = [

        {
            title: "Our Beginning",
            icon: "💫",
            text:
                'It all started with something so simple. I sent you a follow request... and one day, you accepted it. Then came one tiny word that started something much bigger than either of us knew... "Hi." ❤️'
        },

        {
            title: "12.03.26",
            icon: "📅",
            text:
                "12.03.26 — the day we started talking. Just a date on a calendar, but one that became the beginning of so many conversations, little moments and memories."
        },

        {
            title: "That First Day",
            icon: "🥹",
            text:
                "One of my favorite little memories... you falling asleep on my lap when we were together for the first day. Maybe it was a small moment, but it made me feel incredibly lucky."
        },

        {
            title: "A Little Confession",
            icon: "😂",
            text:
                'The first time I heard your voice, I told you that you sounded very young. Looking back... I have absolutely no idea why I thought saying that was a good idea. 😂'
        },

        {
            title: "Something I Love",
            icon: "✨",
            text:
                "I love how charismatic you are. How interactive you are. How full of life you are. You have this energy that makes being around you feel different... and I absolutely love that about you."
        },

        {
            title: "A Secret",
            icon: "❤️",
            text:
                "Here's something I hope you never forget: I'm genuinely blessed to have you as someone so close to me. Around you, I feel comfortable. I feel loved. And you have a very special place in my life."
        }

    ];


    /* =========================================
       STATE
    ========================================== */

    let discovered = 0;

    let currentMemory = null;

    const discoveredStars = [];


    /* =========================================
       PAGE FADE IN
    ========================================== */

    setTimeout(function () {

        transition.classList.add("fade-out");

    }, 300);


    /* =========================================
       BACKGROUND STARS
    ========================================== */

    for (let i = 0; i < 90; i++) {

        const star =
            document.createElement("span");

        star.className =
            "background-star";

        star.textContent =
            Math.random() > .82
                ? "✦"
                : "•";

        star.style.left =
            Math.random() * 100 + "%";

        star.style.top =
            Math.random() * 100 + "%";

        star.style.animationDelay =
            Math.random() * 4 + "s";

        star.style.animationDuration =
            (2 + Math.random() * 4) + "s";

        starContainer.appendChild(star);

    }


    /* =========================================
       SHOOTING STARS
    ========================================== */

    function createShootingStar() {

        if (!universe.classList.contains("active")) {
            return;
        }

        const shootingStar =
            document.createElement("div");

        shootingStar.className =
            "shooting-star";

        shootingStar.style.left =
            (60 + Math.random() * 40) + "%";

        shootingStar.style.top =
            (5 + Math.random() * 35) + "%";

        document.body.appendChild(
            shootingStar
        );

        setTimeout(function () {

            shootingStar.remove();

        }, 1500);

    }


    setInterval(
        createShootingStar,
        5000
    );


    /* =========================================
       MOUSE STAR REACTION
    ========================================== */

    document.addEventListener(
        "mousemove",
        function (event) {

            const mouseX =
                event.clientX;

            const mouseY =
                event.clientY;

            memoryStars.forEach(
                function (star) {

                    const rect =
                        star.getBoundingClientRect();

                    const centerX =
                        rect.left +
                        rect.width / 2;

                    const centerY =
                        rect.top +
                        rect.height / 2;

                    const distance =
                        Math.sqrt(
                            Math.pow(
                                mouseX - centerX,
                                2
                            ) +
                            Math.pow(
                                mouseY - centerY,
                                2
                            )
                        );

                    if (distance < 180) {

                        const move =
                            Math.max(
                                0,
                                (180 - distance) / 180
                            );

                        const directionX =
                            centerX < mouseX
                                ? -1
                                : 1;

                        const directionY =
                            centerY < mouseY
                                ? -1
                                : 1;

                        star.style.transform =
                            "translate(" +
                            directionX *
                            move *
                            8 +
                            "px, " +
                            directionY *
                            move *
                            8 +
                            "px) scale(" +
                            (1 + move * .15) +
                            ")";

                    } else {

                        star.style.transform =
                            "";

                    }

                }
            );

        }
    );


    /* =========================================
       ENTER UNIVERSE
    ========================================== */

    exploreButton.addEventListener(
        "click",
        function () {

            introScreen.classList.remove(
                "active"
            );

            setTimeout(
                function () {

                    universe.classList.add(
                        "active"
                    );

                    createShootingStar();

                },
                700
            );

        }
    );


    /* =========================================
       OPEN MEMORY
    ========================================== */

    memoryStars.forEach(
        function (star) {

            star.addEventListener(
                "click",
                function () {

                    const index =
                        Number(
                            star.dataset.memory
                        );

                    currentMemory =
                        index;

                    const memory =
                        memories[index];

                    memoryTitle.textContent =
                        memory.title;

                    memoryIcon.textContent =
                        memory.icon;

                    memoryText.textContent =
                        memory.text;

                    memoryNumber.textContent =
                        "MEMORY " +
                        String(
                            index + 1
                        ).padStart(
                            2,
                            "0"
                        );

                    memoryModal.classList.add(
                        "show"
                    );

                }
            );

        }
    );


    /* =========================================
       MARK AS DISCOVERED
    ========================================== */

    memoryDone.addEventListener(
        "click",
        function () {

            if (
                currentMemory !== null &&
                !memoryStars[currentMemory]
                    .classList
                    .contains("discovered")
            ) {

                memoryStars[currentMemory]
                    .classList
                    .add("discovered");

                discoveredStars.push(
                    currentMemory
                );

                discovered++;

                updateProgress();

                if (
                    discoveredStars.length > 1
                ) {

                    drawConstellation();

                }

            }

            closeModal();

        }
    );


    /* =========================================
       PROGRESS
    ========================================== */

    function updateProgress() {

        progressText.textContent =
            discovered +
            " / 6 discovered";

        progressFill.style.width =
            (discovered / 6 * 100) +
            "%";


        if (discovered === 6) {

            setTimeout(
                function () {

                    universeComplete
                        .classList
                        .add("show");

                },
                1200
            );

        }

    }


    /* =========================================
       CONSTELLATION
    ========================================== */

    function drawConstellation() {

        document
            .querySelectorAll(
                ".constellation-line"
            )
            .forEach(
                function (line) {

                    line.remove();

                }
            );


        for (
            let i = 0;
            i < discoveredStars.length - 1;
            i++
        ) {

            const first =
                memoryStars[
                    discoveredStars[i]
                ];

            const second =
                memoryStars[
                    discoveredStars[i + 1]
                ];

            const firstRect =
                first.getBoundingClientRect();

            const secondRect =
                second.getBoundingClientRect();

            const x1 =
                firstRect.left +
                firstRect.width / 2;

            const y1 =
                firstRect.top +
                firstRect.height / 2;

            const x2 =
                secondRect.left +
                secondRect.width / 2;

            const y2 =
                secondRect.top +
                secondRect.height / 2;

            const dx =
                x2 - x1;

            const dy =
                y2 - y1;

            const distance =
                Math.sqrt(
                    dx * dx +
                    dy * dy
                );

            const angle =
                Math.atan2(
                    dy,
                    dx
                ) *
                180 /
                Math.PI;

            const line =
                document.createElement(
                    "div"
                );

            line.className =
                "constellation-line";

            line.style.width =
                distance + "px";

            line.style.left =
                x1 + "px";

            line.style.top =
                y1 + "px";

            line.style.transform =
                "rotate(" +
                angle +
                "deg)";

            document.body.appendChild(
                line
            );

            requestAnimationFrame(
                function () {

                    line.classList.add(
                        "visible"
                    );

                }
            );

        }

    }


    /* =========================================
       CLOSE MODAL
    ========================================== */

    function closeModal() {

        memoryModal.classList.remove(
            "show"
        );

        currentMemory = null;

    }


    closeMemory.addEventListener(
        "click",
        closeModal
    );


    /* =========================================
       CLICK OUTSIDE
    ========================================== */

    memoryModal.addEventListener(
        "click",
        function (event) {

            if (
                event.target.classList
                    .contains(
                        "modal-backdrop"
                    )
            ) {

                closeModal();

            }

        }
    );


    /* =========================================
       ESCAPE
    ========================================== */

    document.addEventListener(
        "keydown",
        function (event) {

            if (
                event.key === "Escape" &&
                memoryModal.classList.contains(
                    "show"
                )
            ) {

                closeModal();

            }

        }
    );


    /* =========================================
       PAGE 4
    ========================================== */

    continueButton.addEventListener(
        "click",
        function () {

            universeComplete
                .classList
                .remove("show");

            transition.classList.remove(
                "fade-out"
            );

            setTimeout(
                function () {

                    window.location.href =
                        "page4.html";

                },
                900
            );

        }
    );

});
