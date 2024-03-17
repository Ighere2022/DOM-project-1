const cartItemsContainer = document.getElementById("cart_items_container");
console.log(cartItemsContainer);

const Display_Cart_Total = document.getElementById("display_cart_total");
console.log(Display_Cart_Total);

const Check_Out = document.getElementById("check_out_btn");
console.log(Check_Out);

let cartItems = [
  {
    product_Id: 1,
    product_name: "Samsung S23 ultra",
    product_image:
      "https://th.bing.com/th/id/OIP.E_NUOR-N7YRtQxXe1usphAHaHa?w=196&h=196&c=7&r=0&o=5&dpr=1.3&pid=1.7",
    product_prices: 1000000.0,
    product_quantity: 1,
  },

  {
    product_Id: 2,
    product_name: "Iphone 12",
    product_image:
      "https://th.bing.com/th/id/OIP.PSd6wxGdQ7mv_KlVXQlb2AHaHa?w=163&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7",
    product_prices: 450000.0,
    product_quantity: 1,
  },

  {
    product_Id: 3,
    product_name: "Iphone 15 pro",
    product_image:
      "https://th.bing.com/th/id/OIP.d80DSqN4gem9P_Yt51hFyQHaF7?w=210&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7",
    product_prices: 1000000.0,
    product_quantity: 1,
  },

  {
    product_Id: 4,
    product_name: "Tecno phantom z",
    product_image:
      "https://th.bing.com/th/id/OIP.ST-yblQZMQQBP8Q_vRUMSQHaE7?w=261&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7",
    product_prices: 500000.0,
    product_quantity: 1,
  },

  {
    product_Id: 5,
    product_name: "Infinx hot 20",
    product_image:
      "https://th.bing.com/th/id/OIP.t62tiJtFMTuRJFsjjF3BoAHaHa?w=160&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7",
    product_prices: 150000.0,
    product_quantity: 1,
  },
];

//functioN to dispLAY CART ITEMS

function display_cart_items() {
  let product_to_display = [];

  for (let i = 0; i < cartItems.length; i++) {
    const cart_product = `<div class="flex justify-between items-center shadow-md p-5 border rounded mb-4 h-[20rem] w-[rem]">
            <div class="flex items-center gap-4">
              <img
                src=${cartItems[i].product_image}
                class="w-40 rounded-md"
              />
              <div>
                <h2 class="font-bold text-3xl">${cartItems[i].product_name}</h2>
                <button 
                  onClick="removeItemFromCart(${cartItems[i].product_Id})"
                  class="bg-red-500 text-white font-semibold p-2 rounded-md mt-2"
                >
                  Delete
                </button>
              </div>
            </div>

            <div class="text-center">
              <p class="font-bold text-xl border border-black rounded-full flex justify-center h-[2rem] w-[6rem]">${cartItems[i].product_prices}</p>
              <button 
                 onClick="increaseProductQuantity(${cartItems[i].product_Id})"
                class="bg-green-500 text-white text-lg font-semibold p-2 rounded-md mt-2 w-[2rem]"
              >
                +
              </button>
              <span class="font-bold text-lg p-4">${cartItems[i].product_quantity}</span>
              <button
                onClick="decreaseProductQuantity(${cartItems[i].product_Id})"
                class="bg-red-500 text-white text-lg font-semibold p-2 rounded-md mt-2 w-[2rem]"
              >
                -
              </button>
            </div>
          </div>`;

    product_to_display.push(cart_product);
  }
  if (product_to_display.length == 0) {
    cartItemsContainer.innerHTML = `<h1  class= "text-center text-3xl font-semibold"> Cart is empty please add to your cart</h1>`;
    Display_Cart_Total.textContent = 0;
    return;
  }

  cartItemsContainer.innerHTML = product_to_display.join(" ");
}
display_cart_items();

function increaseProductQuantity(ProductID) {
  for (let i = 0; i < cartItems.length; i++) {
    if (cartItems[i].product_Id == ProductID) {
      console.log(cartItems[i].product_quantity++);
    }
  }
  calculateCartTotal();
  display_cart_items();
}

function decreaseProductQuantity(ProductID) {
  for (let i = 0; i < cartItems.length; i++) {
    if (
      cartItems[i].product_Id == ProductID &&
      cartItems[i].product_quantity != 1
    ) {
      cartItems[i].product_quantity--;
    }
  }
  calculateCartTotal();
  display_cart_items();
}

//remove item
function removeItemFromCart(ProductID) {
  const productsLeftInCart = [];
  for (let i = 0; i < cartItems.length; i++) {
    if (cartItems[i].product_Id !== ProductID) {
      productsLeftInCart.push(cartItems[i]);
    }
  }
  cartItems = productsLeftInCart;
  calculateCartTotal();
  display_cart_items();
}

// function to calculate cart total

function calculateCartTotal() {
  let totalCost = 0;
  for (let i = 0; i < cartItems.length; i++) {
    totalCost =
      totalCost + cartItems[i].product_prices * cartItems[i].product_quantity;

    Display_Cart_Total.textContent = totalCost;
  }
  return totalCost;
}

Check_Out.addEventListener("click", handleCheckout);

function handleCheckout() {
  console.log(cartItems);
  console.log(calculateCartTotal());
}
