let iconcart = document.querySelector('.iconcart');
let cart = document.querySelector('.cart');
let container = document.querySelector('.container');
let close = document.querySelector('.close');

// Cart toggle logic
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

// Hardcoded product data
let products = {
    1: { id: 1, Name: "Product Name 1", price: 550, image: "the obasanjo west african fashion img6.jpg" },
    2: { id: 2, Name: "Product Name 2", price: 550, image: "the obasanjo west african fashion img6.jpg" },
    3: { id: 3, Name: "Product Name 3", price: 420, image: "the obasanjo west african fashion img6.jpg" },
    4: { id: 4, Name: "Product Name 4", price: 300, image: "the obasanjo west african fashion img6.jpg" },
    5: { id: 5, Name: "Product Name 5", price: 300, image: "the obasanjo west african fashion img6.jpg" },
    6: { id: 6, Name: "Product Name 6", price: 300, image: "the obasanjo west african fashion img6.jpg" }
};

let listCart = {};

function addCart(idProduct) {
    if (!listCart[idProduct]) {
        listCart[idProduct] = { ...products[idProduct], quantity: 1 };
    } else {
        listCart[idProduct].quantity++;
    }

    document.cookie = "listcart=" + JSON.stringify(listCart) + "; path=/; expires=Thu, 31 Dec 2025 23:59:59 UTC;";
    addCartToHTML();
}

function addCartToHTML() {
    const listCartHTML = document.querySelector('.listcart');
    listCartHTML.innerHTML = '';

    Object.values(listCart).forEach(product => {
        let item = document.createElement('div');
        item.classList.add('item');
        item.innerHTML = `
            <img src="${product.image}" alt="">
            <div class="content">
                <div class="name">${product.Name}</div>
                <div class="price">$${product.price}</div>
            </div>
            <div class="quantity">
                <button>-</button>
                <span class="value">${product.quantity}</span>
                <button>+</button>
            </div>
        `;
        listCartHTML.appendChild(item);
    });

    // Update cart quantity badge
    const totalQuantity = Object.values(listCart).reduce((sum, item) => sum + item.quantity, 0);
    document.querySelector('.tatolquantity').innerText = totalQuantity;
}


 


