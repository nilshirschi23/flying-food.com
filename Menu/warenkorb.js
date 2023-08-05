function displayCart() {
  let warenkorb = JSON.parse(localStorage.getItem('cart')) || [];
  let totalPrice = 0;
  let cartContent = document.querySelector('#cart-content');
  
  warenkorb.forEach((item, index) => {
    let itemDiv = document.createElement('div');
    itemDiv.innerHTML = `
      <h2>${item.id}</h2>
      <p>Preis: ${item.price} CHF</p>
      <img class="delete-item" data-index="${index}" src="trash.png" width="20px" alt="delete item">
    `;
    
    cartContent.appendChild(itemDiv);
    totalPrice += item.price;
  });
  
  document.querySelector('#total-price').innerText = `Total Preis: ${totalPrice.toFixed(2)} CHF`;

  document.querySelectorAll('.delete-item').forEach(item => {
    item.addEventListener('click', function() {
      let index = this.getAttribute('data-index');
      warenkorb.splice(index, 1);
      localStorage.setItem('cart', JSON.stringify(warenkorb));
      cartContent.innerHTML = '';
      displayCart();
    });
  });

  document.querySelector('#next-button').addEventListener('click', function() {
    window.location.href = 'form.html';
  });
}

displayCart();
