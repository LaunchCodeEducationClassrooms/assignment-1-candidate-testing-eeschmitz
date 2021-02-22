const input = require('readline-sync');

// TODO 2: modify your quiz app to ask 5 questions //

// TODO 1.1a: Define candidateName // 
let candidateName = "";
// TODO 1.2a: Define question, correctAnswer, and candidateAnswer //
let question;
let correctAnswer;
let candidateAnswer;
let questions = ["1) Who was the first American woman in space? ","2) True or false: 5000 meters = 5 kilometers. ", "3) (5 + 3)/2 * 10 = ? ", "4) Given the array [8, 'Orbit', 'Trajectory', 45], what entry is at index 2? ", "5) What is the minimum crew size for the ISS? "];
let correctAnswers = ["Sally Ride", "True", "40", "Trajectory", "3"];
let candidateAnswers = [];
let correctGivenAnswers = 0;
const quizQuestions = 5


function askForName() {
  // TODO 1.1b: Ask for candidate's name //
const input = require('readline-sync');

candidateName = input.question("What is your name? ")
}

function askQuestion() {
  // TODO 1.2b: Ask candidate the question and assign the response as candidateAnswer //

for (let i = 0; i < 5; i++) {
  candidateAnswers.push(input.question(`${questions[i]}`));
}
}

function gradeQuiz(candidateAnswers) {

  // TODO 1.2c: Let the candidate know if they have answered the question correctly or incorrectly // 
console.log("\n--- RESULTS ---")
console.log(`Candidate Name: ${candidateName}`)
console.log(`\n${questions[0]} \nYour Answer: ${candidateAnswers[0]} \nCorrect Answer: ${correctAnswers[0]}`)
console.log(`\n${questions[1]} \nYour Answer: ${candidateAnswers[1]} \nCorrect Answer: ${correctAnswers[1]}`)
console.log(`\n${questions[2]} \nYour Answer: ${candidateAnswers[2]} \nCorrect Answer: ${correctAnswers[2]}`)
console.log(`\n${questions[3]} \nYour Answer: ${candidateAnswers[3]} \nCorrect Answer: ${correctAnswers[3]}`)
console.log(`\n${questions[4]} \nYour Answer: ${candidateAnswers[4]} \nCorrect Answer: ${correctAnswers[4]}`)

if (candidateAnswers[0].toLowerCase === correctAnswers[0].toLowerCase){
  (correctGivenAnswers = correctGivenAnswers + 1)
} else {
  (correctGivenAnswers = correctGivenAnswers +0)
}
if (candidateAnswers[1].toLowerCase === correctAnswers[1].toLowerCase){
  (correctGivenAnswers = correctGivenAnswers + 1)
} else {
  (correctGivenAnswers = correctGivenAnswers +0)
}
if (candidateAnswers[2].toLowerCase === correctAnswers[2].toLowerCase){
  (correctGivenAnswers = correctGivenAnswers + 1)
} else {
  (correctGivenAnswers = correctGivenAnswers +0)
}
if (candidateAnswers[3].toLowerCase === correctAnswers[3].toLowerCase){
  (correctGivenAnswers = correctGivenAnswers + 1)
} else {
  (correctGivenAnswers = correctGivenAnswers +0)
}
if (candidateAnswers[4].toLowerCase === correctAnswers[4].toLowerCase){
  (correctGivenAnswers = correctGivenAnswers + 1)
} else {
  (correctGivenAnswers = correctGivenAnswers +0)
}
  let grade = (correctGivenAnswers / quizQuestions)*100 ;
  
  console.log(`\n--- Overall Score: ${grade}% ---`)

if (grade >= 80){
  console.log("--- STATUS: PASSED ---")
} else {
  console.log("--- STATUS: FAILED ---")
}
  return grade;
}

function runProgram() {
  askForName();
  // TODO 1.1c: Ask for candidate's name //
  console.log(`Welcome to the quiz, ${candidateName}. Let's get started.`)
  askQuestion();
  gradeQuiz(this.candidateAnswers);
}

// Don't write any code below this line //
// And don't change these or your program will not run as expected //
module.exports = {
  candidateName: candidateName,
  question: question,
  correctAnswer: correctAnswer,
  candidateAnswer: candidateAnswer,
  questions: questions,
  correctAnswers: correctAnswers,
  candidateAnswers: candidateAnswers,
  gradeQuiz: gradeQuiz,
  runProgram: runProgram
};