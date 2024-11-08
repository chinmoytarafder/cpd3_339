document.addEventListener("DOMContentLoaded", function() {
    // Select all headings and images
    const focusableElements = document.querySelectorAll("td, h2, h3, h4, h5, h6, img");

    // Add tabindex="0" to each element to make it focusable
    focusableElements.forEach(element => {
        element.setAttribute("tabindex", "0");
    });
});
