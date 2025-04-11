let iconcart = document.querySelector('.iconcart');
let cart = document.querySelector('.cart');
let container = document.querySelector('.container');
let close = document.querySelector('.close');

iconcart.addEventListener('click', () => {
    if (cart.style.right === '-100%') {
        cart.style.right = '0';
        container.style.transform = 'translateX(-400px)';
    } else {
        cart.style.right = '-100%';
        container.style.transform = 'translateX(0)';
    }
});
let closeButton = document.querySelector('.close');
closeButton.addEventListener('click', () => {
      cart.style.right = '-100%';
      container.style.transform = 'translateX(0)';
  });

  const products = [ /* paste the array above here */ ];
let products = null;
//get data from file json
fetch ('product.json')
.then (responce => responce.jason ())
.then (data => {
      products = data;
      addDatToHTML();
      
})
  
