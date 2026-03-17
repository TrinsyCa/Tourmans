const BasePath = window.location.pathname.split("/").slice(0, -1).join("/") + "/";

const PreloadContainer = document.getElementById("PreloadContainer");
const PreloadImages = PreloadContainer.querySelectorAll("img");

PreloadImages.forEach(function(img) {
    img.onload = function() {
        img.classList.add("loaded");
    };
    setTimeout(() => {
        img.classList.add("inactive");
    }, 600);
});