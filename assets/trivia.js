






console.log("puddin");

//startpage-quiz and timer hidden//
function startpage() {
    $("#QUIZ").hide();
}
startpage();

//on click quiz and timer appear//
$("#startbutton").click(function () {
    $("#QUIZ").show();
    $("#startbutton").css({"background-color": "blue"});
   run();
});

//console.log(questions[0].correctAnswer);

//countdown timer//
var number = 30;
var intervalId;


function run() {
    clearInterval(intervalId);
    intervalId = setInterval(decrement, 1000);
  }

  function decrement () {
      number--;
      $("#startbutton").html(number);
      if (number === 0) {
          stop();
          alert("TIMES UP!");
         //$("#QUIZ").addClass("done").html("<div>"+"results"+"</div>");
      }
  }

  function stop() {
      clearInterval(intervalId);
  }

//questions array-objects//
var questions = [    
    {
        question1: "when was the first programmable computer invented?",
        answers: ["1922","1935","1944","1938"],
        correctAnswer: 3
    },
    
    {
        question2: "What is 30/3?",
        answers: ["scott","rand","tad","billy"],
        correctAnswer: 0
    },

{
    question3: "when was the pop programmable computer invented?",
    answers: ["b","c","g","h"],
    correctAnswer: 2
},

{
    question4: "when was the first programmable computer invented?",
    answers: ["k","j","q","b"],
    correctAnswer: 1
}
];

function onSubmit(){
alert("working");
var score = 0;
var numofQuestions = 5;
var answerarray= ['d','e','e','b','b'];

var q1 = document.forms['quiz']['q1'].value;
var q2 = document.forms['quiz']['q2'].value;
var q3 = document.forms['quiz']['q3'].value;
var q4 = document.forms['quiz']['q4'].value;
var q5 = document.forms['quiz']['q5'].value;


for(var i = 1; i <= numofQuestions; i++){
if(eval('q' + i) == ""){

alert("you missed question number" + i);
}
}

for(var i = 1; i <= numofQuestions; i++){
if(eval('q' + i) == answerarray[i - 1]){
    score ++;
}
}

$('#QUIZ').hide();
$("#results").text("<h2>"+"you scored"+score+"out of" + numofquestion+"<h2>");

return false;


}










 //                   function loadquestions(){
   //                     
//
  //                  }
//
//
  //                  //how many right//
    //                score= 0;
//
  //                  for(var i =0; i<questions.length; i++){
    //                    response = prompt(question[i].prompt);
      //                  if(response == question[i].answer){
        ///                    score ++;
           //             } else {
             ///               alert("Wrong");
                ///        }
                   // }
//submit button to results page//


//question/answer display//

//answer choice storage// answer choice compare//

//answer choices correct/ 

//answer choices wrong/

//display results on click "submit button" or timesup/ 











 