import { useState } from "react";

export function ContactForm({
  title = "Зв'язатися з нами",
  onSubmit,
  submitText = "Надіслати",
  className = "contact-form__container",
  showLabels = true,
  isModal = false,
}) {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");

  function handlePhoneChange(e) {
    let value = e.target.value.replace(/\D/g, "");
    if (value.startsWith("0")) value = value.slice(1);
    if (!value.startsWith("380")) value = "380" + value;
    if (value.length > 12) value = value.slice(0, 12);

    let formatted = "+";
    if (value.length > 0) formatted += value.slice(0, 3);
    if (value.length > 3) formatted += " (" + value.slice(3, 5);
    if (value.length > 5) formatted += ") " + value.slice(5, 8);
    if (value.length > 8) formatted += "-" + value.slice(8, 10);
    if (value.length > 10) formatted += "-" + value.slice(10, 12);

    setPhone(formatted);
  }

  function handleSubmit() {
    if (!name.trim() || !phone.trim()) {
      alert("Будь ласка, заповніть всі поля");
      return;
    }

    if (onSubmit) {
      onSubmit({ name, phone });
    } else {
      alert(`Дякуємо, ${name}! Ми вам зателефонуємо за номером ${phone}`);
    }

    setName("");
    setPhone("");
  }

  // Визначення класів залежно від isModal
  const containerClass = isModal
    ? `${className} ${className}--modal`
    : className;

  const titleClass = isModal
    ? "contact-form__title contact-form__title--modal"
    : "contact-form__title";

  const formClass = isModal
    ? "contact-form__form contact-form__form--modal"
    : "contact-form__form";

  const labelClass = "contact-form__label";

  const inputClass = isModal
    ? "contact-form__input contact-form__input--modal"
    : "contact-form__input";

  const buttonClass = isModal
    ? "contact-form__button contact-form__button--modal"
    : "contact-form__button";

  return (
    <div className={containerClass}>
      <h2 className={titleClass}>{title}</h2>
      <form
        className={formClass}
        onSubmit={(e) => {
          e.preventDefault();
          handleSubmit();
        }}
      >
        <div className="contact-form__field">
          {showLabels && (
            <label className={labelClass} htmlFor="name">
              Ім'я
            </label>
          )}
          <input
            id="name"
            type="text"
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Ваше ім'я"
            className={inputClass}
          />
        </div>

        <div className="contact-form__field">
          {showLabels && (
            <label className={labelClass} htmlFor="phone">
              Телефон
            </label>
          )}
          <input
            id="phone"
            type="tel"
            required
            value={phone}
            onChange={handlePhoneChange}
            placeholder="+380 (XX) XXX-XX-XX"
            maxLength={18}
            className={inputClass}
          />
        </div>

        <button type="submit" className={buttonClass}>
          {submitText}
        </button>
      </form>
    </div>
  );
}
