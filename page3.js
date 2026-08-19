document.addEventListener("DOMContentLoaded", function () {

    /* =====================================
       GET ELEMENTS
    ===================================== */

    const introScreen =
        document.getElementById("introScreen");

    const quizScreen =
        document.getElementById("quizScreen");

    const resultScreen =
        document.getElementById("resultScreen");

    const startButton =
        document.getElementById("startButton");

    const questionNumber =
        document.getElementById("questionNumber");

    const progressBar =
        document.getElementById("progressBar");

    const questionText =
        document.getElementById("questionText");

    const questionEmoji =
        document.getElementById("questionEmoji");

    const feedback =
        document.getElementById("feedback");

    const answerButtons =
        document.querySelectorAll(".answerButton");

    const finalScore =
        document.getElementById("finalScore");

    const correctNumber =
        document.getElementById("correctNumber");

    const wrongNumber =
        document.getElementById("wrongNumber");

    const resultMessage =
        document.getElementById("resultMessage");

    const continueButton =
        document.getElementById("continueButton");


    /* =====================================
       QUESTIONS
    ===================================== */

    const questions = [

        {
            text:
                "Who is more likely to start a random conversation at 2 AM? 🌙",

            emoji:
                "🌙",

            answer:
                "Tisha"
        },

        {
            text:
                "Who gets sleepy first when you're together? 😴",

            emoji:
                "😴",

            answer:
                "Tisha"
        },

        {
            text:
                "Who is more talkative? 😂",

            emoji:
                "😂",

            answer:
                "Tisha"
        },

        {
            text:
                "Who is more likely to overthink a tiny thing? 👀",

            emoji:
                "👀",

            answer:
                "Ritesh"
        },

        {
            text:
                "Who is more likely to say I'm fine when they're clearly NOT fine? 😭",

            emoji:
                "😭",

            answer:
                "Ritesh"
        },

        {
            text:
                "Who gets more excited about little things? ✨",

            emoji:
                "✨",

            answer:
                "Tisha"
        },

        {
            text:
                "Who is more likely to steal the other's food after saying they're not hungry? 🍟",

            emoji:
                "🍟",

            answer:
                "Tisha"
        },

        {
            text:
                "Who is more dramatic when something doesn't go their way? 🎭",

            emoji:
                "🎭",

            answer:
                "Ritesh"
        },

        {
            text:
                "Who is more likely to randomly say something that makes the other person laugh? 🤭",

            emoji:
                "🤭",

            answer:
                "Ritesh"
        },

        {
            text:
                "Be honest... who fell harder? ❤️",

            emoji:
                "❤️",

            answer:
                "Tisha"
        }

    ];


    /* =====================================
       VARIABLES
    ===================================== */

    let currentQuestion = 0;

    let score = 0;

    let answered = false;


    /* =====================================
       SHOW ONLY ONE SCREEN
    ===================================== */

    function showScreen(screen) {

        introScreen.classList.remove("active");

        quizScreen.classList.remove("active");

        resultScreen.classList.remove("active");

        screen.classList.add("active");
    }


    /* =====================================
       START QUIZ
    ===================================== */

    startButton.addEventListener("click", function () {

        currentQuestion = 0;

        score = 0;

        showScreen(quizScreen);

        loadQuestion();
    });


    /* =====================================
       LOAD QUESTION
    ===================================== */

    function loadQuestion() {

        answered = false;

        feedback.textContent = "";

        const current =
            questions[currentQuestion];


        questionNumber.textContent =
            String(currentQuestion + 1).padStart(2, "0")
            + " / 10";


        progressBar.style.width =
            ((currentQuestion + 1) * 10) + "%";


        questionEmoji.textContent =
            current.emoji;


        questionText.textContent =
            current.text;


        answerButtons.forEach(function (button) {

            button.disabled = false;

            button.classList.remove("correct");

            button.classList.remove("wrong");

        });

    }


    /* =====================================
       ANSWER BUTTONS
    ===================================== */

    answerButtons.forEach(function (button) {

        button.addEventListener("click", function () {

            if (answered === true) {
                return;
            }

            answered = true;


            const selectedAnswer =
                button.getAttribute("data-answer");


            const correctAnswer =
                questions[currentQuestion].answer;


            answerButtons.forEach(function (item) {

                item.disabled = true;

            });


            if (selectedAnswer === correctAnswer) {

                score++;

                button.classList.add("correct");

                feedback.textContent =
                    "YESS! You know us too well. ❤️";

            } else {

                button.classList.add("wrong");

                feedback.textContent =
                    "OHHHH NOOOO 😭😂";

            }


            setTimeout(function () {

                if (
                    currentQuestion <
                    questions.length - 1
                ) {

                    currentQuestion++;

                    loadQuestion();

                } else {

                    showResult();

                }

            }, 1000);

        });

    });


    /* =====================================
       SHOW RESULT
    ===================================== */

    function showResult() {

        const wrong =
            questions.length - score;


        finalScore.textContent =
            score;


        correctNumber.textContent =
            score;


        wrongNumber.textContent =
            wrong;


        if (score === 9) {

            resultMessage.textContent =
                "YOU GOT 1 WRONG SISTARRRRR 😭";

        } else if (score === 10) {

            resultMessage.textContent =
                "PERFECT SCORE! OKAYYY GENIUS 😭❤️";

        } else if (score >= 7) {

            resultMessage.textContent =
                "NOT BAD SISTARRRR 😌❤️";

        } else {

            resultMessage.textContent =
                "BROOOO WE NEED TO HAVE A TALK 😭😂";

        }


        showScreen(resultScreen);

    }


    /* =====================================
       CONTINUE
    ===================================== */

    continueButton.addEventListener("click", function () {

        /*
         * Part 4 will be created next.
         *
         * For now this sends the user to
         * part4.html.
         */

        window.location.href = "part4.html";

    });

});
