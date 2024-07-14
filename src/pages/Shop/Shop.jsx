import React from "react";
import "./shop.css";
import { PRODUCTS } from "../../Products";
import Product from "./Product";

const Shop = () => {
  return (
    <div className="shop">
      <div className="shopTitle">
        <h1>G3RGES Shop</h1>
      </div>

      <div className="products">
        {PRODUCTS.map((product) => (
          <Product
            key={product.id}
            name={product.productName}
            price={product.price}
            image={product.productImage}
          />
        ))}
      </div>
    </div>
  );
};

export default Shop;
