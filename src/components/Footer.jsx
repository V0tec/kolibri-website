import { FaInstagram } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer__nav">
        <nav className="footer__navigation">
          <ul className="footer__list">
            <li>
              <a href="#about">Про нас</a>
            </li>
            <li>
              <a href="#calculator">Калькулятор</a>
            </li>
            <li>
              <a href="#howwework">Як ми працюємо</a>
            </li>
            <li>
              <a href="#portfolio">Портфоліо</a>
            </li>
            <li>
              <a href="#contacts">Контакти</a>
            </li>
          </ul>
        </nav>
      </div>

      <div className="footer__info">
        <p>
          <strong>Номер телефону:</strong>
          <br />
          093 611 80 50
        </p>
        <p>
          <strong>Адреса:</strong>
          <br />
          м. Київ, вул. Віскозна 3А
        </p>
        <p>
          <strong>Графік роботи офісу:</strong>
          <br />
          Пн–Пт з 10:00 до 18:00
          <br />
          Сб з 11:00 до 15:00
        </p>
      </div>

      <div className="footer__social">
        <a
          href="#"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Instagram"
          className="footer__icon"
        >
          <FaInstagram size={28} />
        </a>
      </div>
    </footer>
  );
}
