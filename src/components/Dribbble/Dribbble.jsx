const Dribbble = () => {
  return (
    <>
      <section className="dribbble-section">
        <h2 className="dribbble-section-title">Dribbble</h2>
        <p className="dribbble-section-text">
          Each dribbble shot is made with love and care. Do check out my work on
          Dribbble. Likes and comments are appreciated.
        </p>
        <a
          className="dribbble-section-link"
          href="https://dribbble.com"
          target="_blank"
        >
          Follow me on Dribbble
        </a>
        <div className="dribble-img-container">
          <svg className="dribble-section-icon" width="48" height="12">
            <use href="../img/symbol-defs.svg#icon-11"></use>
          </svg>
          <img
            className="dribble-section-desktop-img"
            src="./img/desktop img/9/Rectangle 42.jpg"
            alt="laptop menu"
            width="1076"
            height="640"
          ></img>
          <img
            className="dribble-section-tablet-img"
            src="./img/tablet img/8/Rectangle 42.jpg"
            alt="laptop menu"
            width="688"
            height="480"
          ></img>
          <img
            className="dribble-section-mobile-img"
            src="./img/mobile img/Rectangle 42.png"
            alt="laptop menu"
            width="320"
            height="480"
          ></img>
        </div>
      </section>
    </>
  );
};

export default Dribbble;
