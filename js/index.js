const sidebar = document.querySelector(".side-nav-bar");

function openSidebar() {
  sidebar.style.top = "0";
}

function closeSidebar() {
  sidebar.style.top = "-50%";
}

// cart window

function showCart() {
  const cart = document.querySelector(".cart-1");
  cart.style.right = "0";
}
function closeCart() {
  const cart = document.querySelector(".cart-1");
  cart.style.right = "-100%";
}

function deleteCartItem(cartItemId) {
  const cartItem = document.getElementById(cartItemId);
  if (cartItem) {
    cartItem.remove();
  }
}
function addToCart(itemName, itemPrice, imageUrl) {
  const cartContent = document.getElementById("cart-content-1");
  const cartItem = document.createElement("div");
  cartItem.classList.add("cartcontent");
  cartItem.innerHTML = `
        <div class="cart-box">
            <img src="${imageUrl}" style="width: 100px;" class="cart-img">
            <div class="cart-detailbox">
                <div class="cart-food-title">${itemName}</div>
                <div class="pricebox">
                    <div class="cart-amnt">Rs.${itemPrice}</div>
                </div>
                <input type="number" value="1" class="cart-quantity">
            </div>
            <i onclick="deleteCartItem(this.parentElement.parentElement)" class="fa-solid fa-trash" id="dlt"></i>
        </div>
`;
  cartContent.append(cartItem);
  alert("Added to cart");
}
function deleteCartItem(cartItem) {
  cartItem.remove();
}
