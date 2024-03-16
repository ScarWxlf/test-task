import React from "react";
import "./style.scss";
import Card from "../Card";
import image1 from "../../images/hotProdImg/Rectangle 4.png";
import image2 from "../../images/hotProdImg/Rectangle 4 (1).png";
import image3 from "../../images/hotProdImg/Rectangle 4 (2).png";
import pagination from "../../images/hotProdImg/Pagination (2).png";

const products = [
  {
    image: image3,
    title: "Термобілизна для бодібілдерів",
    type: "Для чоловіків",
    propertys: "2 кольори",
    price: "4000 грн.",
  },
  {
    image: image2,
    title: "Майка для бодібілдерів",
    type: "Для жінок",
    propertys: "6 кольорів",
    price: "1100 грн.",
  },
  {
    image: image1,
    title: "Ланцюжок для бодібілдерів",
    type: "Аксесуари",
    propertys: "30 кг.",
    price: "2000 грн.",
  },
];

function HotProducts() {
  return (
    <div className="hot-products">
      <div className="hot-header">
        <h1>Найгарячіші товари</h1>
        <img src={pagination} alt="pagination" />
      </div>
      <div className="hot-body">
          {products.map((product, index) => {
            return (
              <Card
                key={index}
                image={product.image}
                title={product.title}
                type={product.type}
                propertys={product.propertys}
                price={product.price}
              />
            );
          })}
      </div>
    </div>
  );
}

export default HotProducts;
