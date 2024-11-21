import s from "./SkillsetIcons.module.css";

const SkillsetIcons = () => {
  return (
    <>
      <section className={s.section}>
        <ul className={s.list}>
          <li className={s.item}>
            <svg className={s.icon} width="85" height="21">
              <use href="symbol-defs.svg#icon-5"></use>
            </svg>
          </li>
          <li className={s.item}>
            <svg className={s.icon} width="71" height="29">
              <use href="symbol-defs.svg#icon-6"></use>
            </svg>
          </li>
          <li className={s.item}>
            <svg className={s.icon} width="28" height="28">
              <use href="symbol-defs.svg#icon-7"></use>
            </svg>
          </li>
          <li className={s.item}>
            <svg className={s.icon} width="21" height="21">
              <use href="symbol-defs.svg#icon-8"></use>
            </svg>
          </li>
          <li className={s.item}>
            <svg className={s.icon} width="154" height="25">
              <use href="symbol-defs.svg#icon-9"></use>
            </svg>
          </li>
          <li className={s.item}>
            <svg className={s.icon} width="180" height="140">
              <use href="symbol-defs.svg#icon-10"></use>
            </svg>
          </li>
        </ul>
      </section>
    </>
  );
};

export default SkillsetIcons;
