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
                <img src="${product.image}" alt="" srcset="">
                <h2>${product.Name}</h2>
                <div class="price">$${product.price}</div>
                <button onclick="add to cart"(${product.id})>add to cart</button>
            `;
            listproductHTML.appendChild(newProduct);
        });
    }
}
let listCart = [];
 function addCart(${product.id}){
    let productCopy = JSON.purce(JSON.stringify(products));
    //if this product is not in the Cart
    if(!listCart[$idProduct]){
        let dataProduct = productCopy.filter(
            product => product.id == $idProduct
        )[0];
        // add data product in cart
        listCart[$idProduct] = dataProduct;

    }else{
       //if this product is ready in the cart
       // i just icreased the cart
       listCart[$idProduct] = dataProduct;
       listCart[$idProduct].quantity;
       
    }
 }



