// stateManager.js
// Type definition for better clarity
/** @type {number|null} */
let count = null;

// Explicit error handling
const setCountDisplay = () => {
  const countDisplay = document.querySelector("#count-display");
  if (!countDisplay) {
    throw new Error("Count display element not found");
  }
  countDisplay.innerHTML = String(count);
};

const setCount = (newCount) => {
  if (typeof newCount !== "number") {
    throw new TypeError("Count must be a number");
  }
  count = newCount;
  setCountDisplay();
};

// Using defer in HTML instead
document.addEventListener("DOMContentLoaded", function () {
  try {
    setCount(0);
    const increaseCountBtn = document.querySelector("#increase-count");
    if (!increaseCountBtn) {
      throw new Error("Increase count button not found");
    }

    increaseCountBtn.addEventListener("click", function () {
      setCount(count + 1);
    });
  } catch (error) {
    console.error("Failed to initialize counter:", error);
  }
});
