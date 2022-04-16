import React from "react";
import "./productList.css";
import Product from "../../components/product/Product.jsx";
import { products } from "../../data.js";

const ProductList = () => {
  return (
    <div className="pl">
      <div className="pl-texts">
        <h1 className="pl-title">Create & inspire. It's Lama</h1>
        <p className="pl-desc">
          {" "}
          Lama is a creative portfolio that your work has been waiting for.
          Beautiful homes, stunning portfolio styles & a whole lot more awaits
          inside.
        </p>
      </div>
      <div className="pl-list">
        {products.map((p) => (
          <Product key={p.id} img={p.img} link={p.link} />
        ))}
      </div>
    </div>
  );
};

export default ProductList;
