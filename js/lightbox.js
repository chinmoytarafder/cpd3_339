document.addEventListener("DOMContentLoaded", function() {
    const galleryImages = document.querySelectorAll("#gallery img");

    const lightbox = document.createElement("div");
    lightbox.id = "lightbox";
    lightbox.style.position = "fixed";
    lightbox.style.top = "0";
    lightbox.style.left = "0";
    lightbox.style.width = "100%";
    lightbox.style.height = "100%";
    lightbox.style.background = "rgba(0, 0, 0, 0.8)";
    lightbox.style.display = "flex";
    lightbox.style.flexDirection = "column";
    lightbox.style.alignItems = "center";
    lightbox.style.justifyContent = "center";
    lightbox.style.visibility = "hidden";
    lightbox.style.opacity = "0";
    lightbox.style.transition = "opacity 0.3s ease, visibility 0.3s ease";
    lightbox.setAttribute("tabindex", "0"); // Make lightbox focusable

    const lightboxImage = document.createElement("img");
    lightboxImage.style.maxWidth = "90%";
    lightboxImage.style.maxHeight = "80%";
    lightboxImage.style.borderRadius = "8px";
    lightboxImage.src = "";
    lightboxImage.alt = "";
    lightbox.appendChild(lightboxImage);

    const caption = document.createElement("p");
    caption.style.color = "white";
    caption.style.fontSize = "1.2em";
    caption.style.marginTop = "10px";
    caption.style.textAlign = "center";
    lightbox.appendChild(caption);

    const downloadLink = document.createElement("a");
    downloadLink.textContent = "Download Image";
    downloadLink.style.color = "#ffcc00";
    downloadLink.style.fontSize = "1em";
    downloadLink.style.marginTop = "10px";
    downloadLink.style.textDecoration = "underline";
    downloadLink.style.cursor = "pointer";
    downloadLink.setAttribute("download", "");
    downloadLink.setAttribute("tabindex", "0");
    downloadLink.setAttribute("aria-label", "Download the enlarged image"); // Improved labeling
    lightbox.appendChild(downloadLink);

    document.body.appendChild(lightbox);

    galleryImages.forEach(img => {
        img.setAttribute("tabindex", "0");

        img.addEventListener("click", function() {
            openLightbox(img);
        });

        img.addEventListener("keydown", function(event) {
            if (event.key === "Enter") {
                openLightbox(img);
            }
        });
    });

    function openLightbox(img) {
        lightboxImage.src = img.src;
        lightboxImage.alt = img.alt || "Enlarged view of selected image"; // More descriptive alt text
        caption.textContent = img.alt || "Enlarged view of selected image";
        downloadLink.href = img.src;
        lightbox.style.visibility = "visible";
        lightbox.style.opacity = "1";

        setTimeout(() => {
            lightbox.focus(); // Move focus to lightbox
        }, 300);
    }

    lightbox.addEventListener("click", function(event) {
        if (event.target !== lightboxImage && event.target !== downloadLink) {
            closeLightbox();
        }
    });

    document.addEventListener("keydown", function(event) {
        if (event.key === "Escape" && lightbox.style.visibility === "visible") {
            closeLightbox();
        }
    });

    function closeLightbox() {
        lightbox.style.opacity = "0";
        setTimeout(() => {
            lightbox.style.visibility = "hidden";
        }, 300);
    }
});
