const calculateBtn = document.getElementById("calc-btn");
const resetBtn = document.getElementById("reset");

const heightInput = document.getElementById("height");
const weightInput = document.getElementById("weight");

const resultArea = document.getElementById("result");

const resetInputs = () => {
  heightInput.value = "";
  weightInput.value = "";
  resultArea.innerHTML = "";
};

const calculateBMI = () => {
  const enteredHeight = +heightInput.value;
  const enteredWeight = +weightInput.value;

  const bmi = enteredWeight / (enteredHeight * enteredHeight);
  if (isNaN(bmi)) {
    return;
  }
  const resultElement = document.createElement("ion-card");

  resultElement.innerHTML = `
  <ion-card-content><h2>${bmi}</h2></ion-card-content>`;
  resultArea.innerHTML = "";
  resultArea.appendChild(resultElement);
};

calculateBtn.addEventListener("click", calculateBMI);

resetBtn.addEventListener("click", resetInputs);
