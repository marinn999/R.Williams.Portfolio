import { ErrorMessage, Field, Form, Formik } from "formik";
import s from "./LetsGetStarted.module.css";
import { useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import * as Yup from "yup";

const LetsGetStarted = ({ handleSubmitForm }) => {
  const [isModalOpen, setModalOpen] = useState(false);
  const handleModalClose = () => setModalOpen(false);

  const CheckSchema = Yup.object().shape({
    name: Yup.string()
      .trim("Name cannot contain only spaces.")
      .min(2, "Name is too short.")
      .max(25, "Name is too long.")
      .required("Name is required."),
    email: Yup.string()
      .email("Invalid email address.")
      .trim("Email cannot contain only spaces.")
      .required("Email is required."),
    message: Yup.string()
      .min(10, "Message is too short.")
      .trim("Message cannot contain only spaces.")
      .required("Message is required."),
  });

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
          validationSchema={CheckSchema}
          onSubmit={(values, options) => {
            // Передача даних форми через handleSubmitForm у App
            handleSubmitForm(values);
            setModalOpen(true);
            options.resetForm();
          }}
        >
          <Form className={s.rightContainer}>
            <label className={s.label} htmlFor="name">
              Name{" "}
              <Field
                type="text"
                name="name"
                autoComplete="off"
                className={s.input}
                required
              />
              <ErrorMessage
                name="name"
                component="div"
                className={s.errorMessage}
              />{" "}
            </label>
            <label className={s.label} htmlFor="email">
              Email
              <Field
                type="email"
                name="email"
                autoComplete="off"
                className={s.input}
                required
              />
              <ErrorMessage
                name="email"
                component="div"
                className={s.errorMessage}
              />{" "}
            </label>
            <label className={s.label} htmlFor="message">
              Message
              <Field
                as="textarea"
                name="message"
                autoComplete="off"
                className={s.comment}
                required
              />
              <ErrorMessage
                name="message"
                component="div"
                className={s.errorMessage}
              />{" "}
            </label>
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
                  stroke="black"
                  fill="none"
                  width="24"
                  height="24"
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
