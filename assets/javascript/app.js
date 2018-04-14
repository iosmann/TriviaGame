var questionPos = 0;
var timeRemaining = 45;
var correct = 0;
var incorrect = 0;
var userChoice;
var incorrectAnswers = 0;
var correctAnswers = 0;
var choiceA;
var choiceB;
var choiceC;
var choiceD;

var questionArray = [{
    question: "Chanel No. 5, 'Allure', 'Coco' and 'Chance' are perfumes made by a company founded by whom?",
    options: ["Karl Kani", "Giorgio Armani", "Coco Chanel", "Ralph Lauren"],
    answer: "C"
}, {
    question: "Which of these would be used on the hair after shampooing it?",
    options: ["Aftershave", "Lip Balm", "Cologne", "Conditioner"],
    answer: "D"
}, {
    question: "What is the English translation of the French term 'Eau De Toilette'?",
    options: ["Rain Water", "Toilet Water", "Sparkling Water", "Bottled Water"],
    answer: "B"
}, {
    question: "A perfume of what scent, a well-known ice cream, should you wear to relieve stress?",
    options: ["Vanilla", "Chunky Munky", "Ileys Osman", "Ameri-Cone Dream"],
    answer: "A"
}, {
    question: "Which designer produced the fragrances 'One' and 'Be'?",
    options: ["Ileys Osman", "Jean Patou", "Calvin Klein", "Estee Lauder"],
    answer: "C"
}, {
    question: "Which brand of hair care products has a kangaroo in its logo?",
    options: ["Aussie", "Nexxus", "Clairol", "Revlon"],
    answer: "A"
}, {
    question: "A nail polish that is colorless and goes on top of a colored polish is called what?",
    options: ["Mid Coat", "Bottom Coat", "Pea Coat", "Top Coat"],
    answer: "D"
}, {
    question: "What cosmetics company, named for its founder, gives pinkk Cadillacs to its high-sellers?",
    options: ["Maybelline", "Mary Kay", "Revlon", "St. Ives"],
    answer: "B"
}
];

$(document).ready(function () {

    $("#start").on("click", function () {
        $(this).hide();
        timer();
        counter = setInterval(timer, 1000);
        displayTrivia();
        checkAnswer();
        reset();
    });

    function displayTrivia() {
        if (questionPos === questionArray.length) {
            $(".time").hide();
            $("#q1").hide();
            $("#q2").hide();
            $("#q3").hide();
            $("#q4").hide();
            $("#submit").hide();
            $(".questions").hide();
            $("#correct").html("Correct Answers: " + correctAnswers);
            $("#incorrect").html("Incorrect Answers: " + incorrectAnswers);
            $("#startOver").html("<input type='submit'>")

        }
        for (let i = 0; i < questionArray.length; i++) {
            console.log(questionArray[questionPos].question);
            questionQuestion = questionArray[questionPos].question.toString();
            questionAnswer = questionArray[questionPos].options;
            answerAnswer = questionArray[questionPos].answer;

            choiceA = questionAnswer[0];
            choiceB = questionAnswer[1];
            choiceC = questionAnswer[2];
            choiceD = questionAnswer[3];

            $(".questions").html("<h3>" + questionQuestion + "</h3>")
            $("#q1").html("<input type='radio' name = 'choices' value='A'> " + choiceA + "<br>");
            $("#q2").html("<input type='radio' name = 'choices' value='B'> " + choiceB + "<br>");
            $("#q3").html("<input type='radio' name = 'choices' value='C'> " + choiceC + "<br>");
            $("#q4").html("<input type='radio' name = 'choices' value='D'> " + choiceD + "<br>");
            $("#submit").html("<input type='submit'>")
        }
    };

    function checkAnswer() {
        $("#submit").on("click", function () {
            choices = document.getElementsByName("choices");
            for (j = 0; j < choices.length; j++)
                if (choices[j].checked) {
                    choice = choices[j].value;
                }
            console.log(choice);
            if (choice === answerAnswer) {

                correctAnswers++;
                questionPos++;
                displayTrivia();
                console.log("Correct Answers: " + correctAnswers);

            } else {

                incorrectAnswers++;
                questionPos++;
                displayTrivia();
                console.log("Incorrect Answers: " + incorrectAnswers);

            }
        });
    }

    function timer() {
        timeRemaining--;
        if (timeRemaining <= 0) {
            clearInterval(timer);
            $(".time").hide();
            $("#q1").hide();
            $("#q2").hide();
            $("#q3").hide();
            $("#q4").hide();
            $("#submit").hide();
            $(".questions").hide();
            $("#correct").html("Correct Answers: " + correctAnswers);
            $("#incorrect").html("Incorrect Answers: " + incorrectAnswers);
            $("#startOver").html("Start Over")

            return;
        }
        $(".time").text("Time Remaining: " + timeRemaining + " secs");
    };

    function reset() {

        $("#startOver").on("click", function () {

            timeRemaining = 45;
            questionPos = 0;
            correctAnswers = 0;
            incorrectAnswers = 0;
            displayTrivia();
            checkAnswer();
            timer();
        });

    }

});


