import { ActionButtons } from "./ActionButtons";

export default function Calculator() {
  return (
    <section id="calculator" className="calculator">
      <div className="calculator__container">
        <p>Навіщо платити більше, якщо можна — напряму від виробника?</p>
        <p>Розтермінування — купуйте меблі зараз, сплачуйте частинами!</p>
        <p>Власне виробництво — лише 21 день від заміру до готового виробу.</p>
        <p>
          Безкоштовна 3D-візуалізація — побачте свої меблі ще до виготовлення!
        </p>
        <p>Технічний нагляд проєкту — відправляємо звіти на кожному етапі.</p>
        <p>Безкоштовний замір — приїдемо, порахуємо, підкажемо!</p>

        <div className="calculator__buttons">
          <ActionButtons />
        </div>
      </div>
    </section>
  );
}
