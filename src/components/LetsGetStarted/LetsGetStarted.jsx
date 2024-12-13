import { Field, Form, Formik } from "formik";
import s from "./LetsGetStarted.module.css";
import { useState } from "react";
import toast, { Toaster } from "react-hot-toast";

const LetsGetStarted = ({ handleSubmitForm }) => {
  const [isModalOpen, setModalOpen] = useState(false);
  const handleModalClose = () => setModalOpen(false);
  return (
    <>
      <section className={s.section} id="section-contact">
        <div className={s.leftContainer}>
          <h2 className={s.title}>Let’s get started</h2>
          <p className={s.text}>
            Now that you know a lot about me, let me know if you are interested
            to work with me.
          </p>
        </div>

        <Formik
          initialValues={{ name: "", email: "", message: "" }}
          onSubmit={(values, options) => {
            console.log("submitted vals", values);

            const { name, email, message } = values;
            // Перевірка на порожні поля
            if (!name.trim() || !email.trim() || !message.trim()) {
              toast.error("All fields are required. Please fill them out.");
              return;
            }
            // Передача даних форми через handleSubmitForm у App
            handleSubmitForm(values);
            // Показуємо модальне вікно
            setModalOpen(true);
            // Очищення форми
            options.resetForm();
          }}
        >
          <Form className={s.rightContainer}>
            <label className={s.label} htmlFor="name">
              Name
            </label>
            <Field
              type="text"
              name="name"
              autoComplete="off"
              autoFocus
              className={s.input}
              required
            />
            <label className={s.label} htmlFor="email">
              Email
            </label>
            <Field
              type="email"
              name="email"
              autoComplete="off"
              className={s.input}
              required
            />
            <label className={s.label} htmlFor="message">
              Message
            </label>
            <Field
              as="textarea"
              name="message"
              autoComplete="off"
              className={s.comment}
              required
            />
            <button className={s.btn} type="submit">
              Let’s get started
            </button>
          </Form>
        </Formik>

        {isModalOpen && (
          <div className={s.backdrop}>
            <div className={s.modal}>
              <button
                className={s.modalCloseBtn}
                type="button"
                onClick={handleModalClose}
              >
                <svg
                  className={s.modalCloseBtnIcon}
                  aria-label="close modal icon"
                >
                  <use href="symbol-defs.svg#icon-close"></use>
                </svg>
              </button>
              <h3 className={s.modalTitle}>
                Thank you for your interest in cooperation!
              </h3>
              <p className={s.modalText}>
                The manager will contact you shortly to discuss further details
                and opportunities for cooperation. Please stay in touch.
              </p>
            </div>
          </div>
        )}
        <Toaster />
      </section>
    </>
  );
};

export default LetsGetStarted;
