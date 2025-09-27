const questions = [
  {category: "urology",
  question: "How many kidneys do humans have?",
  choices: ["three", "six", "two"],
  answer: "two"}, 
  { 
  category: "cardiology",
  question: "What is the main function of the heart?",
  choices: ["pump blood", "digest food", "filter toxins"],
  answer: "pump blood"
},

{ 
  category: "neurology",
  question: "Which part of the brain controls balance and coordination?",
  choices: ["cerebellum", "frontal lobe", "hippocampus"],
  answer: "cerebellum"
},

{ 
  category: "orthopedics",
  question: "Which is the largest bone in the human body?",
  choices: ["femur", "tibia", "humerus"],
  answer: "femur"
},

{ 
  category: "dermatology",
  question: "What is the outermost layer of the skin called?",
  choices: ["dermis", "epidermis", "hypodermis"],
  answer: "epidermis"
}

]

function getRandomQuestion(questions) {
  const randomIndex = Math.floor(Math.random() * questions.length)
  const chosenQuestion = questions[randomIndex];
  return chosenQuestion;
}

function getRandomComputerChoice(arr) {
  const randomChoice = Math.floor(Math.random() * arr.length)
  const chosenChoice = arr[randomChoice];
  return chosenChoice;

}

function getResults(chosenQuestion, c_choice) {
  if (c_choice === chosenQuestion.answer) {
    return "The computer's choice is correct!";
  } else {
    return `The computer's choice is wrong. The correct answer is: ${chosenQuestion.answer}`
  }
}