// Update the main image on click of thumbnail Image

const thumbnails = document.querySelectorAll('.image-thumbnail');  
const mainImage = document.querySelector('.product-img img'); 

function changeMainImage(event) {
  thumbnails.forEach(thumbnail => thumbnail.classList.remove('active'));
  const clickedThumbnail = event.currentTarget;
  clickedThumbnail.classList.add('active');
  const newImageSrc = clickedThumbnail.querySelector('img').src;
  mainImage.setAttribute('src', newImageSrc);
}

// Click event for each thumbnails
thumbnails.forEach(thumbnail => {
  thumbnail.addEventListener('click', changeMainImage);
});


// Quntity Plus minus functionality
const quantityInput = document.querySelector('.quantity-input');

// Created the function to update the quntity on click of plus, minus button
function updateQuantity(isAdding) {
    let currentQuantity = parseInt(quantityInput.value);

    if (isAdding) {
      quantityInput.value = currentQuantity + 1;
    } else {
      if (currentQuantity > 1) {
        quantityInput.value = currentQuantity - 1;
      }
    }
}

// Add to cart functionality.

document.getElementById('add-to-cart').addEventListener('click', function(){

    const variantID = document.querySelector('.variant-radio[name="product-variant"]:checked').value;
    const qty = document.querySelector('.quantity-input').value;
    const size = document.querySelector('.variant-radio[name="product-variant"]:checked').dataset.variantText;

    // Add to cart functionality using AJAX cart api

    fetch('/cart/add.js',{
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
                id: variantID,
                quntity: qty,
                size: size
            })
        })
        .then(response => response.json())
        .then(data => {
            if(data.success){
                updateCartCount(qty);
                showPopup(size, qty);
            }else{
                alert("Error!! Please try again :(");
            }
        })
        .catch(error => {
            console.error(error);
        });    
});


// Function for update the cart count
function updateCartCount(quantity) {
    const cartCountElement = document.querySelector('.cart-count');
    const currentCount = parseInt(cartCountElement.textContent) || 0;
    const newQuantity = parseInt(quantity) || 0;  

    cartCountElement.textContent = currentCount + newQuantity;
}

// Function to show the cart popup just for user get the idea regarding product added succeessfully
function showPopup(size, quantity) {
    const cartPopup = document.querySelector('.cart-popup');
    const variantInfo = document.querySelector('.variant-info');
    const quantityInfo = document.querySelector('.quantity-info');

    variantInfo.textContent = size;
    quantityInfo.textContent = quantity;
    
    cartPopup.style.display = 'block';

    setTimeout(function() {
        cartPopup.style.display = 'none';
    }, 3000);
}