import s from "./Dribbble.module.css";
import img from "./img/img.webp";

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
            className={s.img}
            src={img}
            alt="Man with tablet"
            width="1000"
            height="667"
          ></img>
        </div>
      </section>
    </>
  );
};

export default Dribbble;
