import { Progress } from "./progress/progress.js";

document.addEventListener("DOMContentLoaded", () => {
  const progress = new Progress({
    container: "#progressBlock",
    value: 0,
    size: 150,
    speed: 1,
    animated: true,
    strokeWidth: 9,
    progressColor: "var(--primary-color)",
    ringColor: "var(--secondary-color)",
  });

  const valueInput = document.getElementById("valueInput");
  const animateToggle = document.getElementById("animateToggle");
  const hideToggle = document.getElementById("hideToggle");

  if (valueInput) valueInput.addEventListener("input", handleValueChange);
  if (valueInput) valueInput.addEventListener("keypress", handleValueKeyPress);
  if (animateToggle) animateToggle.addEventListener("change", handleAnimationToggle);
  if (hideToggle) hideToggle.addEventListener("change", handleVisibilityToggle);

  function handleValueChange() {
    const numericValue = Math.min(100, parseInt(valueInput.value.replace(/[^0-9]/g, ""), 10) || 0);
    valueInput.value = numericValue;
    progress.setValue(numericValue);
  }

  function handleValueKeyPress(event) {
    if (!/\d/.test(event.key)) {
      event.preventDefault();
    }
  }

  function handleAnimationToggle() {
    progress.setAnimated(animateToggle.checked);
  }

  function handleVisibilityToggle() {
    progress.setHidden(hideToggle.checked);
  }
});
