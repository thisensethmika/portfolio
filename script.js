const menuToggle = document.querySelector(".menu-toggle");
const nav = document.querySelector(".nav");

if (menuToggle && nav) {
  menuToggle.addEventListener("click", () => {
    const isOpen = nav.classList.toggle("open");
    menuToggle.setAttribute("aria-expanded", String(isOpen));
  });
}

const contactForm = document.getElementById("contactForm");
const formMessage = document.getElementById("formMessage");

if (contactForm && formMessage) {
  contactForm.addEventListener("submit", (e) => {
    e.preventDefault();

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const subject = document.getElementById("subject").value.trim();
    const message = document.getElementById("message").value.trim();

    if (!name || !email || !subject || !message) {
      formMessage.textContent = "Please fill in all fields.";
      return;
    }

    formMessage.textContent = "Thank you! Your message has been submitted successfully.";
    contactForm.reset();
  });
}

document.addEventListener("click", (e) => {
  if (!nav || !menuToggle) return;
  if (!nav.contains(e.target) && !menuToggle.contains(e.target)) {
    nav.classList.remove("open");
    menuToggle.setAttribute("aria-expanded", "false");
  }
});