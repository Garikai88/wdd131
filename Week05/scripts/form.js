const products = [
            {id: "fc-1888", name: "Flux Capacitor", averageRating: 5 },
            {id: "fc-2056", name: "Power Laces", averageRating: 3.5},
            {id: "ac-2022", name: "Time Circuits", averageRating: 3.5},
            {id: "ac-2023", name: "Low Voltage Reactor", averageRating: 4},
            {id: "jj-1969", name: "Wrap Equalizer", averageRating: 5}
        ];

        const select = document.getElementById("product");

        products.forEach(product => {
            const option = document.createElement("option");
            option.value = product.id;
            option.textContent = product.name;
            select.appendChild(option);
        });

// Review counter logic (only on confirmation page)
if (window.location.pathname.includes("review.html")) {
    let reviewCount = localStorage.getItem("reviewCount");
    reviewCount = reviewCount ? parseInt(reviewCount) + 1 : 1;
    localStorage.setItem("reviewCount", reviewCount);

    const message = document.createElement("p");
    message.textContent = `You have submitted ${reviewCount} review${reviewCount > 1 ? "s" : ""}.`;
    document.body.appendChild(message);
}