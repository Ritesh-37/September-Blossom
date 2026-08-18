document.addEventListener(
    "DOMContentLoaded",
    function () {


        /* =========================================
           BASIC ELEMENTS
        ========================================== */

        const transition =
            document.getElementById(
                "transition-layer"
            );

        const sections =
            document.querySelectorAll(
                ".chapter-section"
            );


        function showSection(id) {

            sections.forEach(
                function (section) {

                    section.classList.remove(
                        "active"
                    );

                }
            );


            const target =
                document.getElementById(id);


            if (target) {

                setTimeout(
                    function () {

                        target.classList.add(
                            "active"
                        );

                    },
                    100
                );

            }

        }


        function fadeTransition(callback) {

            transition.classList.remove(
                "hide"
            );


            setTimeout(
                function () {

                    callback();

                    setTimeout(
                        function () {

                            transition.classList.add(
                                "hide"
                            );

                        },
                        200
                    );

                },
                700
            );

        }


        /* =========================================
           STARS
        ========================================== */

        const starContainer =
            document.getElementById(
                "stars"
            );


        for (
            let i = 0;
            i < 90;
            i++
        ) {

            const star =
                document.createElement(
                    "span"
                );

            star.className =
                "star";

            star.textContent =
                Math.random() > .8
                    ? "✦"
                    : "•";

            star.style.left =
                Math.random() * 100 +
                "%";

            star.style.top =
                Math.random() * 100 +
                "%";

            star.style.animationDelay =
                Math.random() * 4 +
                "s";

            starContainer.appendChild(
                star
            );

        }


        setTimeout(
            function () {

                transition.classList.add(
                    "hide"
                );

            },
            300
        );


        /* =========================================
           PART 3 — QUIZ
        ========================================== */

        const questions = [

            {
                text:
                    "Who is more likely to start a random conversation at 2 AM? 🌙",

                icon:
                    "🌙",

                answer:
                    "Tisha"
            },

            {
                text:
                    "Who gets sleepy first when you're together? 😴",

                icon:
                    "😴",

                answer:
                    "Tisha"
            },

            {
                text:
                    "Who is more talkative? 😂",

                icon:
                    "😂",

                answer:
                    "Tisha"
            },

            {
                text:
                    "Who is more likely to overthink a tiny thing? 👀",

                icon:
                    "👀",

                answer:
                    "Ritesh"
            },

            {
                text:
                    "Who is more likely to say I'm fine when they're clearly NOT fine? 😭",

                icon:
                    "😭",

                answer:
                    "Ritesh"
            },

            {
                text:
                    "Who gets more excited about little things? ✨",

                icon:
                    "✨",

                answer:
                    "Tisha"
            },

            {
                text:
                    "Who is more likely to steal the other's food after saying they're not hungry? 🍟",

                icon:
                    "🍟",

                answer:
                    "Tisha"
            },

            {
                text:
                    "Who is more dramatic when something doesn't go their way? 🎭",

                icon:
                    "🎭",

                answer:
                    "Ritesh"
            },

            {
                text:
                    "Who is more likely to randomly say something that makes the other person laugh? 🤭",

                icon:
                    "🤭",

                answer:
                    "Ritesh"
            },

            {
                text:
                    "Be honest... who fell harder? ❤️",

                icon:
                    "❤️",

                answer:
                    "Tisha"
            }

        ];


        let currentQuestion = 0;

        let quizScore = 0;

        let quizLocked = false;


        const startQuiz =
            document.getElementById(
                "start-quiz"
            );

        const questionText =
            document.getElementById(
                "question-text"
            );

        const questionIcon =
            document.getElementById(
                "question-icon"
            );

        const questionCount =
            document.getElementById(
                "question-count"
            );

        const quizProgress =
            document.getElementById(
                "quiz-progress"
            );

        const feedback =
            document.getElementById(
                "answer-feedback"
            );

        const questionCard =
            document.getElementById(
                "question-card"
            );

        const answerChoices =
            document.querySelectorAll(
                ".answer-choice"
            );


        function loadQuestion() {

            quizLocked = false;

            const data =
                questions[
                    currentQuestion
                ];


            questionText.textContent =
                data.text;

            questionIcon.textContent =
                data.icon;

            questionCount.textContent =
                String(
                    currentQuestion + 1
                ).padStart(
                    2,
                    "0"
                ) +
                " / 10";


            quizProgress.style.width =
                (
                    (
                        currentQuestion + 1
                    ) /
                    10 *
                    100
                ) +
                "%";


            feedback.textContent =
                "";


            answerChoices.forEach(
                function (button) {

                    button.disabled =
                        false;

                    button.classList.remove(
                        "correct",
                        "wrong"
                    );

                }
            );

        }


        startQuiz.addEventListener(
            "click",
            function () {

                currentQuestion = 0;

                quizScore = 0;

                loadQuestion();

                showSection(
                    "quiz"
                );

            }
        );


        answerChoices.forEach(
            function (button) {

                button.addEventListener(
                    "click",
                    function () {

                        if (quizLocked) {
                            return;
                        }


                        quizLocked = true;


                        const selected =
                            button.dataset.answer;

                        const correct =
                            questions[
                                currentQuestion
                            ].answer;


                        answerChoices.forEach(
                            function (item) {

                                item.disabled =
                                    true;

                            }
                        );


                        if (
                            selected ===
                            correct
                        ) {

                            quizScore++;

                            button.classList.add(
                                "correct"
                            );

                            feedback.textContent =
                                "YESS GIRLLLL 😭❤️";

                        } else {

                            button.classList.add(
                                "wrong"
                            );

                            feedback.textContent =
                                "OHHHH NOOOO 😭😂";

                        }


                        setTimeout(
                            function () {

                                if (
                                    currentQuestion <
                                    9
                                ) {

                                    currentQuestion++;

                                    questionCard.style.opacity =
                                        "0";

                                    questionCard.style.transform =
                                        "translateX(30px)";


                                    setTimeout(
                                        function () {

                                            loadQuestion();

                                            questionCard.style.transform =
                                                "translateX(-30px)";


                                            requestAnimationFrame(
                                                function () {

                                                    questionCard.style.opacity =
                                                        "1";

                                                    questionCard.style.transform =
                                                        "translateX(0)";

                                                }
                                            );

                                        },
                                        250
                                    );

                                } else {

                                    showQuizResult();

                                }

                            },
                            900
                        );

                    }
                );

            }
        );


        function showQuizResult() {

            document.getElementById(
                "score-number"
            ).textContent =
                quizScore;


            document.getElementById(
                "correct-number"
            ).textContent =
                quizScore;


            document.getElementById(
                "wrong-number"
            ).textContent =
                10 - quizScore;


            const scoreMessage =
                document.getElementById(
                    "score-message"
                );


            if (quizScore === 9) {

                scoreMessage.textContent =
                    "YOU GOT 1 WRONG SISTARRRRR 😭";

            } else if (
                quizScore === 10
            ) {

                scoreMessage.textContent =
                    "PERFECT SCORE?! OKAY GENIUSSS 😭❤️";

            } else if (
                quizScore >= 7
            ) {

                scoreMessage.textContent =
                    "NOT BAD SISTARRRR 😌❤️";

            } else {

                scoreMessage.textContent =
                    "BROOOO WE NEED TO HAVE A TALK 😭😂";

            }


            showSection(
                "quiz-result"
            );


            confetti();

        }


        document
            .getElementById(
                "quiz-next"
            )
            .addEventListener(
                "click",
                function () {

                    fadeTransition(
                        function () {

                            showSection(
                                "balloon-section"
                            );

                            startBalloons();

                        }
                    );

                }
            );


        /* =========================================
           PART 4 — BALLOONS
        ========================================== */

        const balloonField =
            document.getElementById(
                "balloon-field"
            );

        const balloonProgress =
            document.getElementById(
                "balloon-progress"
            );

        const envelopeArea =
            document.getElementById(
                "envelope-area"
            );

        const hiddenMessage =
            document.getElementById(
                "balloon-hidden-message"
            );


        const totalBalloons = 24;

        let poppedBalloons = 0;


        function startBalloons() {

            balloonField.innerHTML = "";

            envelopeArea.classList.remove(
                "show"
            );

            hiddenMessage.classList.remove(
                "show"
            );

            poppedBalloons = 0;

            balloonProgress.textContent =
                "0 / " +
                totalBalloons;


            for (
                let i = 0;
                i < totalBalloons;
                i++
            ) {

                createBalloon(i);

            }

        }


        function createBalloon(index) {

            const balloon =
                document.createElement(
                    "button"
                );

            balloon.className =
                "balloon";


            balloon.setAttribute(
                "aria-label",
                "Pop balloon"
            );


            const left =
                5 +
                Math.random() * 90;


            const top =
                20 +
                Math.random() * 65;


            balloon.style.left =
                left + "%";

            balloon.style.top =
                top + "%";


            balloon.style.setProperty(
                "--duration",
                (
                    3 +
                    Math.random() * 3
                ) +
                "s"
            );


            balloon.style.animationDelay =
                (
                    Math.random() * 2
                ) +
                "s";


            if (
                index === 3
            ) {

                balloon.dataset.word =
                    "BURST";

            } else if (
                index === 8
            ) {

                balloon.dataset.word =
                    "ALL";

            } else if (
                index === 13
            ) {

                balloon.dataset.word =
                    "THE";

            } else if (
                index === 18
            ) {

                balloon.dataset.word =
                    "BALLOONS";

            } else if (
                index === 22
            ) {

                balloon.dataset.word =
                    "CUTUUUU ❤️";

            }


            balloon.addEventListener(
                "click",
                function () {

                    popBalloon(
                        balloon
                    );

                }
            );


            balloonField.appendChild(
                balloon
            );

        }


        function popBalloon(
            balloon
        ) {

            if (
                balloon.classList.contains(
                    "pop"
                )
            ) {
                return;
            }


            balloon.classList.add(
                "pop"
            );


            poppedBalloons++;


            balloonProgress.textContent =
                poppedBalloons +
                " / " +
                totalBalloons;


            if (
                balloon.dataset.word
            ) {

                showHiddenWord(
                    balloon.dataset.word
                );

            }


            setTimeout(
                function () {

                    balloon.remove();

                },
                300
            );


            if (
                poppedBalloons ===
                totalBalloons
            ) {

                finishBalloons();

            }

        }


        function showHiddenWord(
            word
        ) {

            const wordElement =
                document.createElement(
                    "span"
                );

            wordElement.textContent =
                word;


            wordElement.style.position =
                "fixed";

            wordElement.style.left =
                (
                    20 +
                    Math.random() * 60
                ) +
                "%";

            wordElement.style.top =
                (
                    25 +
                    Math.random() * 50
                ) +
                "%";

            wordElement.style.fontSize =
                "18px";

            wordElement.style.fontWeight =
                "600";

            wordElement.style.zIndex =
                "35";

            wordElement.style.opacity =
                "0";

            wordElement.style.transition =
                "opacity .5s ease";


            document.body.appendChild(
                wordElement
            );


            requestAnimationFrame(
                function () {

                    wordElement.style.opacity =
                        "1";

                }
            );


            setTimeout(
                function () {

                    wordElement.style.opacity =
                        "0";

                },
                1400
            );


            setTimeout(
                function () {

                    wordElement.remove();

                },
                2000
            );

        }


        function finishBalloons() {

            hiddenMessage.classList.add(
                "show"
            );


            setTimeout(
                function () {

                    envelopeArea.classList.add(
                        "show"
                    );

                },
                1300
            );

        }


        /* =========================================
           ENVELOPE
        ========================================== */

        document
            .getElementById(
                "open-envelope"
            )
            .addEventListener(
                "click",
                function () {

                    fadeTransition(
                        function () {

                            showSection(
                                "letter-transition"
                            );


                            const giantEnvelope =
                                document.getElementById(
                                    "giant-envelope"
                                );

                            const fallingText =
                                document.getElementById(
                                    "falling-text"
                                );


                            fallingText.textContent =
                                "Opening your message...";


                            setTimeout(
                                function () {

                                    giantEnvelope.classList.add(
                                        "suck"
                                    );

                                    fallingText.textContent =
                                        "WHOAAAAA...";

                                },
                                800
                            );


                            setTimeout(
                                function () {

                                    showSection(
                                        "love-letter"
                                    );

                                    const audio =
                                        document.getElementById(
                                            "love-letter-audio"
                                        );

                                    audio.volume =
                                        .65;

                                },
                                2500
                            );

                        }
                    );

                }
            );


        /* =========================================
           LETTER YES / NO
        ========================================== */

        const letterYes =
            document.getElementById(
                "letter-yes"
            );

        const letterNo =
            document.getElementById(
                "letter-no"
            );

        const letterWarning =
            document.getElementById(
                "letter-warning"
            );


        letterNo.addEventListener(
            "click",
            function () {

                letterWarning.textContent =
                    "ABE PURA PADH LE CHOTA KHOPDI 😭💋";


                letterNo.animate(
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
                                "translateX(0)"
                        }
                    ],
                    {
                        duration: 400
                    }
                );

            }
        );


        letterYes.addEventListener(
            "click",
            function () {

                fadeTransition(
                    function () {

                        showSection(
                            "garden"
                        );

                    }
                );

            }
        );


        /* =========================================
           PART 5 — GARDEN
        ========================================== */

        const flowers =
            document.querySelectorAll(
                ".flower"
            );

        const gardenMessage =
            document.getElementById(
                "garden-message"
            );

        const gardenNext =
            document.getElementById(
                "garden-next"
            );


        let flowersFound = 0;


        flowers.forEach(
            function (flower) {

                flower.addEventListener(
                    "click",
                    function () {

                        if (
                            flower.dataset.found !==
                            "true"
                        ) {

                            flower.dataset.found =
                                "true";

                            flowersFound++;

                        }


                        gardenMessage.textContent =
                            flower.dataset.message;


                        gardenMessage.classList.add(
                            "show"
                        );


                        setTimeout(
                            function () {

                                gardenMessage.classList.remove(
                                    "show"
                                );

                            },
                            2800
                        );


                        if (
                            flowersFound ===
                            flowers.length
                        ) {

                            gardenNext.disabled =
                                false;

                        }

                    }
                );

            }
        );


        gardenNext.addEventListener(
            "click",
            function () {

                fadeTransition(
                    function () {

                        showSection(
                            "facts"
                        );

                    }
                );

            }
        );


        /* =========================================
           PART 6 — FACT CARDS
        ========================================== */

        const facts = [

            {
                emoji: "✨",

                text:
                    "You probably don't realize how easily your energy can change the mood of a room."
            },

            {
                emoji: "😂",

                text:
                    "You somehow manage to be extremely talkative and still leave me completely speechless sometimes."
            },

            {
                emoji: "🥹",

                text:
                    "You are probably much more lovable than you give yourself credit for."
            },

            {
                emoji: "🌸",

                text:
                    "You make ordinary little moments feel much more memorable than they should be."
            },

            {
                emoji: "👀",

                text:
                    "You have absolutely no idea how cute you look when you're sleepy."
            },

            {
                emoji: "🎙️",

                text:
                    "Your voice became familiar to me much faster than I expected."
            },

            {
                emoji: "❤️",

                text:
                    "You have a very special place in someone's life. Hint: he owns this website."
            },

            {
                emoji: "🌙",

                text:
                    "You can somehow make even quiet moments feel comfortable."
            },

            {
                emoji: "💗",

                text:
                    "You don't need to try very hard to be special. You already are."
            }

        ];


        const factGrid =
            document.getElementById(
                "fact-grid"
            );

        const factsProgress =
            document.getElementById(
                "facts-progress"
            );

        const factsNext =
            document.getElementById(
                "facts-next"
            );


        let discoveredFacts = 0;


        facts.forEach(
            function (fact, index) {

                const card =
                    document.createElement(
                        "div"
                    );

                card.className =
                    "fact-card";


                card.innerHTML = `

                    <div class="fact-inner">

                        <div class="fact-front">

                            ${fact.emoji}

                            <span>
                                TAP TO DISCOVER
                            </span>

                        </div>


                        <div class="fact-back">

                            ${fact.text}

                        </div>

                    </div>

                `;


                card.addEventListener(
                    "click",
                    function () {

                        if (
                            !card.classList.contains(
                                "flipped"
                            )
                        ) {

                            discoveredFacts++;

                            factsProgress.textContent =
                                discoveredFacts +
                                " / 9 discovered";


                            if (
                                discoveredFacts ===
                                9
                            ) {

                                factsNext.disabled =
                                    false;

                            }

                        }


                        card.classList.add(
                            "flipped"
                        );

                    }
                );


                factGrid.appendChild(
                    card
                );

            }
        );


        factsNext.addEventListener(
            "click",
            function () {

                fadeTransition(
                    function () {

                        showSection(
                            "mystery"
                        );

                    }
                );

            }
        );


        /* =========================================
           PART 7 — MYSTERY BOX
        ========================================== */

        const mysteryBox =
            document.getElementById(
                "mystery-box"
            );

        const clickCounter =
            document.getElementById(
                "click-counter"
            );

        const mysteryText =
            document.getElementById(
                "mystery-text"
            );


        let mysteryClicks = 0;


        mysteryBox.addEventListener(
            "click",
            function () {

                mysteryClicks++;


                clickCounter.textContent =
                    mysteryClicks +
                    " / 7";


                mysteryBox.classList.remove(
                    "shake"
                );


                void mysteryBox.offsetWidth;


                mysteryBox.classList.add(
                    "shake"
                );


                if (
                    mysteryClicks === 1
                ) {

                    mysteryText.textContent =
                        "Nothing happened. 😌";

                } else if (
                    mysteryClicks === 2
                ) {

                    mysteryText.textContent =
                        "Try again. 👀";

                } else if (
                    mysteryClicks === 3
                ) {

                    mysteryText.textContent =
                        "Are you sure this thing works? 😂";

                } else if (
                    mysteryClicks === 4
                ) {

                    mysteryText.textContent =
                        "Okayyy stop bullying the box. 😭";

                } else if (
                    mysteryClicks === 5
                ) {

                    mysteryText.textContent =
                        "Ummm... I think it moved. 👀";

                } else if (
                    mysteryClicks === 6
                ) {

                    mysteryText.textContent =
                        "WAIT WAIT WAIT... 😳";

                } else if (
                    mysteryClicks === 7
                ) {

                    mysteryText.textContent =
                        "OH NO. YOU BROKE THE UNIVERSE. 🕳️";

                    setTimeout(
                        startBlackHole,
                        1000
                    );

                }

            }
        );


        /* =========================================
           BLACK HOLE
        ========================================== */

        function startBlackHole() {

            fadeTransition(
                function () {

                    showSection(
                        "black-hole"
                    );


                    setTimeout(
                        function () {

                            document
                                .querySelector(
                                    ".black-hole"
                                )
                                .style.transform =
                                "scale(2.5)";

                        },
                        500
                    );


                    setTimeout(
                        function () {

                            showSection(
                                "chapter-four"
                            );

                            confetti();

                        },
                        3000
                    );

                }
            );

        }


        /* =========================================
           CHAPTER 4
        ========================================== */

        document
            .getElementById(
                "chapter-four-button"
            )
            .addEventListener(
                "click",
                function () {

                    /*
                     * When Chapter 4 is ready,
                     * change this to:
                     *
                     * window.location.href =
                     * "chapter4.html";
                     */

                    alert(
                        "Chapter IV is waiting for you... ❤️"
                    );

                }
            );


        /* =========================================
           CONFETTI
        ========================================== */

        function confetti() {

            const container =
                document.getElementById(
                    "confetti"
                );


            const symbols = [
                "❤️",
                "💕",
                "✨",
                "⭐",
                "🌸",
                "💫"
            ];


            for (
                let i = 0;
                i < 40;
                i++
            ) {

                const piece =
                    document.createElement(
                        "span"
                    );

                piece.className =
                    "confetti";

                piece.textContent =
                    symbols[
                        Math.floor(
                            Math.random() *
                            symbols.length
                        )
                    ];


                piece.style.left =
                    Math.random() *
                    100 +
                    "%";


                piece.style.animationDelay =
                    Math.random() *
                    .8 +
                    "s";


                piece.style.animationDuration =
                    2 +
                    Math.random() *
                    2 +
                    "s";


                container.appendChild(
                    piece
                );


                setTimeout(
                    function () {

                        piece.remove();

                    },
                    4500
                );

            }

        }

    }
);
