document.addEventListener("DOMContentLoaded", () => {
  const buttons = document.querySelectorAll(".favorite-icon");

  buttons.forEach((btn) => {
    btn.addEventListener("click", function () {
      if (this.classList.contains("filled")) {
        // Already filled → remove class, then set empty heart
        this.classList.remove("filled");
        this.innerHTML = "&#9825;"; // empty heart
      } else {
        // Not filled → add class first, then set filled heart
        this.classList.add("filled");
        this.innerHTML = "&#10084;"; // filled heart
      }
    });
  });
});
