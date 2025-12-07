// Services
const services = [
    {
        title: "Residential",
        description: "Custom homes, renovations, and extensions tailored to your vision.",
        image: "project/images/residential-icon.webp"
    },

    {
        title: "Commercial",
        description: "Office building, retail spaces, and business renovations.",
        image: "project/images/commercial-icon.webp"
    },

    {
        title: "Industrial",
        description: "Warehouses, factories, and large-scale infrastructure projects.",
        image: "project/images/industrial-icon.webp"
    }
]


// Projects data
const projects = [
    {
        id: 1,
        title: "Project 1",
        category: "Residential",
        description: "Residential home renovation project",
        price: 12000,
        image: "project/images/project-1-600.webp"
    },

    {
        id: 2,
        title: "Project 2",
        category: "Commercial",
        description: "Commercial office building projects",
        price: 200000,
        image: "project/images/project-2-600.webp"
    },

    {
        id: 3,
        title: "Project 3",
        category: "Industrial",
        description: "Industrial warehouse project",
        price: 1500000,
        image: "project/images/project-3-600.webp"
    }
];

// Functions
function formatCurrency(amount) {
    return `$${amount.toFixed(2)}`;
}

function applyDiscount(price) {
    // Conditional branching
    return price > 200000 ? price * 0.9 : price;
}

function getDiscountedPrice(price, discount) {
    return price - (price * discount);
}

// DOM Manipulation + Template Literals
const grid = document.querySelector(".project-grid");

// Safety check
if (!grid) {
    console.warn("Project grid not found.");
    return; // we stop the execution if the element doesn't exist 
}

// Build project cards dynamically using template literals 
projects.forEach(project => {
    const card = document.createElement("div");
    card.classList.add("project-card");
    card.innerHTML = `
    <img src="${project.image}" alt="${project.title} image" loading="lazy">
    <h3>${project.title}</h3>
    <p>Category: ${project.category}</p>
    <p>Price: ${formatCurrency(applyDiscount(project.price))}</p>
    <button data-id="${project.id}">Save</button>
    `;
    grid.appendChild(card);
});

// Event Listener + Conditional Branching + localStorage
grid.addEventListener("click", e => {
    if (e.target.tagName === "BUTTON") {
        const id= e.target.dataset.id;
        const selected = projects.find(p => p.id == id);

        // Save to localStorage
        localStorage.setItem("savedProject", JSON.stringify(seleceted));

        // Feedback to user
        alert(`Saved: ${selected.title}`);
    }
});

// Array Methods Example
const affordableProjects = projects.filter(p => p.price < 200);
console.log(`Affordable projects: ${affordableProjects.map(p => p.title).join(",")}`);