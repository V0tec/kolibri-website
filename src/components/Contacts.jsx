import { ContactForm } from "./ContactForm";

export default function Contact() {
  return (
    <section id="contacts" className="contact">
      <div className="contact__form">
        <ContactForm
          title="Зв'язатися з нами"
          submitText="Надіслати"
          showLabels={true}
          isModal={false}
        />
      </div>
      <div className="contact__map">
        <iframe
          title="Карта - м. Київ, вул. Віскозна 3А"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d635.11112550129!2d30.653119267006595!3d50.45144688729215!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40d4dab51ec5e079%3A0x6f2d60d77e717fa0!2zM0EsINCy0YPQu9C40YbRjyDQktGW0YHQutC-0LfQvdCwLCAz0JAsINCa0LjRl9CyLCAwMjAwMA!5e0!3m2!1suk!2sua!4v1748433220473!5m2!1suk!2sua"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </section>
  );
}
