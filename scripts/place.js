// Wind Chill Calculation
function calculateWindChill(tempF, windSpeed) {
    if (tempF <= 50 && windSpeed > 3.0)  {

    const chill = 35.74 + (0.6215 * tempF) - (35.75 *Math.pow(windSpeed, 0.16 )) + (0.4275 * tempF * Math.pow(windSpeed, 0.16));
    return Math.round(chill) + "℃";
    } else {
    return "N/A"
    }
}

document.addEventListener("DOMContentLoaded", () => { 
    const temp = parseFloat(document.getElementById("temp").textContent);
    const wind = parseFloat(document.getElementById("wind").textContent);
    const windchill = calculateWindChill(temp, wind);
    document.getElementById("windchill").textContent = windchill;


// Footer: The Last Modified Date
const lastModifiedElement = document.getElementById("last-modified");
if (lastModifiedElement) {
    const lastModified = new Date(document.lastModified);
    const options = {
        day: "numeric",
        month: "long",
        year: "numeric",
        hour: "2-digit",
        minute: "2-digit"
    };
    lastModifiedElement.textContent = lastModified.toLocaleDateString("en-GB", options);
    lastModifiedElement.setAttribute("datetime", lastModified.toISOString());
}

 // Footer: Current Yaer
 const footer = document.querySelector(".site-footer");
 if (footer)  {
    const year = new Date().getFullYear();
    footer.innerHTML += ` | ${year}`;
 }

});


   

    