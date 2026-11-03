const menuToggle = document.getElementById("menuToggle");
const navigation = document.getElementById("navigation");

// Mobile navigation
menuToggle.addEventListener("click", () => {
  const isOpen = navigation.classList.toggle("open");

  menuToggle.setAttribute("aria-expanded", String(isOpen));
});

// Close mobile menu after clicking a link
navigation.querySelectorAll("a").forEach(link => {
  link.addEventListener("click", () => {
    navigation.classList.remove("open");
    menuToggle.setAttribute("aria-expanded", "false");
  });
});

// Automatically update copyright year
document.getElementById("year").textContent =
  new Date().getFullYear();

// Select a service from its service card
document.querySelectorAll("[data-service]").forEach(link => {
  link.addEventListener("click", () => {
    const service = link.dataset.service;
    const serviceSelect = document.getElementById("service");

    serviceSelect.value = service;
  });
});

// Project enquiry form
const projectForm = document.getElementById("projectForm");
const formNote = document.getElementById("formNote");


// Reveal elements when they enter the screen
const revealElements = document.querySelectorAll(
  ".service-card, .work-card, .process-grid > div, .about-content"
);

revealElements.forEach(element => {
  element.classList.add("reveal");
});

if ("IntersectionObserver" in window) {
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        observer.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.12
  });

  revealElements.forEach(element => observer.observe(element));
} else {
  revealElements.forEach(element => element.classList.add("visible"));
}