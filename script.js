// Scroll animations
const sections = document.querySelectorAll(".animate");

const observer = new IntersectionObserver(
  entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("show");
      } else {
        entry.target.classList.remove("show");
      }
    });
  },
  { threshold: 0.25 }
);

sections.forEach(section => observer.observe(section));

// Contact form interaction
const form = document.getElementById("contactForm");
const button = document.getElementById("sendBtn");
const buttonText = button.querySelector(".btn-text");
const successMsg = document.getElementById("successMsg");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  button.classList.add("loading");
  buttonText.textContent = "Sending...";

  setTimeout(() => {
    button.classList.remove("loading");
    buttonText.textContent = "Send Message";
    successMsg.style.display = "block";
    form.reset();

    setTimeout(() => {
      successMsg.style.display = "none";
    }, 4000);
  }, 1500);
});
