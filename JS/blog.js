const input = document.getElementById("maintenanceInput");
const notifyBtn = document.querySelector(".notification-btn");

notifyBtn.addEventListener("click", () => {
    const email = input.value.trim();

    if (email === "") {
        alert("Please enter your email.");
        return;
    }
    alert(`Thank you for subscribing! We will send updates to ${email}.`);
    input.value = "";
})