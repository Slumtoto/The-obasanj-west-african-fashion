let iconcart = document.querySelector('.iconcart');
let cart = document.querySelector('.cart');
let container = document.querySelector('.container');
let close = document.querySelector('.close');

iconcart.addEventListener('click', () => {
    if (cart.style.right === '-100%' || cart.style.right === '') {
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
    .then(response => response.json())
    .then(data => {
        products = data;
        addDataToHTML();
        addExtraProducts();
    });

function addDataToHTML() {
    let listproductHTML = document.querySelector('.listproduct');
    listproductHTML.innerHTML = '';

    products.forEach(product => {
        let item = document.createElement('div');
        item.classList.add('item');
        item.innerHTML = `
            <img src="${product.image}" alt="">
            <h2>${product.Name}</h2>
            <div class="price">$${product.price}</div>
            <button>add to cart</button>
        `;
        listproductHTML.appendChild(item);
    });
}

function addExtraProducts() {
    let listproductHTML = document.querySelector('.listproduct');

    const newProduct = document.createElement('div');
    newProduct.classList.add('item');
    newProduct.innerHTML = `
        <img src="the obasanjo west african fashion img6.jpg" alt="">
        <h2>Product Name</h2>
        <div class="price">$550</div>
        <button>add to cart</button>
    `;
    listproductHTML.appendChild(newProduct);
}


