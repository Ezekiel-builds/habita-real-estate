const agents = document.querySelectorAll(".agent-card");
const input = document.querySelector(".search-input");
const filterButtons = document.querySelectorAll(".filterBtn");

let currentFilter = "All"; // Default filter

function filterAgents() {
    const value = input.value.toLowerCase();

    agents.forEach(agent => {
const name = agent.dataset.name.toLowerCase();
const specialty = agent.dataset.specialty.toLowerCase();

        const matchInput = name.includes(value) || specialty.includes(value);
        const matchFilters = currentFilter === "All" || specialty === currentFilter.toLowerCase();

        if (matchFilters && matchInput) {
            agent.classList.remove("hide");
        } else {
            agent.classList.add("hide");
        }
    });
}

input.addEventListener("input", filterAgents);

filterButtons.forEach(btn => {
    btn.addEventListener("click", (e) => {
        currentFilter = e.target.textContent.trim();
        filterAgents();
    });
});

const contactButtons = document.querySelectorAll(".contact-btn");

contactButtons.forEach(contactBtn => {
    const email = contactBtn.dataset.email;

    contactBtn.addEventListener("click", () => {
        window.location.href = `mailto:agent${email}subject=Property Inquiry`;
        console.log(email);
    })
})
