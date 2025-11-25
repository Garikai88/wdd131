

function setActiveFilter(clickedLink) {
  document.querySelector("nav a").forEach(link => link.classList.remove("active"));
  clickedLink.classList.add("active");
}

// 1. Temple data array


const temples = [
     
  {
    templeName: "Aba Nigeria",
    location: "Aba, Nigeria",
    dedicated: "2005-08-07",
    area: 11500,
    imageUrl:
   "https://churchofjesuschristtemples.org/assets/img/temples/aba-nigeria-temple/aba-nigeria-temple-5087-main.jpg"
  },

  {
    templeName: "Manti Utah",
    location: "Manti, Utah, United States",
    dedicated: "1888-05-21",
    area: 74792,
    imageUrl:
    "https://churchofjesuschristtemples.org/assets/img/temples/manti-utah-temple/manti-utah-temple-40551-main.jpg"
  },
  {
    templeName: "Payson Utah",
    location: "Payson, Utah, United States",
    dedicated: "2015-06-07",
    area: 96630,
    imageUrl:
    "https://churchofjesuschristtemples.org/assets/img/temples/payson-utah-temple/payson-utah-temple-62834-main.jpg"
  },
  {
    templeName: "Yigo Guam",
    location: "Yigo, Guam",
    dedicated: "2020-05-02",
    area: 6861,
    imageUrl:
    "https://churchofjesuschristtemples.org/assets/img/temples/yigo-guam-temple/yigo-guam-temple-26495-main.jpg"
  },
  {
    templeName: "Washington D.C.",
    location: "Kensington, Maryland, United States",
    dedicated: "1974-11-19",
    area: 156558,
    imageUrl:
    "https://churchofjesuschristtemples.org/assets/img/temples/washington-d.c.-temple/washington-d.c.-temple-14992-main.jpg"
  },

  {
    templeName: "Lima Perú",
    location: "Lima, Perú",
    dedicated: "1986-01-10",
    area: 9600,
    imageUrl:
    "https://churchofjesuschristtemples.org/assets/img/temples/lima-peru-temple/lima-peru-temple-12721-main.jpg"
  },

  {
    templeName: "Mexico City Mexico",
    location: "Mexico City, Mexico",
    dedicated: "1983-12-02",
    area: 116642,
    imageUrl:
    "https://churchofjesuschristtemples.org/assets/img/temples/mexico-city-mexico-temple/mexico-city-mexico-temple-4060-main.jpg"
  },

  {
    templeName: "Harare, Zimbabwe",
    location: "Harare, Zimbabwe",
    dedicated: "2026-02-01",
    area: 17250,
    imageUrl:
    "https://churchofjesuschristtemples.org/assets/img/temples/harare-zimbabwe-temple/harare-zimbabwe-temple-63352-main.jpg"
  },

  {
    templeName: "Johannesburg, South Africa",
    location: "Johannesburg, South Africa",
    dedicated: "1985-08-24",
    area: 19184,
    imageUrl:
   "https://churchofjesuschristtemples.org/assets/img/temples/johannesburg-south-africa-temple/johannesburg-south-africa-temple-22475-main.jpg"
  },

  {
    templeName: "Durban, South Africa",
    location: "Durban, South Africa",
    dedicated: "2020-02-16",
    area: 19860,
    imageUrl:
    "https://churchofjesuschristtemples.org/assets/img/temples/durban-south-africa-temple/durban-south-africa-temple-7936-main.jpg"
  },
  
];

// 2. DOMContentLoaded listener
document.addEventListener("DOMContentLoaded", () =>  {
        // The last year modified for the footer
        const yearSpan= document.getElementById("currentYear");
        const modifiedSpan = document.getElementById("lastModified");

        // Footer year and last modified
        if (yearSpan) yearSpan.textContent = new Date().getFullYear();
        if (modifiedSpan) modifiedSpan.textContent = document.lastModified;
});

        // Hamburger menu toggle
        const hamburgerBtn = document.getElementById("hamburgerBtn");
        const nav = document.getElementById("primaryNav");

        if (hamburgerBtn && nav) {
        hamburgerBtn.addEventListener("click", () => {
            nav.classList.toggle("open");
            hamburgerBtn.innerHTML = nav.classList.contains("open") ? "&#10006" : "&#9776;";
        });
    }



// 3. Temple card generation
function displayTemples(filteredTemples) {
  const gallery = document.querySelector(".gallery");
  gallery.innerHTML ="";

  filteredTemples.forEach(temple => {
    const card = document.createElement("section");
    card.classList.add('temple-card');

    const name = document.createElement("h3");
    name.textContent = temple.templeName;

    const location = document.createElement("p");
    location.textContent = `Location: ${temple.location}`;

    const dedication = document.createElement("p");
    const dedicationDate = new Date(temple.dedicated);
    const today = new Date();
    dedication.textContent = dedicationDate > today
    ? `Scheduled dedication: ${dedicationDate.toLocaleDateString()}`
    : `Dedicated: ${dedicationDate.toLocaleDateString()}`;

    const area = document.createElement("p");
    area.textContent = `Area: ${temple.area.toLocaleString()} sq ft`;

    const image = document.createElement("img");
    image.src = temple.imageUrl;
    image.alt = `${temple.templeName} Temple in ${temple.location}`;
    image.loading = "lazy";

    card.append(name, location, dedication, area, image);
    gallery.appendChild(card);

  });
}

document.addEventListener("DOMContentLoaded", () => {
  // The footer logic and humberger toggle 
      const yearSpan = document.getElementById("currentYear");
      const modifiedSpan = document.getElementById("lastModified");
      if (yearSpan) yearSpan.textContent = new Date().getFullYear();
      if (modifiedSpan) modifiedSpan.textContent = document.lastModified;

  // Hamburger menu toggle
      const hamburgerBtn = document.getElementById("hamburgerBtn");
      const nav = document.getElementById("primaryNav");

      if (hamburgerBtn && nav) {
        hamburgerBtn.addEventListener("click", () => {
          nav.classList.toggle("open");
          hamburgerBtn.innerHTML = nav.classList.contains("open") ? "&#10006;" : "&#9776;";
          hamburgerBtn.setAttribute("aria-expanded", nav.class.contains("open"));

          
        });
      }

      // Filtering logic
      document.querySelectorAll("nav a").forEach(link => {
        link.addEventListener("click", (e) => {
          const id = e.target.id;
          let filtered = temples;

          if (id == "old") {
            filtered = temples.filter(t => new Date(t.dedicated).getFullYear() < 1900);
          } else if (id == "new") {
            filtered = temples.filter(t => new Date(t.dedicated).getFullYear() > 2000);
          } else if (id == "large") {
            filtered = temples.filter(t => t.area > 90000);
          } else if (id == "small") {
            filtered = temples.filter(t => t.area < 1000);
          }

          displayTemples(filtered);
          setActiveFilter(e.target)
        });
      });

      // Initial display
      displayTemples(temples);
    });

  