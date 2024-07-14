import React, { useContext } from "react";

const Product = ({ name, price, image }) => {
  //   const { addToCart, cartItems } = useContext(ShopContext);

  // const cartItemCount = cartItems[id];

  return (
    <div className="product">
      <img src={image} alt={name} />
      <div className="description">
        <p>
          <b>{name}</b>
        </p>
        <p> ${price}</p>
      </div>
      <button
        className="addToCartBttn"
        //   onClick={() => addToCart(id)}
      >
        Add To Cart
        {/* {cartItemCount > 0 && <> ({cartItemCount})
              </>
              } */}
      </button>
    </div>
  );
};

export default Product;
