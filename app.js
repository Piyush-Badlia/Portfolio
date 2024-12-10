// JavaScript to open and close the contact form
const hireMeButton = document.querySelector(".hire-me-btn");
const contactForm = document.getElementById("contactForm");
const overlay = document.getElementById("overlay");

// Function to open the form
hireMeButton.addEventListener("click", () => {
    contactForm.style.display = "block";
    overlay.style.display = "block";
});

// Function to close the form
function closeForm() {
    contactForm.style.display = "none";
    overlay.style.display = "none";
}

// Event listener for closing form when overlay is clicked
overlay.addEventListener("click", closeForm);

// Function to clear form details
function clearForm(){
    document.querySelector("#name").value = "";
    document.querySelector("#email").value = "";
    document.querySelector("#message").value = "";
    closeForm(); // Close the form after sending message
}

// Function to close the form and also clear fields
function closeForm() {
    document.getElementById("contactForm").style.display = "none";
    document.getElementById("overlay").style.display = "none";
    clearForm(); // Ensure fields are cleared on closing
}
