import { useState } from "react";
import { Modal } from "./Modal";
import { ContactForm } from "./ContactForm";
import { Quiz } from "./Quiz";

// Компонент з кнопками дій та логікою модальних вікон
export function ActionButtons() {
  const [consultationModal, setConsultationModal] = useState(false);
  const [measurementModal, setMeasurementModal] = useState(false);
  const [quizModal, setQuizModal] = useState(false);

  const handleFormSubmit = (formData, modalType) => {
    let message = "";
    switch (modalType) {
      case "consultation":
        message = `Дякуємо, ${formData.name}! Ми зателефонуємо для консультації за номером ${formData.phone}`;
        setConsultationModal(false);
        break;
      case "measurement":
        message = `Дякуємо, ${formData.name}! Ми зателефонуємо для запису на замір за номером ${formData.phone}`;
        setMeasurementModal(false);
        break;
      default:
        message = `Дякуємо, ${formData.name}! Ми вам зателефонуємо за номером ${formData.phone}`;
    }
    alert(message);
  };

  return (
    <>
      {/* Кнопки дій */}
      <div className="action-buttons__container">
        <button
          onClick={() => setConsultationModal(true)}
          className="action-buttons__button action-buttons__button--consultation"
        >
          Хочу консультацію
        </button>

        <button
          onClick={() => setMeasurementModal(true)}
          className="action-buttons__button action-buttons__button--measurement"
        >
          Записатись на безкоштовний замір
        </button>

        <button
          onClick={() => setQuizModal(true)}
          className="action-buttons__button action-buttons__button--calculator"
        >
          Розрахувати вартість
        </button>
      </div>

      {/* Модальні вікна */}
      <Modal
        isOpen={consultationModal}
        onClose={() => setConsultationModal(false)}
        title="Безкоштовна консультація"
      >
        <ContactForm
          onSubmit={(formData) => handleFormSubmit(formData, "consultation")}
          submitText="Замовити консультацію"
          isModal={true}
          showLabels={true}
        />
      </Modal>

      <Modal
        isOpen={measurementModal}
        onClose={() => setMeasurementModal(false)}
        title="Записатись на безкоштовний замір"
      >
        <ContactForm
          onSubmit={(formData) => handleFormSubmit(formData, "measurement")}
          submitText="Записатись на замір"
          isModal={true}
          showLabels={true}
        />
      </Modal>

      <Modal
        isOpen={quizModal}
        onClose={() => setQuizModal(false)}
        title="Розрахувати вартість меблів"
      >
        <Quiz onComplete={() => setQuizModal(false)} />
      </Modal>
    </>
  );
}
