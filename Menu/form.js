document.getElementById("meinFormular").addEventListener("submit", function(event){
  event.preventDefault();

  let warenkorb = JSON.parse(localStorage.getItem('cart')) || [];
  let vorname = document.getElementById("vorname").value;
  let nachname = document.getElementById("nachname").value;
  let sitzbank = document.getElementById("sitzbank").value;

  let message = "Vorname: " + vorname + "\nNachname: " + nachname + "\nSitzbank Nummer: " + sitzbank + "\n\nWarenkorb:\n";

  warenkorb.forEach((item, index) => {
    message += `Produkt ID: ${item.id}, Preis: ${item.price} CHF\n`;
  });

  document.querySelector('#cart-input').value = message;

  // Formular absenden
  document.querySelector('#meinFormular').submit();
});
