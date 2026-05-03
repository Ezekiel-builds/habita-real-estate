const container = document.querySelector(".product-list");

  const data = localStorage.getItem("property");
        /* if (!data) {
            container.innerHTML = "<p>Please select a property from the main page first.</p>";
            return;
        } */ 
        const property = JSON.parse(data);
        const description = document.querySelector(".description")

        console.log(property.name);

        container.innerHTML = `
        <div class="property-image">
        <img src="${property.image}" alt="${property.name}">
        </div>
        
        <div class="property-container">
        <div class="property-info">

        <div class=property-header>
        <h3>${property.name}</h3>

        <p class="property-price">${property.price}</p>
        </div>

        <div class="location">
         <p>${property.location}</p>
         </div>

         <div class="property-details">
        <p><i class="${property.bedIcon}"></i> ${property.beds} Beds</p>
        <p><i class="${property.bathIcon}"></i> ${property.baths}</p>
        <p><i class="${property.sizeIcon}"></i> ${property.size}</p>
         </div>
         
        </div>

        <div class="property-description">
         <h3>Property Description</h3>
        <p>${property.description}</p>
        </div>

        <div class="property-amenities">
        <h3>Amenities</h3>
        <ul>
         ${property.amenities.map(amenity => `<li><i class="${amenity.icon}"></i> ${amenity.label}</li>`).join("")}
        </ul>
        <button class="tour-btn">Schedule a Tour</button>
        </div>

        <div class="schedule-container">
            <form class="schedule-form">
             <span class="close-btn">&times;</span>
             <h2>Schedule a Tour</h2>
            <p>Want to see the property in person? Schedule a tour today!</p>
                <input class="input" type="text" placeholder="Your Name" required>
                <input class="input" type="email" placeholder="Your Email" required>
                <input class="input" type="tel" placeholder="Your Phone Number" required>
                <input class="input" type="date" required>
                <button type="submit" class="schedule-btn">Submit</button>
            </form>
                
        </div>

         <div class="success-message">
         <div class="success-txts">
        <svg class="checkmark" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" >
  <path class="check-path" stroke-linecap="round" stroke-linejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
</svg>

     <p>Tour Scheduled Successfully!</p>
     </div>
     </div>
        `;

        const form = document.querySelector(".schedule-container");
        const successModal = document.querySelector(".success-message"); 
        const tourBtn = document.querySelector(".tour-btn");
        const closeBtn = document.querySelector(".close-btn");
    /*     const submitBtn = document.querySelector(".schedule-btn"); */
        const scheduleForm = document.querySelector(".schedule-form");
        const inputs = document.querySelectorAll(".input");
      

      tourBtn.addEventListener("click", () => {
        form.classList.add("show");
        console.log("clicked!")
      });

      closeBtn.addEventListener("click", () => {
        form.classList.remove("show");
      });

      window.addEventListener("click", (e) => {
        if(e.target === form) {
         form.classList.remove("show");
        }
      });

      scheduleForm.addEventListener("submit", (e) => {
  e.preventDefault();

  const inputs = form.querySelectorAll("input");

  let isValid = true;

  inputs.forEach(input => {
    if (input.value.trim() === "") {
      isValid = false;
    }
  });

  if (!isValid) {
    alert("Fill all fields");
    return;
  }
  
  form.classList.remove("show");
  successModal.classList.add("show");
  setTimeout(() => {
    successModal.classList.remove("show");
  },300)
});