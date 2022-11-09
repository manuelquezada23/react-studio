import "./App.css";
import { useState } from "react";
import bakeryData from "./assets/bakery-data.json";
import BakeryItem from "./components/BakeryItem.js";

/* ####### DO NOT TOUCH -- this makes the image URLs work ####### */
bakeryData.forEach((item) => {
  item.image = process.env.PUBLIC_URL + "/" + item.image;
});
/* ############################################################## */

function App() {
  // TODO: use useState to create a state variable to hold the state of the cart
  /* add your cart state code here */
  const [cart, setCart] = useState([]);
  const [price, setPrice] = useState(0)

  function addToCart(n, p) {
    var name = n;
    var itemPrice = p;
    let cartCopy = cart;
    var containsItem = false;

    for (let i = 0; i < cartCopy.length; i++) {
      if (cartCopy[i][0] === name) {
        containsItem = true;
      }
    }

    if (containsItem === true) {
      for (let i = 0; i < cartCopy.length; i++) {
        if (cartCopy[i][0] === name) {
          cartCopy[i][1] = cartCopy[i][1] + 1;
        }
      }
    } else {
      cartCopy.unshift([name, 1])
    }

    setCart(cartCopy)
    setPrice(price + itemPrice)
  }


  return (
    <div className="App">
      <div className="left">
        <h1>Manny's Bakery</h1> {/* TODO: personalize your bakery (if you want) */}

        <div className="BakeryItems">
          {bakeryData.map((item, index) => ( // TODO: map bakeryData to BakeryItem components
            <div className="BakeryItem" key={item.name}>
              <BakeryItem name={item.name} description={item.description} price={item.price} image={item.image} />
              <div className="BakeryPurchase">
                <p className="BakeryPrice">${item.price}</p>
                <button onClick={() => { addToCart(item.name, item.price) }} className="BakeryButton">Add To Cart</button>
              </div>
            </div>

          ))}
        </div>
      </div>

      <div className="right">
        <h2>Cart</h2>
        <p className="CartPrice">Total: ${price.toFixed(2)}</p>

        {cart.length === 0 ?
          <p className="CartText">There are no items in your cart yet!</p>
          :
          <div className="CartItems">
            {cart.map((item, index) => (
              <div key={item[0]}>
                <div className="CartItem">
                  {item[1]}x {item[0]}
                </div>
              </div>
            ))}
          </div>
        }
      </div>
    </div>
  );
}

export default App;
