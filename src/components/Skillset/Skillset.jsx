import s from "./Skillset.module.css";

const Skillset = () => {
  return (
    <>
      <section className={s.section} id="skillset">
        <div className={s.leftContainer}>
          <h2 className={s.title}>Skillset</h2>
          <p className={s.text}>
            With skills in over 4 different fields of design, I am the perfect
            person to hire when it comes to a full fledged project. Whatever
            your needs are, I can pretty much take on any challenge.
          </p>
        </div>
        <div className={s.rightContainer}>
          <ul className={s.list}>
            <li className={s.item}>
              <svg width="32" height="32">
                <use href="symbol-defs.svg#icon-4"></use>
              </svg>
              <h3 className={s.itemTitle}>Product Design</h3>
              <p className={s.itemText}>
                Working at Facebook has taught me a lot about how to understand
                users, solve problems and build great products.
              </p>
            </li>
            <li className={s.item}>
              <svg width="32" height="32">
                <use href="symbol-defs.svg#icon-2"></use>
              </svg>
              <h3 className={s.itemTitle}>Visual Design</h3>
              <p className={s.itemText}>
                My experience at dribbble has helped me learn to develop the eye
                for design. Colors, typography, layout and the whole package.
              </p>
            </li>
            <li className={s.item}>
              <svg width="32" height="32">
                <use href="symbol-defs.svg#icon-3"></use>
              </svg>
              <h3 className={s.itemTitle}>Motion Design</h3>
              <p className={s.itemText}>
                I started my design journey with motion design in my college
                days. Motion is something that really fascinates me because of
                the flexibility of story telling.{" "}
              </p>
            </li>
            <li className={s.item}>
              <svg width="32" height="32">
                <use href="symbol-defs.svg#icon-1"></use>
              </svg>
              <h3 className={s.itemTitle}>Photography</h3>
              <p className={s.itemText}>
                Clicking pictures really brings out the creative in me.
                Phtography really makes you look and percieve things in a
                different way.
              </p>
            </li>
          </ul>
        </div>
      </section>
    </>
  );
};

export default Skillset;
