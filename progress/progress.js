export class Progress {
  constructor({
    container,
    value = 0,
    progressColor = "#005cff",
    ringColor = "#eaf0f6",
    size = 160,
    strokeWidth = 8,
    animated = false,
    hidden = false,
    speed = 1,
  }) {
    this.container = document.querySelector(container);
    this.value = value;
    this.size = size;
    this.radius = 45;
    this.strokeWidth = strokeWidth;
    this.animated = animated;
    this.hidden = hidden;
    this.speed = speed;
    this.progressColor = progressColor;
    this.ringColor = ringColor;
    this.circumference = Math.ceil(2 * Math.PI * this.radius);
    this.init();
    this.setValue(value);
  }

  init() {
    const padding = this.strokeWidth / 2;
    this.container.innerHTML = `
  <svg width="${this.size}" height="${
      this.size
    }" viewBox="${-padding} ${-padding} ${100 + 2 * padding} ${
      100 + 2 * padding
    }" ${`style="animation-duration: ${this.speed}s"`}>
    <circle class="progress-ring" cx="50" cy="50"
      r="${this.radius}" stroke-width="${this.strokeWidth}" stroke="${
      this.ringColor
    }"/>
    <circle class="progress-bar" cx="50" cy="50"
      r="${this.radius}" stroke-width="${this.strokeWidth}"
      stroke="${this.progressColor}" stroke-dasharray="${this.circumference}"
      stroke-dashoffset="${this.circumference}" />
  </svg>
`;
    this.progressBar = this.container.querySelector(".progress-bar");
  }

  setValue(value) {
    if (typeof value !== "number" || value < 0) value = 0;
    if (value > 100) value = 100;
    const offset = this.circumference - (value / 100) * this.circumference;
    this.progressBar.style.strokeDashoffset = offset;
    this.value = value;
  }

  getValue() {
    return this.value;
  }

  setSize(size) {
    this.size = size;
    this.radius = (this.size - this.strokeWidth) / 2;
    this.init();
  }

  setAnimated(isAnimated) {
    if (typeof isAnimated !== "boolean") return;
    this.animated = isAnimated;
    if (isAnimated) {
      this.container.querySelector("svg").classList.add("animate");
    } else {
      this.container.querySelector("svg").classList.remove("animate");
    }
  }

  setHidden(isHidden) {
    if (typeof isHidden !== "boolean") return;
    this.hidden = isHidden;
    if (isHidden) {
      this.container.classList.add("hidden");
    } else {
      this.container.classList.remove("hidden");
    }
  }
}
