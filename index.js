let count = null;

const setCountDisplay = () => {
  const countDisplay = document.querySelector("#count-display");
  countDisplay.innerHTML = count;
};

const setCount = (newCount) => {
  count = newCount;
  setCountDisplay();
};

document.addEventListener("DOMContentLoaded", function (e) {
  setCount(0);
  const increaseCountBtn = document.querySelector("#increase-count");
  increaseCountBtn.addEventListener("click", function (e) {
    setCount(count + 1);
  });
});
