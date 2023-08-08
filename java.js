// java.js

document.addEventListener("DOMContentLoaded", function () {
    const products = [
      { id: 1, price: 250 },
      { id: 2, price: 260 },
      { id: 3, price: 175 },
      { id: 4, price: 185 },
      { id: 5, price: 165 },
      { id: 6, price: 250 },

      // Add more products here if needed
    ];
  
    const cart = {};
  
    products.forEach(product => {
      const increaseBtn = document.getElementById(`increaseBtn${product.id}`);
      const decreaseBtn = document.getElementById(`decreaseBtn${product.id}`);
      const inputField = document.getElementById(`inputField${product.id}`);
  
      increaseBtn.addEventListener("click", function () {
        let currentValue = parseInt(inputField.value);
        inputField.value = currentValue + 1;
        cart[product.id] = currentValue + 1;
        updateTotal();
      });
  
      decreaseBtn.addEventListener("click", function () {
        let currentValue = parseInt(inputField.value);
        if (currentValue > 0) {
          inputField.value = currentValue - 1;
          cart[product.id] = currentValue - 1;
          updateTotal();
        }
      });
    });
  
    function updateTotal() {
      let grandTotal = 0;
      for (const productId in cart) {
        const quantity = cart[productId];
        const product = products.find(item => item.id === parseInt(productId));
        if (product) {
          grandTotal += product.price * quantity;
        }
      }
  
      document.getElementById("grandTotal").textContent = grandTotal;
    }
  });
  