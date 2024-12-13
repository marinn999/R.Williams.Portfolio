import s from "./Instagram.module.css";
import img from "./img/insta.webp";

const Instagram = () => {
  return (
    <>
      <section className={s.section}>
        <div className={s.leftContainer}>
          <h2 className={s.title}>Instagram</h2>
          <p className={s.text}>
            If you are a person who enjoys photography, then I highly recommend
            that you check out my Instagram. I’m an avid traveller and I capture
            the best moments that I would love to cherish with the world.
          </p>
          <a
            className={s.link}
            href="https://www.instagram.com"
            target="_blank"
          >
            Follow me on IG
          </a>
        </div>
        <img
          className={s.img}
          src={img}
          alt="Mountains"
          loading="lazy"
          width="720"
          height="600"
        />
      </section>
    </>
  );
};

export default Instagram;
