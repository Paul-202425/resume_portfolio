document.addEventListener("DOMContentLoaded", () => {
  const themeToggleBtn = document.getElementById("theme-toggle");
  const menuIcon = document.getElementById("menu-icon");
  const navLinks = document.getElementById("nav-links");
  const dropdown = document.querySelector(".dropdown");
  const contactForm = document.getElementById("contact-form");

  // 🌙 Theme Toggle
  if (themeToggleBtn) {
    themeToggleBtn.addEventListener("click", () => {
      document.body.classList.toggle("dark-mode");
      themeToggleBtn.textContent = document.body.classList.contains("dark-mode")
        ? "☀️ Light Mode"
        : "🌙 Dark Mode";
    });
  }

  // 📱 Mobile Menu Toggle
  if (menuIcon && navLinks) {
    menuIcon.addEventListener("click", (e) => {
      e.stopPropagation();
      navLinks.classList.toggle("active");
    });
  }

  // 📂 Dropdown Toggle (mobile only)
  if (dropdown) {
    const dropdownToggle = dropdown.querySelector("a");

    if (dropdownToggle) {
      dropdownToggle.addEventListener("click", (e) => {
        if (window.innerWidth <= 768) {
          e.preventDefault();
          dropdown.classList.toggle("active");
        }
      });
    }
  }

  // ❌ Close nav and dropdown on outside click
  document.addEventListener("click", (e) => {
    const clickedInsideMenu =
      navLinks.contains(e.target) || menuIcon.contains(e.target);
    const clickedInsideDropdown = dropdown && dropdown.contains(e.target);

    if (!clickedInsideMenu && !clickedInsideDropdown) {
      navLinks.classList.remove("active");
      if (dropdown) dropdown.classList.remove("active");
    }
  });

  // ✅ Contact Form Submission
  if (contactForm) {
    contactForm.addEventListener("submit", (e) => {
      e.preventDefault();
      alert("Thanks for your message, Paul will get back to you soon!");
      contactForm.reset();
    });
  }
});
const bgChangeBtn = document.getElementById("bg-change-btn");

if (bgChangeBtn) {
  const colors = ["#f3f0f9", "#d0e7ff", "#eeeeee", "#ffefd5", "#222222"];
  let currentIndex = 0;

  bgChangeBtn.addEventListener("click", () => {
    currentIndex = (currentIndex + 1) % colors.length;
    document.body.style.backgroundColor = colors[currentIndex];
  });
}
