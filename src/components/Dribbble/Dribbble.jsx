import s from "./Dribbble.module.css";

const Dribbble = () => {
  return (
    <>
      <section className={s.section}>
        <h2 className={s.title}>Dribbble</h2>
        <p className={s.text}>
          Each dribbble shot is made with love and care. Do check out my work on
          Dribbble. Likes and comments are appreciated.
        </p>
        <a className={s.link} href="https://dribbble.com" target="_blank">
          Follow me on Dribbble
        </a>
        <div className={s.imgContainer}>
          <svg className={s.icon} width="48" height="12">
            <use href="symbol-defs.svg#icon-11"></use>
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
