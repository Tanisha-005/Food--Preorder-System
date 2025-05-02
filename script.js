// Get references to the elements
const quantityInputs = document.querySelectorAll(".quantity");
const orderItemsList = document.querySelector(".order-items");
const totalDisplay = document.querySelector(".total");
const placeOrderBtn = document.getElementById("place-order");

// Function to update the order summary
function updateOrderSummary() {
    let total = 0;
    orderItemsList.innerHTML = ""; // Clear the order items list

    quantityInputs.forEach(input => {
        const quantity = parseInt(input.value); // Get the quantity value
        const foodItem = input.closest(".food-item"); // Find the food item div
        const name = foodItem.dataset.name; // Get the name from the data attribute
        const price = parseFloat(foodItem.dataset.price); // Get the price from the data attribute

        if (quantity > 0) {
            const itemTotal = quantity * price;
            total += itemTotal;

            // Create a new list item for the order
            const listItem = document.createElement("li");
            listItem.textContent = `${name} x${quantity} = $${itemTotal.toFixed(2)}`;
            orderItemsList.appendChild(listItem);
        }
    });

    // Update the total amount
    totalDisplay.textContent = `Total: $${total.toFixed(2)}`;
}

// Event listener to handle quantity changes
quantityInputs.forEach(input => {
    input.addEventListener("input", updateOrderSummary);
});

// Event listener for the Place Order button
placeOrderBtn.addEventListener("click", () => {
    // Check if there are any items in the cart
    if (orderItemsList.children.length === 0) {
        alert("❌ No items in your cart.");
    } else {
        // Show confirmation message when order is placed
        alert("✅ Your order has been placed successfully!");
        
        // Optionally, clear the cart after placing the order
        quantityInputs.forEach(input => input.value = 0);
        
        // Update the order summary
        updateOrderSummary();
    }
});
