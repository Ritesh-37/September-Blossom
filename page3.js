document.addEventListener(
    "DOMContentLoaded",
    function () {


        /* =====================================
           ELEMENTS
        ====================================== */

        const introScreen =
            document.getElementById(
                "intro-screen"
            );

        const quizScreen =
            document.getElementById(
                "quiz-screen"
            );

        const resultScreen =
            document.getElementById(
                "result-screen"
            );

        const startQuiz =
            document.getElementById(
                "start-quiz"
            );

        const questionNumber =
            document.getElementById(
                "question-number"
            );

        const progressBar =
            document.getElementById(
                "progress-bar"
            );

        const question =
            document.getElementById(
                "question"
            );

        const questionIcon =
            document.getElementById(
                "question-icon"
            );

        const answerButtons =
            document.querySelectorAll(
                ".answer-button"
            );

        const quizMessage =
            document.getElementById(
                "quiz-message"
            );

        const scoreElement =
            document.getElementById(
                "score"
            );

        const correctCount =
            document.getElementById(
                "correct-count"
            );

        const wrongCount =
            document.getElementById(
                "wrong-count"
            );

        const resultMessage =
            document.getElementById(
                "result-message"
            );

        const continueButton =
            document.getElementById(
                "continue-button"
            );

        const confettiContainer =
            document.getElementById(
                "confetti-container"
            );

        const transition =
            document.getElementById(
                "page-transition"
            );


        /* =====================================
           QUESTIONS
        ====================================== */

        const questions = [

            {
                question:
                    "Who is more likely to start a random conversation at 2 AM? 🌙",

                icon:
                    "🌙",

                answer:
                    "Tisha"
            },

            {
                question:
                    "Who gets sleepy first when you're together? 😴",

                icon:
                    "😴",

                answer:
                    "Tisha"
            },

            {
                question:
                    "Who is more talkative? 😂",

                icon:
                    "😂",

                answer:
                    "Tisha"
            },

            {
                question:
                    "Who is more likely to overthink a tiny thing? 👀",

                icon:
                    "👀",

                answer:
                    "Ritesh"
            },

            {
                question:
                    'Who is more likely to say "I\'m fine" when they\'re clearly NOT fine? 😭',

                icon:
                    "😭",

                answer:
                    "Ritesh"
            },

            {
                question:
                    "Who gets more excited about little things? ✨",

                icon:
                    "✨",

                answer:
                    "Tisha"
            },

            {
                question:
                    "Who is more likely to steal the other's food after saying they're not hungry? 🍟",

                icon:
                    "🍟",

                answer:
                    "Tisha"
            },

            {
                question:
                    "Who is more dramatic when something doesn't go their way? 🎭",

                icon:
                    "🎭",

                answer:
                    "Ritesh"
            },

            {
                question:
                    "Who is more likely to randomly say something that makes the other person laugh? 🤭",

                icon:
                    "🤭",

                answer:
                    "Ritesh"
            },

            {
                question:
                    "Be honest... who fell harder? ❤️",

                icon:
                    "❤️",

                answer:
                    "Tisha"
            }

        ];


        /* =====================================
           STATE
        ====================================== */

        let currentQuestion = 0;

        let score = 0;

        let answered = false;


        /* =====================================
           BACKGROUND STARS
        ====================================== */

        function createStars() {

            const container =
                document.getElementById(
                    "stars"
                );

            for (
                let i = 0;
                i < 80;
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
                    Math.random() *
                    100 +
                    "%";

                star.style.top =
                    Math.random() *
                    100 +
                    "%";

                star.style.animationDelay =
                    Math.random() *
                    4 +
                    "s";

                container.appendChild(
                    star
                );

            }

        }

        createStars();


        /* =====================================
           INITIAL TRANSITION
        ====================================== */

        setTimeout(
            function () {

                transition.classList.add(
                    "hide"
                );

            },
            300
        );


        /* =====================================
           SHOW SCREEN
        ====================================== */

        function showScreen(
            screen
        ) {

            document
                .querySelectorAll(
                    ".screen"
                )
                .forEach(
                    function (item) {

                        item.classList
                            .remove(
                                "active"
                            );

                    }
                );


            setTimeout(
                function () {

                    screen.classList
                        .add(
                            "active"
                        );

                },
                100
            );

        }


        /* =====================================
           START QUIZ
        ====================================== */

        startQuiz.addEventListener(
            "click",
            function () {

                currentQuestion = 0;

                score = 0;

                loadQuestion();

                showScreen(
                    quizScreen
                );

            }
        );


        /* =====================================
           LOAD QUESTION
        ====================================== */

        function loadQuestion() {

            answered = false;

            quizMessage.textContent =
                "";


            const current =
                questions[
                    currentQuestion
                ];


            questionNumber.textContent =
                String(
                    currentQuestion + 1
                ).padStart(
                    2,
                    "0"
                ) +
                " / 10";


            progressBar.style.width =
                (
                    (
                        currentQuestion + 1
                    ) /
                    questions.length *
                    100
                ) +
                "%";


            questionIcon.textContent =
                current.icon;


            question.textContent =
                current.question;


            answerButtons.forEach(
                function (button) {

                    button.disabled =
                        false;

                    button.classList
                        .remove(
                            "correct",
                            "wrong"
                        );

                }
            );

        }


        /* =====================================
           ANSWER CLICK
        ====================================== */

        answerButtons.forEach(
            function (button) {

                button.addEventListener(
                    "click",
                    function () {

                        if (answered) {
                            return;
                        }

                        answered = true;


                        const selected =
                            button.dataset.answer;

                        const correct =
                            questions[
                                currentQuestion
                            ].answer;


                        answerButtons
                            .forEach(
                                function (item) {

                                    item.disabled =
                                        true;

                                }
                            );


                        if (
                            selected ===
                            correct
                        ) {

                            score++;

                            button.classList
                                .add(
                                    "correct"
                                );

                            quizMessage.textContent =
                                getCorrectMessage();


                        } else {

                            button.classList
                                .add(
                                    "wrong"
                                );

                            quizMessage.textContent =
                                getWrongMessage();

                        }


                        setTimeout(
                            function () {

                                if (
                                    currentQuestion <
                                    questions.length - 1
                                ) {

                                    currentQuestion++;

                                    animateNextQuestion();

                                } else {

                                    showResults();

                                }

                            },
                            1100
                        );

                    }
                );

            }
        );


        /* =====================================
           NEXT QUESTION ANIMATION
        ====================================== */

        function animateNextQuestion() {

            const card =
                document.getElementById(
                    "question-card"
                );


            card.style.opacity =
                "0";

            card.style.transform =
                "translateX(30px)";


            setTimeout(
                function () {

                    loadQuestion();

                    card.style.transform =
                        "translateX(-30px)";

                    requestAnimationFrame(
                        function () {

                            card.style.opacity =
                                "1";

                            card.style.transform =
                                "translateX(0)";

                        }
                    );

                },
                350
            );

        }


        /* =====================================
           CORRECT MESSAGES
        ====================================== */

        function getCorrectMessage() {

            const messages = [

                "YESS GIRLLLL 😭❤️",

                "I KNEW YOU'D KNOW THAT! 👀",

                "Okayyy, somebody's been paying attention. 😌",

                "CORRECTTTT! 🥹",

                "Look at you remembering everything! ❤️"

            ];


            return messages[
                Math.floor(
                    Math.random() *
                    messages.length
                )
            ];

        }


        /* =====================================
           WRONG MESSAGES
        ====================================== */

        function getWrongMessage() {

            const messages = [

                "OHHHH NOOO 😭",

                "SISTARRRR WHAT WAS THAT? 😂",

                "I'm judging you respectfully. 👀",

                "Bro really chose that answer 😭",

                "We'll pretend that didn't happen. 😂"

            ];


            return messages[
                Math.floor(
                    Math.random() *
                    messages.length
                )
            ];

        }


        /* =====================================
           RESULTS
        ====================================== */

        function showResults() {

            scoreElement.textContent =
                score;

            correctCount.textContent =
                score;

            wrongCount.textContent =
                questions.length -
                score;


            if (
                score === 9
            ) {

                resultMessage.textContent =
                    "YOU GOT 1 WRONG SISTARRRRR 😭";

            } else if (
                score === 10
            ) {

                resultMessage.textContent =
                    "OKAYYY PERFECT SCORE 😭❤️";

            } else if (
                score >= 7
            ) {

                resultMessage.textContent =
                    "NOT BAD SISTARRRR 😌❤️";

            } else {

                resultMessage.textContent =
                    "BROOO WE NEED TO TALK 😭😂";

            }


            showScreen(
                resultScreen
            );


            setTimeout(
                createConfetti,
                400
            );

        }


        /* =====================================
           CONFETTI
        ====================================== */

        function createConfetti() {

            const symbols = [
                "❤️",
                "💕",
                "✨",
                "⭐",
                "🎀",
                "💫"
            ];


            for (
                let i = 0;
                i < 35;
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


                confettiContainer.appendChild(
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


        /* =====================================
           CONTINUE TO PART 4
        ====================================== */

        continueButton.addEventListener(
            "click",
            function () {

                transition.classList.remove(
                    "hide"
                );


                setTimeout(
                    function () {

                        window.location.href =
                            "part4.html";

                    },
                    900
                );

            }
        );


    }
);
