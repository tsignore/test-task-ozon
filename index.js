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

  // Управление значением
  valueInput.addEventListener("input", () => {
    valueInput.value = valueInput.value.replace(/[^0-9]/g, "");
    const value = valueInput.value.trim();

    const numericValue = value === "" ? 0 : Math.min(100, parseInt(value, 10));
    progress.setValue(numericValue);
    valueInput.value = numericValue;
  });

  // Запрет ввода букв и знаков
  valueInput.addEventListener("keypress", (event) => {
    if (!/[0-9]/.test(event.key)) {
      event.preventDefault();
    }
  });

  // Управление анимацией
  animateToggle.addEventListener("change", () => {
    progress.setAnimated(animateToggle.checked);
  });

  // Управление видимостью
  hideToggle.addEventListener("change", () => {
    progress.setHidden(hideToggle.checked);
  });
});
