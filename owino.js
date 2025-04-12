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
        addExtraProducts(); // if this is defined somewhere else
    });

function addDataToHTML() {
    let listproductHTML = document.querySelector('.listproduct');
    listproductHTML.innerHTML = '';

    if (products != null) {
        products.forEach(product => {
            let newProduct = document.createElement('div');
            newProduct.classList.add('item');
            newProduct.innerHTML = `
                <img src="the obasanjo west african fashion img6.jpg" alt="" srcset="">
                <h2>product Name 1</h2>
                <div class="price">$550</div>
                <button>add to cart</button>
            `;
            listproductHTML.appendChild(newProduct);
        });
    }
}



