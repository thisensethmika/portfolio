const menuToggle = document.querySelector(".menu-toggle");
const nav = document.querySelector(".nav");
/*Handles the opening and closing of the mobile navigation menu.*/

if (menuToggle && nav) {
  menuToggle.addEventListener("click", () => {
    const isOpen = nav.classList.toggle("open");
    menuToggle.setAttribute("aria-expanded", String(isOpen));
  });
}
/*Captures references to the form and message display area.*/

const contactForm = document.getElementById("contactForm");
const formMessage = document.getElementById("formMessage");

if (contactForm && formMessage) {
  contactForm.addEventListener("submit", (e) => {
    e.preventDefault();

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const subject = document.getElementById("subject").value.trim();
    const message = document.getElementById("message").value.trim();
    /*Ensures that all input fields (Name, Email, Subject, Message*/

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
