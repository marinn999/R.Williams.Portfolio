const LetsGetStarted = () => {
  return (
    <>
      <section className="form-section" id="section-contact">
        <div className="form-section-left">
          <h2 className="form-section-title">Let’s get started</h2>
          <p className="form-section-text">
            Now that you know a lot about me, let me know if you are interested
            to work with me.
          </p>
        </div>
        <form className="form-section-right">
          <label className="form-section-label" htmlFor="user-name">
            Name
          </label>
          <input
            className="form-section-input"
            id="user-name"
            name="user-name"
            type="text"
            pattern="[a-zA-Zа-яА-ЯІіЇїЄєҐґʼ]+"
            title="Name"
            required
          />

          <label className="form-section-label" htmlFor="user-email">
            Email
          </label>
          <div className="input-container">
            <input
              className="form-section-input"
              type="email"
              id="user-email"
              name="user-email"
              pattern="^\w+(\.\w+)?@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$"
            />
            <svg className="checkmark" width="16px" height="16px">
              <use href="../img/symbol-defs.svg#icon-checkmark"></use>
            </svg>
          </div>
          <p className="value-email">Invalid email, try again</p>

          <label className="form-section-label" htmlFor="user-message">
            Message
          </label>
          <textarea
            className="form-section-comment"
            name="user-comment"
            id="user-comment"
          ></textarea>
          <button className="form-section-btn" type="submit">
            Let’s get started
          </button>

          <div className="modal-overlay"></div>
          <div className="modal">
            <button className="modal-close-btn" type="button">
              <svg className="modal-close-btn-icon" width="24" height="24">
                <use href="../img/symbol-defs.svg#icon-close"></use>
              </svg>
            </button>
            <h3 className="modal-title">
              Thank you for your interest in cooperation!
            </h3>
            <p className="modal-text">
              The manager will contact you shortly to discuss further details
              and opportunities for cooperation. Please stay in touch.
            </p>
          </div>
        </form>
      </section>
    </>
  );
};

export default LetsGetStarted;
