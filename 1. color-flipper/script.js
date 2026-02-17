//
//
//
const hexBtn = document.querySelector(".hex-btn");
const rgbBtn = document.querySelector(".rgb-btn");
const hexColorElement = document.querySelector(".hex-color");
const btn = document.querySelector(".btn");
const body = document.body;

const hexArr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];

const getRandomNum = () => {
  const randNum = Math.floor(Math.random() * hexArr.length);
  return randNum;
};

const createHex = () => {
  let hexColor = "#";

  for (let i = 0; i < 6; i++) {
    const randomNum = getRandomNum();

    hexColor += hexArr[randomNum];
  }

  body.style.backgroundColor = hexColor;
  hexColorElement.textContent = hexColor;

  return hexColor;
};

const convertToRgb = (hexColor) => {
  const hexWithoutHash = hexColor.slice(1);
  const r = parseInt(hexWithoutHash.slice(0, 2), 16);
  const g = parseInt(hexWithoutHash.slice(2, 4), 16);
  const b = parseInt(hexWithoutHash.slice(4), 16);

  return `rgba(${r}, ${g}, ${b})`;
};

let currentHexColor = "#406459";

btn.addEventListener("click", () => {
  currentHexColor = createHex();
});

hexBtn.addEventListener("click", () => {
  hexColorElement.textContent = currentHexColor;

  hexBtn.classList.add("active");
  rgbBtn.classList.remove("active");
});

rgbBtn.addEventListener("click", () => {
  const rbgColor = convertToRgb(currentHexColor);
  hexColorElement.textContent = rbgColor;

  rgbBtn.classList.add("active");
  hexBtn.classList.remove("active");
});
