let cart = [];
let totalPrice = 0;

function addToCart(item, price) {
    // Add the item to the cart
    cart.push({ item, price });
    totalPrice += price;

    // Update the cart UI
    updateCartUI();
}

function updateCartUI() {
    const cartItemsElement = document.getElementById('cart-items');
    cartItemsElement.innerHTML = '';  // Clear previous cart items

    cart.forEach(cartItem => {
        const li = document.createElement('li');
        li.textContent = `${cartItem.item} - $${cartItem.price}`;
        cartItemsElement.appendChild(li);
    });

    document.getElementById('total-price').textContent = totalPrice.toFixed(2);
}

function checkout() {
    if (cart.length === 0) {
        alert('Your cart is empty!');
        return;
    }

    alert('Proceeding to checkout...');
  
}
