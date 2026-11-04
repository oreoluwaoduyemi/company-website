// Reveal website sections as visitors scroll
const sections = document.querySelectorAll(
  ".about, .projects, .contact"
);

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = "1";
      entry.target.style.transform = "translateY(0)";
      observer.unobserve(entry.target);
    }
  });
}, {
  threshold: 0.15
});

sections.forEach((section) => {
  section.style.opacity = "0";
  section.style.transform = "translateY(25px)";
  section.style.transition = "opacity 0.8s ease, transform 0.8s ease";
  observer.observe(section);
});

// Automatically update the copyright year
const footer = document.querySelector("footer p");

if (footer) {
  footer.textContent =
    `© ${new Date().getFullYear()} MONO HOUSE. DEMO PROJECT BY STUDIO X.`;
}