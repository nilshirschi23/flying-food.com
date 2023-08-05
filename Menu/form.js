document.getElementById("meinFormular").addEventListener("submit", function(event){
  event.preventDefault();

  let vorname = document.getElementById("vorname").value;
  let nachname = document.getElementById("nachname").value;
  let sitzbank = document.getElementById("sitzbank").value;

  alert("Vorname: " + vorname + "\nNachname: " + nachname + "\nSitzbank Nummer: " + sitzbank);
});

document.querySelector('#total-price').innerText += `${totalPrice.toFixed(2)} CHF`;

  document.querySelectorAll('.delete-item').forEach(item => {
    item.addEventListener('click', function() {
      let index = this.getAttribute('data-index');
      warenkorb.splice(index, 1);
      localStorage.setItem('cart', JSON.stringify(warenkorb));
      cartContent.innerHTML = '';
      document.querySelector('#cart-input').value = '';
      displayCart();
    });
  });

  document.querySelector('#pay-button').addEventListener('click', function() {
    document.querySelector('#cart-form').submit();
  });
}
