





console.log("puddin");

//startpage-quiz and timer hidden//
function startpage() {
    $("#QUIZ").hide();
}
startpage();

var showQuiz = function () {
    $("#QUIZ").show();
    playGame();
};
//on click quiz and timer appear//
$("#startbutton").click(function () {
    showQuiz();
    $("#startbutton").css({ "background-color": "blue" });
    run();
    //resultspage();
   // timesup();
});

//console.log(questions[0].correctAnswer);

//countdown timer//
var number = 11;
var intervalId;
var wins = 0;
var losses = 0;
var count = 0;

function run() {
    clearInterval(intervalId);
    intervalId = setInterval(decrement, 1000);
}

function decrement() {
    number--;
    $("#startbutton").html(number);
    if (number === 0) {
        stop();
        timesup();
        resultspage();
        
        
    }
}

function stop() {
    clearInterval(intervalId);
}

//questions array-objects//
var questions = [
    {
        question: "when was the first programmable computer invented?",
        answers: ["1933", "1948", "1952", "1938", "1942"],
        correctAnswer: 3
    },

    {
        question: "Who invented the internet?",
        answers: ["bill gates and george bush", "david lee roth", "steve jobs and donald trump", "bob ross", "vincent cerf and robert kahn"],
        correctAnswer: 4
    },

    {
        question: "what is the mouse?",
        answers: ["a mammal", "a rodent", "device which controls cursor", "a small mammal", "all of the above"],
        correctAnswer: 4
    },

    {
        question: "what does DOM stand for?",
        answers: ["direct option modulator", "document object model", "device operating mouse", "dangerous oversized man", "drive over manhole"],
        correctAnswer: 1
    },
    {
        question: "How many keys are typically on a keyboard?",
        answers: ["100", "101", "1913", "88", "96"],
        correctAnswer: 1
    },
];
var go = function () {

    for (i = 0; i < questions.length; i++) {
        console.log(questions[i]);
    }


};

go();

function playGame(){
    $("#mars").text(questions[count].question);
    $("#a").html(questions[count].answers[0]);
    $("#b").html(questions[count].answers[1]);
    $("#c").html(questions[count].answers[2]);
    $("#d").html(questions[count].answers[3]);
    $("#e").html(questions[count].answers[4]);
    number=11;


}

$(".answer").on("click", function () {
   
    if($(this).attr("value") == questions[count].correctAnswer){
        wins++;
        alert("CORRECT!")
        count++;
        playGame();
    }
    else{
        losses++;
        alert("INCORRECT!");
        count++;
        playGame();
    }
    resultspage();
});

function timesup() {
    alert("TIMES UP!")
    losses++;
    count++;
    playGame();
    run();
}

function resultspage() {
    if(count === 4){
        $("#QUIZ").hide();
        $("#startbutton").hide();
        $("#results").html("<h2>"+"correct guesses:"+wins+"."+"</h2>");
        $("#resultsZ").html("<h2>"+"incorrect guesses:"+losses+"."+"</h2>");
    }
};













