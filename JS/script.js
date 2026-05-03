const hamburger = document.getElementById('hamburger');
const navLinks = document.querySelector('.navLinks');
const heroContent = document.querySelector(".hero-content");

if (hamburger && navLinks) {
    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('open');
        navLinks.classList.toggle('open');

        heroContent.style.marginTop = navLinks.classList.contains('open') ? '240px' : '0';
    });

    // close menu when a link is clicked
    navLinks.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
            hamburger.classList.remove('open');
            navLinks.classList.remove('open');
        });
    });
}  

const icons = document.querySelectorAll(".icon");
const icon2 = document.querySelectorAll(".icon2");

icons.forEach(icon => {
    icon.addEventListener("click", () => {
        icon.style.display = "none";
        icon.nextElementSibling.style.display = "block";
    })
});

icon2.forEach(iconII => {
    iconII.addEventListener("click", () => {
        iconII.style.display = "none";
        iconII.previousElementSibling.style.display = "block";
    })
});

const detailBtns = document.querySelectorAll(".detail-link");

detailBtns.forEach(detaiBtn => {
   detaiBtn.addEventListener("click", () => {
    const card = detaiBtn.closest(".house-card");

    const property = {
        name: card.getAttribute("data-name"),
        image: card.getAttribute("data-image"),
        price: card.getAttribute("data-price"),
        location: card.getAttribute("data-location"),
        bedIcon: card.getAttribute("data-bedIcon"),
        bathIcon: card.getAttribute("data-bathIcon"),
        sizeIcon: card.getAttribute("data-sizeIcon"),
        beds: card.getAttribute("data-beds"),
        baths: card.getAttribute("data-baths"),
        size: card.getAttribute("data-size"), 
        description: card.getAttribute("data-description"),
        agentImage: card.getAttribute("data-agentImage"),
        amenities: [
            {icon: "fi fi-sr-swimming-pool", label:"Pool"},
            {icon: "fi fi-rr-garage-open", label:"Garage"},
            {icon: "fi fi-rr-wifi", label:"Wi-Fi"},
            {icon: "fi fi-ss-gym", label:"Gym"},
            {icon: "fi fi-rr-daisy-alt", label: "Garden"},
            {icon: "fi fi-rr-roof", label: "Rooftop"}
        ]
    }

    localStorage.setItem("property", JSON.stringify(property));
    console.log(property.name);
    window.location.href = "property.html";
   })
});

const searchInput = document.querySelector(".search-input");
const searchBtn = document.querySelector(".search-btn");
const houseCards = document.querySelectorAll(".house-card");

searchBtn.addEventListener("click", () => {
    const searchValue = searchInput.value.toLowerCase();

    houseCards.forEach(houseCard => {
        const name = houseCard.dataset.name.toLowerCase();
        const location = houseCard.dataset.location.toLowerCase();
        const price = houseCard.dataset.price.toLowerCase();

        if (name.includes(searchValue) || location.includes(searchValue) || price.includes(searchValue)) {
            houseCard.style.display = "block";
        } else {
            houseCard.style.display = "none";
           
        }

        if (!name.includes(searchValue) && !location.includes(searchValue) && !price.includes(searchValue)) {
            document.getElementById("no-result").textContent = "No properties found.";
        }
    });
});