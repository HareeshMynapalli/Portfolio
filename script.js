document.addEventListener("DOMContentLoaded", function() {
    const projectItems = document.querySelectorAll(".project-item");
    const certificateItems = document.querySelectorAll(".certificate-item");

    projectItems.forEach((item) => {
        item.classList.add("slide-in");
    });

    certificateItems.forEach((item) => {
        item.classList.add("slide-in");
    });
});