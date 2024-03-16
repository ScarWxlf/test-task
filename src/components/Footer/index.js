import React from "react";
import "./style.scss";
import instagram from "../../images/instagram.png";
import telegram from "../../images/telegram.png";
import viber from "../../images/viber.png";

function Footer() {
  return (
    <footer className="footer">
      <hr />
      <div className="footer-body">
        <div className='contacts'>
          <ul>
            <h1>Контакт - центр</h1>
            <p>098 900 09 09</p>
            <p>Пн - Пт 09:00 - 21:00</p>
            <p>Пн - Пт 09:00 - 21:00</p>
          </ul>
          <div>
            <img src={instagram} alt="instagram" />
            <img src={viber} alt="viber" />
            <img src={telegram} alt="telegram" />
          </div>
        </div>
        <ul>
          <h1>Покупцям</h1>
          <p>Оплата і доставка</p>
          <p>Повернення</p>
          <p>Питання та відповіді</p>
        </ul>
        <ul>
          <h1>Особистий кабінет</h1>
          <p>Мої дані</p>
          <p>Історія замовлень</p>
          <p>Улюблені</p>
          <p>Розсилки</p>
        </ul>
        <ul>
          <h1>Про компанію</h1>
          <p>Про нас</p>
          <p>Новини</p>
          <p>Стати партнером</p>
          <p>Угода користувача</p>
        </ul>
      </div>
      <div className="bottom-footer">
        <ul className="nav-menu">
          <li>
            <a href="#home">новинки</a>
          </li>
          <li>
            <a href="#home">чоловіки</a>
          </li>
          <li>
            <a href="#home">жінки</a>
          </li>
          <li>
            <a href="#home">аксесуари</a>
          </li>
          <li>
            <a href="#home">акції</a>
          </li>
        </ul>
        <div>
          © 2022 — {new Date().getFullYear()} IGNAT. Усі права захищені.
        </div>
      </div>
    </footer>
  );
}

export default Footer;
