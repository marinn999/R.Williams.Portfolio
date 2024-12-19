import s from "./Footer.module.css";

const Footer = () => {
  return (
    <>
      <footer className={s.footer}>
        <div className={s.container}>
          <div className={s.footerLeft}>
            <a className={s.logoNav} href="./index.html">
              <svg
                className={s.logotype}
                width="78.429px"
                height="24px"
                aria-label="page logotype"
              >
                <use href="symbol-defs.svg#icon-12"></use>
              </svg>
            </a>
            <div className={s.iconsContainer}>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <svg
                  className={s.icon}
                  width="24"
                  height="24"
                  aria-label="Twitter icon"
                >
                  <use href="symbol-defs.svg#icon-Twitter"></use>
                </svg>
              </a>

              <a
                href="https://dribbble.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <svg
                  className={s.icon}
                  width="24"
                  height="24"
                  aria-label="Twitter icon"
                >
                  <use href="symbol-defs.svg#icon-Dribbble"></use>
                </svg>
              </a>

              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <svg
                  className={s.icon}
                  width="24"
                  height="24"
                  aria-label="Twitter icon"
                >
                  <use href="symbol-defs.svg#icon-LinkedIn"></use>
                </svg>
              </a>
            </div>
          </div>
          <div className={s.footerRight}>
            <a href="" className={s.link}>
              Home
            </a>
            <a href="#section-hero" className={s.link}>
              About
            </a>
            <a href="#section-experience" className={s.link}>
              Work
            </a>
            <a href="#section-photo" className={s.link}>
              Process
            </a>
            <a href="" className={s.link}>
              Creator
            </a>
            {/* <-- LINK TO MY CV --> */}
            <a href="https://www.freepik.com" className={s.link}>
              Resource
            </a>
            <a href="README" className={s.link} target="_blank">
              Read me
            </a>
            {/* <!-- ADD README FILE --> */}
          </div>
        </div>
        <p className={s.text}>
          Not Copyright 2020 • Layout improved by M.Kompel
        </p>
      </footer>
    </>
  );
};

export default Footer;
