document.addEventListener("DOMContentLoaded", function () {

    /* =========================================
       ELEMENTS
    ========================================== */

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
       CHECK REQUIRED ELEMENTS
    ========================================== */

    if (
        !introScreen ||
        !universe ||
        !exploreButton ||
        !memoryModal
    ) {
        console.error(
            "Page 3: Required HTML elements are missing."
        );

        return;
    }


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

    if (transition) {

        setTimeout(function () {

            transition.classList.add(
                "fade-out"
            );

        }, 300);

    }


    /* =========================================
       CREATE BACKGROUND STARS
    ========================================== */

    function createBackgroundStars() {

        if (!starContainer) {
            return;
        }

        for (let i = 0; i < 100; i++) {

            const star =
                document.createElement("span");

            star.className =
                "background-star";

            star.textContent =
                Math.random() > 0.8
                    ? "✦"
                    : "•";

            star.style.left =
                Math.random() * 100 + "%";

            star.style.top =
                Math.random() * 100 + "%";

            star.style.animationDelay =
                Math.random() * 4 + "s";

            star.style.animationDuration =
                2 +
                Math.random() * 4 +
                "s";

            starContainer.appendChild(
                star
            );

        }

    }

    createBackgroundStars();


    /* =========================================
       SHOOTING STARS
    ========================================== */

    function createShootingStar() {

        if (
            !universe.classList.contains(
                "active"
            )
        ) {
            return;
        }

        const shootingStar =
            document.createElement("div");

        shootingStar.className =
            "shooting-star";

        shootingStar.style.left =
            65 +
            Math.random() * 35 +
            "%";

        shootingStar.style.top =
            5 +
            Math.random() * 35 +
            "%";

        document.body.appendChild(
            shootingStar
        );

        setTimeout(function () {

            shootingStar.remove();

        }, 1600);

    }


    setInterval(
        createShootingStar,
        5000
    );


    /* =========================================
       MOUSE REACTIVE STARS
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

                        const strength =
                            (180 - distance) /
                            180;

                        const xDirection =
                            centerX < mouseX
                                ? -1
                                : 1;

                        const yDirection =
                            centerY < mouseY
                                ? -1
                                : 1;

                        star.style.transform =
                            "translate(" +
                            xDirection *
                            strength *
                            8 +
                            "px, " +
                            yDirection *
                            strength *
                            8 +
                            "px) scale(" +
                            (
                                1 +
                                strength *
                                0.12
                            ) +
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

            setTimeout(function () {

                universe.classList.add(
                    "active"
                );

                createShootingStar();

            }, 700);

        }
    );


    /* =========================================
       CREATE SVG CONSTELLATION
    ========================================== */

    function getConstellationSVG() {

        let svg =
            document.getElementById(
                "constellation-svg"
            );

        if (svg) {
            return svg;
        }


        svg =
            document.createElementNS(
                "http://www.w3.org/2000/svg",
                "svg"
            );

        svg.id =
            "constellation-svg";


        svg.style.position =
            "fixed";

        svg.style.left =
            "0";

        svg.style.top =
            "0";

        svg.style.width =
            "100vw";

        svg.style.height =
            "100vh";

        svg.style.pointerEvents =
            "none";

        svg.style.zIndex =
            "5";

        svg.style.overflow =
            "visible";


        document.body.appendChild(
            svg
        );


        return svg;

    }


    /* =========================================
       DRAW CONSTELLATION
    ========================================== */

    function drawConstellation() {

        const svg =
            getConstellationSVG();


        /*
         * Remove existing lines.
         */

        while (svg.firstChild) {

            svg.removeChild(
                svg.firstChild
            );

        }


        /*
         * Need at least two
         * discovered stars.
         */

        if (
            discoveredStars.length < 2
        ) {

            return;

        }


        /*
         * Connect every discovered
         * star to the next one.
         */

        for (
            let i = 0;
            i <
            discoveredStars.length - 1;
            i++
        ) {

            const firstStar =
                memoryStars[
                    discoveredStars[i]
                ];

            const secondStar =
                memoryStars[
                    discoveredStars[i + 1]
                ];


            const firstRect =
                firstStar.getBoundingClientRect();

            const secondRect =
                secondStar.getBoundingClientRect();


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


            /*
             * Create SVG line.
             */

            const line =
                document.createElementNS(
                    "http://www.w3.org/2000/svg",
                    "line"
                );


            line.setAttribute(
                "x1",
                x1
            );

            line.setAttribute(
                "y1",
                y1
            );

            line.setAttribute(
                "x2",
                x2
            );

            line.setAttribute(
                "y2",
                y2
            );


            line.setAttribute(
                "stroke",
                "rgba(255,255,255,0.65)"
            );

            line.setAttribute(
                "stroke-width",
                "1.2"
            );

            line.setAttribute(
                "stroke-linecap",
                "round"
            );


            /*
             * Calculate line length.
             */

            const length =
                Math.sqrt(
                    Math.pow(
                        x2 - x1,
                        2
                    ) +
                    Math.pow(
                        y2 - y1,
                        2
                    )
                );


            /*
             * Drawing animation.
             */

            line.style.strokeDasharray =
                length;

            line.style.strokeDashoffset =
                length;

            line.style.filter =
                "drop-shadow(0 0 6px rgba(255,255,255,0.8))";


            svg.appendChild(
                line
            );


            /*
             * Trigger animation.
             */

            requestAnimationFrame(
                function () {

                    line.style.transition =
                        "stroke-dashoffset 1.2s ease";

                    line.style.strokeDashoffset =
                        "0";

                }
            );

        }

    }


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


                    if (
                        !memories[index]
                    ) {

                        return;

                    }


                    currentMemory =
                        index;


                    const memory =
                        memories[index];


                    if (memoryTitle) {

                        memoryTitle.textContent =
                            memory.title;

                    }


                    if (memoryIcon) {

                        memoryIcon.textContent =
                            memory.icon;

                    }


                    if (memoryText) {

                        memoryText.textContent =
                            memory.text;

                    }


                    if (memoryNumber) {

                        memoryNumber.textContent =
                            "MEMORY " +
                            String(
                                index + 1
                            ).padStart(
                                2,
                                "0"
                            );

                    }


                    memoryModal.classList.add(
                        "show"
                    );

                }
            );

        }
    );


    /* =========================================
       DISCOVER MEMORY
    ========================================== */

    if (memoryDone) {

        memoryDone.addEventListener(
            "click",
            function () {

                if (
                    currentMemory === null
                ) {

                    return;

                }


                const selectedStar =
                    memoryStars[
                        currentMemory
                    ];


                /*
                 * Only count it once.
                 */

                if (
                    !selectedStar.classList
                        .contains(
                            "discovered"
                        )
                ) {

                    selectedStar.classList
                        .add(
                            "discovered"
                        );


                    discoveredStars.push(
                        currentMemory
                    );


                    discovered++;


                    updateProgress();


                    /*
                     * Draw constellation
                     * after modal closes.
                     */

                    setTimeout(
                        function () {

                            drawConstellation();

                        },
                        300
                    );

                }


                closeMemoryModal();

            }
        );

    }


    /* =========================================
       UPDATE PROGRESS
    ========================================== */

    function updateProgress() {

        if (progressText) {

            progressText.textContent =
                discovered +
                " / 6 discovered";

        }


        if (progressFill) {

            progressFill.style.width =
                (
                    discovered /
                    memoryStars.length *
                    100
                ) +
                "%";

        }


        /*
         * All memories found.
         */

        if (
            discovered ===
            memoryStars.length
        ) {

            setTimeout(
                function () {

                    if (
                        universeComplete
                    ) {

                        universeComplete
                            .classList
                            .add(
                                "show"
                            );

                    }

                },
                1400
            );

        }

    }


    /* =========================================
       CLOSE MEMORY
    ========================================== */

    function closeMemoryModal() {

        memoryModal.classList.remove(
            "show"
        );

        currentMemory = null;

    }


    if (closeMemory) {

        closeMemory.addEventListener(
            "click",
            closeMemoryModal
        );

    }


    /* =========================================
       CLICK OUTSIDE MODAL
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

                closeMemoryModal();

            }

        }
    );


    /* =========================================
       ESCAPE KEY
    ========================================== */

    document.addEventListener(
        "keydown",
        function (event) {

            if (
                event.key === "Escape"
            ) {

                if (
                    memoryModal.classList
                        .contains(
                            "show"
                        )
                ) {

                    closeMemoryModal();

                }

            }

        }
    );


    /* =========================================
       KEEP CONSTELLATION ALIGNED
    ========================================== */

    window.addEventListener(
        "resize",
        function () {

            if (
                discoveredStars.length >= 2
            ) {

                drawConstellation();

            }

        }
    );


    /* =========================================
       CONTINUE TO PAGE 4
    ========================================== */

    if (continueButton) {

        continueButton.addEventListener(
            "click",
            function () {

                if (
                    transition
                ) {

                    transition.classList
                        .remove(
                            "fade-out"
                        );

                }


                if (
                    universeComplete
                ) {

                    universeComplete
                        .classList
                        .remove(
                            "show"
                        );

                }


                setTimeout(
                    function () {

                        window.location.href =
                            "page4.html";

                    },
                    900
                );

            }
        );

    }

});
