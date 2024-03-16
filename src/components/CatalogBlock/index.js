import React from "react";
import "./style.scss";
import image from "../../images/Rectangle 6.png";

function CatalogBlock() {
  return (
    <div className="catalog-block">
      <div className="catalog-body">
        <div className="text-block">
          <h1>Ми знаємо, що сподобається вашим “великим” друзям!</h1>
          <p>Обирай подарунок своїм друзями бодібілдерам із нашою новою колекцію термобілизни “Big warm”</p>
          <button>До каталогу</button>
        </div>
        <img src={image} alt="strongman" />
      </div>
    </div>
  );
}

export default CatalogBlock;
