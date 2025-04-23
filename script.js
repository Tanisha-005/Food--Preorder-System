// Wait until the whole page is loaded
document.addEventListener("DOMContentLoaded", function () {
  // Get the form element
  const form = document.getElementById("preorderForm");

  // Listen for form submission
  form.addEventListener("submit", function (event) {
    event.preventDefault(); // Stop form from submitting

    // Get the values
    const name = document.getElementById("name").value;
    const food = document.getElementById("food").value;
    const time = document.getElementById("time").value;

    // Show a confirmation popup
    alert(`Thanks ${name}! Your order for ${food} is scheduled at ${time}.`);
  });
});
