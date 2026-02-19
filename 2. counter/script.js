//
//
// -------------------------------------------------
// Method 1
// -------------------------------------------------
/*
const counterNum = document.querySelector(".counter-num");
const decreaseBtn = document.querySelector(".decrease");
const resetBtn = document.querySelector(".reset");
const increaseBtn = document.querySelector(".increase");

const checkColor = (num) => {
  if (num > 0) {
    counterNum.style.color = "blue";
  } else if (num < 0) {
    counterNum.style.color = "red";
  } else {
    counterNum.style.color = "#111";
  }
};

const increament = () => {
  const curNum = Number(counterNum.textContent);
  increamentNum = curNum + 1;

  // check color
  checkColor(increamentNum);

  counterNum.textContent = increamentNum;
};

const decreament = () => {
  const curNum = Number(counterNum.textContent);
  const decreamentNum = curNum - 1;

  // check color
  checkColor(decreamentNum);

  counterNum.textContent = decreamentNum;
};

const reset = () => {
  counterNum.style.color = "#111";
  counterNum.textContent = "0";
};

increaseBtn.addEventListener("click", increament);
decreaseBtn.addEventListener("click", decreament);
resetBtn.addEventListener("click", reset);
*/
// -------------------------------------------------
// Method 2
// -------------------------------------------------

const counterNum = document.querySelector(".counter-num");
const btns = document.querySelectorAll(".btn");

// Initial value
let count = 0;

btns.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    const styles = e.target.classList;

    if (styles.contains("decrease")) {
      count--;
    } else if (styles.contains("increase")) {
      count++;
    } else {
      count = 0;
    }

    // change color
    if (count > 0) {
      counterNum.style.color = "blue";
    } else if (count < 0) {
      counterNum.style.color = "red";
    } else {
      counterNum.style.color = "#111";
    }

    counterNum.textContent = count;
  });
});
