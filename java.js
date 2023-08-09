// java.js

document.addEventListener("DOMContentLoaded", function () {
    const products = [
      { id: 1, price: 250 ,name:"จิตวิทยาสายดาร์ก"},
      { id: 2, price: 260, name:"ถึงโมโหก็อย่าสู้กับคนโง่"},
      { id: 3, price: 175,name:"เมื่อแมวที่บ้านคุณผันตัวมาเป็นไลฟ์โค้ช" },
      { id: 4, price: 185,name:"ช่างหัวคุณสิครับ!"},
      { id: 5, price: 165 ,name:"ป่านนี้เขานั่งกินไอติมสบายใจเฉิบไปแล้ว"},
      { id: 6, price: 250 ,name:"เมื่อเส้นทางการทำงานโรยไปด้วยเปลือกทุเรียน"},

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
        let billDetails = "";
      
        for (const productId in cart) {
          const quantity = cart[productId];
          const product = products.find(item => item.id === parseInt(productId));
          if (product) {
            grandTotal += product.price * quantity;
            billDetails += `ชื่อหนังสือ: ${product.name}\nจำนวน: ${quantity} เล่ม\nราคา: ${product.price * quantity} บาท\n\n`;
          }
        }
      
        document.getElementById("billDetails").textContent = billDetails;
        document.getElementById("grandTotal").textContent = grandTotal;
      }
      
  });
  // Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal 
btn.onclick = function() {
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}