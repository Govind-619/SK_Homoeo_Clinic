// Placeholder for dynamic functionality
document.addEventListener("DOMContentLoaded", () => {
    console.log("Hospital website ready!");
});

// Handle form submission
document.getElementById("contactForm").addEventListener("submit", function (e) {
    e.preventDefault(); // Prevent form from refreshing the page

    const form = e.target;
    const formData = new FormData(form);

    // Submit form data to Web3Forms
    fetch(form.action, {
        method: "POST",
        body: formData,
    })
        .then((response) => {
            if (response.ok) {
                alert("Thank you! Your message has been sent successfully.");
                form.reset(); // Reset form after successful submission
            } else {
                alert("Oops! Something went wrong. Please try again later.");
            }
        })
        .catch((error) => {
            alert("Oops! Something went wrong. Please try again later.");
        });
});
