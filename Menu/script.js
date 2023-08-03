
function addToCart(id, price) {
  let cart = JSON.parse(localStorage.getItem('cart')) || [];

  const item = { id, price: parseFloat(price) };
  cart.push(item);
  localStorage.setItem('cart', JSON.stringify(cart));
}

document.querySelector('#toggle').addEventListener('click', () => {
  document.querySelector('#sidebar').classList.toggle('collapsed');
  document.querySelector('#content').classList.toggle('collapsed');
});

document.querySelectorAll('.card').forEach(card => {
  const button = card.querySelector('.card-button');
  const id = card.getAttribute('data-id');
  const price = card.getAttribute('data-price');

  button.addEventListener('click', () => addToCart(id, price));
});
