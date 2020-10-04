const calculateBtn = document.querySelector("ion-button");

const heightInput = document.getElementById("height");
const weightInput = document.getElementById("weight");

const calculateBMI = () => {
  const enteredHeight = +heightInput.value;
  const enteredWeight = +weightInput.value;

  const bmi = enteredWeight / (enteredHeight * enteredHeight);

  console.log(bmi);
};

calculateBtn.addEventListener("click", calculateBMI);
