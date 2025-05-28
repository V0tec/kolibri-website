import { useState } from "react";
import { ContactForm } from "./ContactForm";

export function Quiz({ onClose }) {
  const [currentStep, setCurrentStep] = useState(1);
  const [answers, setAnswers] = useState({});

  const steps = [
    {
      title: "Оберіть тип фасаду",
      options: [
        "Фарбований МДФ",
        "Ламіноване ДСП",
        "Акриловий МДФ",
        "Фрезерований МДФ",
        "Інше",
      ],
    },
    {
      title: "Вкажіть розміри кухні",
      options: ["До 3 м п", "3-5 м п", "5-7 м п", "Записатись на замір"],
    },
    {
      title: "Оберіть матеріал стільниці",
      options: [
        "Компакт-плита/HPL",
        "Акрил",
        "Кварц",
        "Вологостійкий ЛДСП",
        "Інше",
      ],
    },
    {
      title: "Оберіть якість фурнітури",
      options: ["Економ", "Стандарт", "Преміум"],
    },
    {
      title: "Оберіть свій подарунок",
      options: ["Знижка 20%", "Стільниця", "Мийка", "Посудомийна машина"],
    },
    {
      title: "Коли потрібна кухня",
      options: ["Поки цікавлюсь", "Наступного місяця", "В цьому місяці"],
    },
  ];

  const handleOptionSelect = (option) => {
    setAnswers((prev) => ({
      ...prev,
      [currentStep]: option,
    }));
  };

  const handleNext = () => {
    if (currentStep < steps.length) {
      setCurrentStep((prev) => prev + 1);
    } else {
      setCurrentStep(steps.length + 1);
    }
  };

  const handleBack = () => {
    if (currentStep > 1) {
      setCurrentStep((prev) => prev - 1);
    }
  };

  const handleFinalSubmit = (formData) => {
    alert(
      `Дякуємо, ${formData.name}! Ваші відповіді збережено. Ми зателефонуємо за номером ${formData.phone}`
    );
    onClose();
  };

  if (currentStep > steps.length) {
    return (
      <div className="quiz__final-form">
        <ContactForm
          title="ПІП і контакти"
          onSubmit={handleFinalSubmit}
          submitText="Отримати розрахунок"
          isModal={true}
        />
      </div>
    );
  }

  const currentStepData = steps[currentStep - 1];
  const selectedAnswer = answers[currentStep];

  return (
    <div className="quiz__container" role="main" aria-label="Quiz">
      <header className="quiz__header">
        <div className="quiz__title-row">
          <h3 className="quiz__title">Дізнайтесь вартість кухні</h3>
          <span className="quiz__step-counter">
            {currentStep}/{steps.length}
          </span>
        </div>
        <div className="quiz__progress-bar" aria-hidden="true">
          <div
            className="quiz__progress-fill"
            style={{ width: `${(currentStep / steps.length) * 100}%` }}
          ></div>
        </div>
      </header>

      <section className="quiz__question" aria-live="polite">
        <h4 className="quiz__question-title">{currentStepData.title}</h4>
        <div className="quiz__options">
          {currentStepData.options.map((option, index) => (
            <button
              key={index}
              onClick={() => handleOptionSelect(option)}
              className={`quiz__option ${
                selectedAnswer === option ? "quiz__option--selected" : ""
              }`}
              aria-pressed={selectedAnswer === option}
              type="button"
            >
              {option}
            </button>
          ))}
        </div>
      </section>

      <nav className="quiz__navigation" aria-label="Navigation buttons">
        <button
          onClick={handleBack}
          disabled={currentStep === 1}
          className="quiz__nav-button quiz__nav-button--back"
          type="button"
        >
          Назад
        </button>
        <button
          onClick={handleNext}
          disabled={!selectedAnswer}
          className="quiz__nav-button quiz__nav-button--next"
          type="button"
        >
          {currentStep === steps.length ? "Завершити" : "Вперед"}
        </button>
      </nav>
    </div>
  );
}
