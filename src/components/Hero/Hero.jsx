import s from "./Hero.module.css";
import heroImg from "./img/hero.webp";

const Hero = () => {
  return (
    <>
      <section className={s.section} id="section-hero">
        <img
          className={s.img}
          src={heroImg}
          alt="Designer photo"
          loading="lazy"
          width="750"
          height="650"
        ></img>
        <div className={s.container}>
          <h1 className={s.title}>
            I’m Robin Williams. A Product Designer{" "}
            <span className={s.titleSpan}>based in Italy.</span>
          </h1>
          <p className={s.text}>
            I’m probably the most passionate designer you will ever get to work
            with. If you have a great project that needs some amazing skills,
            I’m your guy.
          </p>
        </div>
      </section>
    </>
  );
};

export default Hero;
