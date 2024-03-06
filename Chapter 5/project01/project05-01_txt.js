"use strict";
/*    JavaScript 7th Edition
      Chapter 5
      Project 05-01

      Project to present an online quiz with a countdown clock
      Author: 
      Date:   

      Filename: project05-01.js
*/

// Constants to set the time given for the quiz in seconds
// and the correct answers to each quiz question
const quizTime = 10;
const correctAnswers = ["10", "4", "-6", "5", "-7"];

// Elements in the quiz page
let startQuiz = document.getElementById("startquiz");
let quizClock = document.getElementById("quizclock");
let overlay = document.getElementById("overlay");
let quizStarted = false

// Initialize the quiz time
quizClock.value = quizTime;
let timeLeft = quizTime;

// Declare the ID for timed commands
// and the node list for questions

function beginQuiz() {
   if(quizStarted){
      return
   }
   quizStarted = true;

   overlay.className = 'showquiz'
   let interval = setInterval(() => {
      timeLeft--
      quizClock.value = timeLeft

      if(timeLeft == 0){
         clearInterval(interval)
         endQuiz()
      }
   }, 1000)
}

function endQuiz() {
   const score = checkAnswers()
   const message = `Your score was: ${score} / 5`
   timeLeft = quizTime
   quizStarted = false
   window.alert(message)
}

/*------------- Function to check the student answers ----------------*/
function checkAnswers() {
   let correctCount = 0;
   let questionList = document.getElementsByTagName('input')
   
   for (let i = 0; i < correctAnswers.length; i++) {
      const j = i + 2
      console.log(questionList[j].value)
      if (questionList[j].value === correctAnswers[i]) {
         correctCount++;
         questionList[j].className = "";
      } else {
         questionList[j].className = "wronganswer";
      }      
   }

   return correctCount;
}

