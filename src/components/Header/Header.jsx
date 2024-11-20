import s from "./Header.module.css";

const Header = () => {
  return (
    <>
      <header className={s.header}>
        <div className={s.container}>
          <svg
            className={s.logotype}
            width="78.429px"
            height="78.429px"
            aria-label="page logotype"
          >
            <use href="symbol-defs.svg#logo"></use>
          </svg>
          <nav className={s.navigation}>
            <ul className={s.list}>
              <li className={s.item}>
                <a href="#section-experience">Experience</a>
              </li>
              <li className={s.item}>
                <a href="#section-work">Work</a>
              </li>
              <li className={s.item}>
                <a href="#section-photo">Photography</a>
              </li>
              <li className={s.item}>
                <a href="#section-contact">Contact</a>
              </li>
            </ul>
          </nav>
          <button className={s.btn}>
            <svg width="24" height="24" aria-label="open menu button">
              <use href="/symbol-defs.svg#icon-13"></use>
            </svg>
          </button>
        </div>
      </header>
    </>
  );
};
export default Header;
