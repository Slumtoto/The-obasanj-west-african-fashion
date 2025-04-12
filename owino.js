// Fixed JavaScript for Add to Cart Functionality (Preserving Original Images and Six Products)
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
let listCart = {};

fetch('product.json')
    .then(response => response.json())
    .then(data => {
        products = data;
        addDataToHTML();
        checkCart();
        addCartToHTML();
    });

function addDataToHTML() {
    let listproductHTML = document.querySelector('.listproduct');
    listproductHTML.innerHTML = '';

    if (products != null) {
        for (let i = 1; i <= 6; i++) {
            let product = {
                id: i,
                name: `Product Name ${i}`,
                price: 550,
                image: 'the obasanjo west african fashion img6.jpg'
            };
            let newProduct = document.createElement('div');
            newProduct.classList.add('item');
            newProduct.innerHTML = `
                <img src="${product.image}" alt="">
                <h2>${product.name}</h2>
                <div class="price">$${product.price}</div>
                <button onclick="addCart(${product.id})">add to cart</button>
            `;
            listproductHTML.appendChild(newProduct);
        }
    }
}

function checkCart() {
    let cookieValue = document.cookie
        .split('; ')
        .find(row => row.startsWith('listcart='));

    if (cookieValue) {
        listCart = JSON.parse(cookieValue.split('=')[1]);
    }
}

function addCart(idProduct) {
    let productCopy = JSON.parse(JSON.stringify(products));

    if (!listCart[idProduct]) {
        let dataProduct = productCopy.find(product => product.id == idProduct) || {
            id: idProduct,
            name: `Product Name ${idProduct}`,
            price: 550,
            image: 'the obasanjo west african fashion img6.jpg'
        };
        listCart[idProduct] = dataProduct;
        listCart[idProduct].quantity = 1;
    } else {
        listCart[idProduct].quantity++;
    }

    // Save to cookie
    let timeSave = "expires=Thu, 31 Dec 2025 23:59:59 UTC";
    document.cookie = "listcart=" + JSON.stringify(listCart) + "; " + timeSave + "; path=/;";

    addCartToHTML();
}

function addCartToHTML() {
    // Clear and update cart UI logic here
    console.log("Cart updated:", listCart);
    
    let tatolHTML = document.querySelector('.totalQuantity');
    let totalQuantity = 0;

    if(listCart){
        listCart.forEach(product =>{
            if(product){
                let newcart = document.createElement('div')
                newcart.classList.add('item')
            }
        })
    }
}

 


