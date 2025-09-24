// Scroll to features section from Home
function scrollToContent() {
  document.getElementById("features").scrollIntoView({ behavior: "smooth" });
}

// Contact form validation
document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("contactForm");
  if (form) {
    form.addEventListener("submit", (e) => {
      e.preventDefault();

      const name = document.getElementById("name").value.trim();
      const email = document.getElementById("email").value.trim();
      const message = document.getElementById("message").value.trim();

      if (!name || !email || !message) {
        alert("Please fill in all fields.");
        return;
      }

      if (message.length < 10) {
        alert("Message should be at least 10 characters long.");
        return;
      }

      alert("Thank you! Your message has been sent.");
      form.reset();
    });
  }
});
