document.addEventListener("DOMContentLoaded", function () {
    let buttons = document.getElementsByTagName("button");

    for (let button of buttons) {
        button.addEventListener("click", function () {
            if (this.getAttribute("data-type") === "submit") {
               checkAnswer();
            } else {
                let gameType = this.getAttribute("data-type");
                runGame(gameType)
            }
        });
    }
    //enter button to submit 
    document.getElementById("answer-box").addEventListener("keydown", function(event){
      if (event.key === "Enter"){
        checkAnswer();
       }
    })
    //default game on start up
    runGame("addition")
});
function runGame(gameType){
    //generate two numbers from 1-25
  document.getElementById("answer-box").value ="";
  document.getElementById("answer-box").focus()
  let num1 = Math.floor(Math.random() * 25 + 1)
  let num2 = Math.floor(Math.random() * 25 + 1)
  if(gameType === "addition"){
  displayAdditionQuestion(num1, num2)
  } else if(gameType === "multiply"){
    displayMultiplyQuestion(num1, num2)
  } else if(gameType === "subtract"){
    displaySubtractQuestion(num1, num2)
  }else if(gameType === "division"){
	    num1 < num2
	    displayDivisionQuestion(num1, num2)
	}
  else{
    alert(`Unknown Game Type ${gameType}`)
    throw `Unknown Game Type ${gameType}, aborting`


  }

  }
function checkAnswer(){
  //checks the answer against the first element in the returned calculateCorrectAnswer array
  let userAnswer = parseInt(document.getElementById("answer-box").value);
  let calculatedAnswer = calculateCorrectAnswer();
  let isCorrect = userAnswer === calculatedAnswer[0];
    if(isCorrect) {
      alert("Hey! You got it right! :)");
      incrementScore()
  }
  else{
    alert(`Incorrect answer of ${userAnswer}. The correct answer was ${calculatedAnswer[0]}!`);
    incrementWrongAnswer()
  }
  runGame(calculatedAnswer[1]);

}
function calculateCorrectAnswer(){
  //gets the operands (the number) and the operator (plus, minus etc) directly from the DOM
  let operand1 = parseInt(document.getElementById("operand1").innerText);
  let operand2 = parseInt(document.getElementById("operand2").innerText);
  let operator = document.getElementById("operator").innerText;

  if(operator === "+"){
    return[operand1 + operand2, "addition"] //returns an array of answer and game type
  }else if(operator === "x") {
    return[operand1 * operand2, "multiply"] //returns an array of answer and game type
  }else if(operator === "-"){
    return[operand1 - operand2, "subtract"] //returns an array of answer and game type
  }else if (operator ==="/"){
	    operand1 < operand2
	    return [operand1 / operand2, "division"];
	}
  else{
    alert(`Unimplemented operator ${operator}`)
    throw `Unimplemented operator ${operator}, aborting!`
  }
}
function incrementScore(){
  //correct score count
  let oldScore = parseInt(document.getElementById("score").innerText);
document.getElementById("score").innerHTML = ++oldScore

}
function incrementWrongAnswer(){
  //incorrect score count
  let oldScore = parseInt(document.getElementById("incorrect").innerText);
  document.getElementById("incorrect").innerHTML = ++oldScore

}
function displayAdditionQuestion(operand1, operand2){
document.getElementById("operand1").textContent = operand1
document.getElementById("operand2").textContent = operand2
document.getElementById("operator").textContent = "+"
}
function displaySubtractQuestion(operand1, operand2){
document.getElementById("operand1").textContent = operand1 > operand2 ? operand1 : operand2;
document.getElementById("operand2").textContent = operand1 > operand2 ? operand2 : operand1;
document.getElementById("operator").textContent = "-"
}
function displayMultiplyQuestion(operand1, operand2){
document.getElementById("operand1").textContent = operand1
document.getElementById("operand2").textContent = operand2
document.getElementById("operator").textContent = "x"

}
function displayDivisionQuestion(operand1, operand2) {

	document.getElementById("operand1").textContent = operand1 > operand2 ? operand1 : operand2;
	document.getElementById("operand2").textContent = operand1 > operand2 ? operand2 : operand1;
	document.getElementById("operator").textContent = "/";
	  let timesOperand = operand1 * operand2
	  document.getElementById("operand1").textContent = timesOperand;
	  let divideOperand =  timesOperand / operand1 / operand2
	  
	  
}



