// Importing simulated reviews data
import reviews from "./data.js";

const author = document.getElementById("author");
const job = document.getElementById("job");
const info = document.getElementById("info");
const img = document.getElementById("person-img");
const prevBtn = document.querySelector(".prev-btn");
const nextBtn = document.querySelector(".next-btn");
const randomBtn = document.querySelector(".random-btn");

let currentReview = 0;

const showReview = (person) => {
  const review = reviews[person];
  img.src = review.img;
  author.textContent = review.name;
  job.textContent = review.job;
  info.textContent = review.text;
};

const randomNum = () => {
  return Math.floor(Math.random() * reviews.length);
};

document.addEventListener("DOMContentLoaded", () => {
  showReview(currentReview);
});
prevBtn.addEventListener("click", () => {
  currentReview--;

  if (currentReview < 0) {
    currentReview = reviews.length - 1;
  }
  showReview(currentReview);
});
nextBtn.addEventListener("click", () => {
  currentReview++;

  if (currentReview > reviews.length - 1) {
    currentReview = 0;
  }
  showReview(currentReview);
});

randomBtn.addEventListener("click", () => {
  currentReview = randomNum();
  showReview(currentReview);
});
