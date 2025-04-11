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

close.addEventListener('click', () => {
    cart.style.right = '-100%';
    container.style.transform = 'translateX(0)';
});

let products = null;

fetch('product.json')
    .then(response => response.json()) // fixed .jason()
    .then(data => {
        products = data;
        addDataToHTML();
    });

function addDataToHTML() {
    let listproductHTML = document.querySelector('.listproduct');
    listproductHTML.innerHTML = '';

    products.forEach(product => {
        let item = document.createElement('div');
        item.classList.add('item');
        item.innerHTML = `
            <img src="${product.image}" alt="">
            <h2>${product.name}</h2>
            <div class="price">$${product.price}</div>
            <button>add to cart</button>
        `;
        listproductHTML.appendChild(item);
    });
}
