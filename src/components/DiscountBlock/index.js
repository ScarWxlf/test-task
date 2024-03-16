import React from "react";
import "./style.scss";

function DiscountBlock() {
  return (
    <div className="discount-block">
      <div className="discount-body">
        <hr />
        <h1>Спіймай всі акції!</h1>
        <p>Підписуйся на Email розсилку і отримуй інформацію про всі акції, які будуть з`влятись у нашому магазині. А у нас їх багато :D</p>
        <div className="subscribe">
            <input type="text" placeholder="Введіть свій Email" />
            <button>Підписатись</button>
        </div>
      </div>
    </div>
  );
}

export default DiscountBlock;
