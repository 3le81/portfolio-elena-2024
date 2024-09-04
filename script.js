// Function to handle the menu toggle
document.addEventListener("DOMContentLoaded", function () {
    const menuToggle = document.querySelector(".menu-toggle");
    const nav = document.querySelector("nav");

    menuToggle.addEventListener("click", function () {
        const isExpanded = menuToggle.getAttribute("aria-expanded") === "true";
        // Toggle 'aria-expanded' attribute
        menuToggle.setAttribute("aria-expanded", !isExpanded);
        // Toggle navigation visibility
        nav.classList.toggle("collapsed");
        // Toggle menu button active state
        menuToggle.classList.toggle("active");
    });
});
