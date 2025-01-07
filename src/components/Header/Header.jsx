import { useState } from "react";
import s from "./Header.module.css";
import ReactModal from "react-modal";

const Header = () => {
  const [mobileMenu, setMobileMenu] = useState(false);

  const openMobileMenu = () => {
    setMobileMenu(true);
  };
  const closeMobileMenu = () => {
    setMobileMenu(false);
  };
  const handleMenuClick = () => {
    closeMobileMenu();
  };

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
          <button className={s.btn} onClick={openMobileMenu}>
            <svg width="24" height="24" aria-label="open menu button">
              <use href="/symbol-defs.svg#icon-13"></use>
            </svg>
          </button>
          <ReactModal
            isOpen={mobileMenu}
            onRequestClose={closeMobileMenu}
            contentLabel="Menu"
            className={s.menu}
            overlayClassName={s.overlay}
            closeTimeoutMS={500}
          >
            <div className={s.modalHeader}>
              <button className={s.modalCloseBtn} onClick={closeMobileMenu}>
                x
              </button>
              <ul className={s.modalList}>
                <li className={s.modalItem} onClick={handleMenuClick}>
                  <a href="#section-experience">Experience</a>
                </li>
                <li className={s.modalItem} onClick={handleMenuClick}>
                  <a href="#section-work">Work</a>
                </li>
                <li className={s.modalItem} onClick={handleMenuClick}>
                  <a href="#section-photo">Photography</a>
                </li>
                <li className={s.modalItem} onClick={handleMenuClick}>
                  <a href="#section-contact">Contact</a>
                </li>
              </ul>
            </div>
          </ReactModal>
        </div>
      </header>
    </>
  );
};

export default Header;
