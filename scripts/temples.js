document.addEventListener("DOMContentLoaded", () =>  {
        const yearSpan= document.getElementById("currentYear");
        const modifiedSpan = document.getElementById("lastModified");

        if (yearSpan) yearSpan.textContent = new Date().getFullYear();
        if (modifiedSpan) mofdifiedSpan.textContent = document.lastModified;

        const hamburgerBtn = document.getElementById("hamburgerBtn");
        const nav = document.getElementById("primaryNav");

        if (hamburgerBtn && nav) {
        hamburgerBtn.addEventListener("click", () => {
            navigator.classList.toggle("open");
            hamburgerBtn.innerHTML = navigator.classList.contains("open") ? "&#10006" : "&#9776;";
        });
    }
})

