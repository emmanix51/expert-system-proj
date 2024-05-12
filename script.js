let currentQuestion = 1;
let resultElement = document.getElementById("result");
const tourspot = [
  "Dalipuga Centennial Park",
  "NPC Nature's Park",
  "Maria Cristina Falls (Iligan)",
  "St. Michael's Cathedral",
  "Villa Gracia White Water Rafting",
  "Paseo de Santiago",
  "Lawis Spring",
  "Iligan City Public Plaza",
  "Tinago Falls",
  "Mount Agad-agad",
  "Iligan City Wet Park",
];

function answerQuestion(answer) {
  if (currentQuestion === 1) {
    if (answer === "yes") {
      showResult(tourspot[9]);
      currentQuestion = 2;
      document.getElementById("question1").style.display = "none";
      document.getElementById("question2").style.display = "block";
    } else {
      currentQuestion = 2;
      document.getElementById("question1").style.display = "none";
      document.getElementById("question2").style.display = "block";
    }
  } else if (currentQuestion === 2) {
    if (answer === "yes") {
      showResult(tourspot[0], tourspot[1], tourspot[10]);
      currentQuestion = 3;
      document.getElementById("question2").style.display = "none";
      document.getElementById("question3").style.display = "block";
    } else {
      currentQuestion = 3;
      document.getElementById("question2").style.display = "none";
      document.getElementById("question3").style.display = "block";
    }
  } else if (currentQuestion === 3) {
    if (answer === "yes") {
      showResult(tourspot[3], tourspot[5], tourspot[7], tourspot[2]);
      currentQuestion = 4;
      document.getElementById("question3").style.display = "none";
      document.getElementById("question4").style.display = "block";
    } else {
      currentQuestion = 4;
      document.getElementById("question3").style.display = "none";
      document.getElementById("question4").style.display = "block";
    }
  } else if (currentQuestion === 4) {
    if (answer === "yes") {
      showResult(tourspot[2], tourspot[4], tourspot[6], tourspot[8]);
    } else {
    }
  }
}

function showResult(...args) {
  resultElement.innerHTML = "";

  args.forEach((arg) => {
    let argElement = document.createElement("div");

    argElement.textContent = arg;
    argElement.style.padding = "4px";
    argElement.style.margin = "5px";
    argElement.style.border = "1px solid black";
    resultElement.appendChild(argElement);
  });

  resultElement.style.display = "flex";
}
