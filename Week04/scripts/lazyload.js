document.addEventListener("DOMContentLoaded", () => {
    const modifiedSpan = document.getElementById("lastModified");
    
    const rawDate = new Date(document.lastModified);
    const options = { day: 'numeric', month: 'long', year: 'numeric'};
    const formattedDate = rawDate.toLocaleDateString('en-GB', options);

    modifiedSpan.textContent = formattedDate;
});