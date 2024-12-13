import s from "./Philosophy.module.css";
import img from "./img/philosophy.webp";

const Philosophy = () => {
  return (
    <>
      <section className={s.section}>
        <div className={s.textContainer}>
          <div>
            <h2 className={s.title}>Philosophy & values</h2>
            <p className={s.text}>
              I think everyone wants the same thing - relationship with
              humanity, peace with the metaphysical, and experience with the
              universe. I try to grasp these things with my values:
              authenticity, creativity, & hospitality.
            </p>
          </div>
          <a className={s.link} href="#skillset">
            More about me
          </a>
        </div>
        <img
          className={s.img}
          src={img}
          alt="Plant in glass"
          loading="lazy"
          width="360"
          height="450"
        />
      </section>
    </>
  );
};

export default Philosophy;
