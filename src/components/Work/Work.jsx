import s from "./Work.module.css";

export const Work = () => {
  return (
    <>
      <section className={s.section} id="section-experience">
        <h2 className={s.title}>work experience</h2>
        <h3 className={s.companiesTitle}>
          Companies I have worked for in the past
        </h3>
        <ul className={s.list}>
          <li className={s.item}>
            <p className={s.companyNumber}>01</p>

            <h4 className={s.companyName}>
              <span className={s.green}>Google</span>, Interaction Designer
            </h4>
            <p className={s.companyDescription}>
              I currently am the lead designer on the interaction design team
              for Google Play.
            </p>
          </li>
          <li className={s.item}>
            <p className={s.companyNumber}>02</p>
            <h4 className={s.companyName}>
              <span className={s.blue}>Facebook</span>, Product Designer
            </h4>
            <p className={s.companyDescription}>
              I’ve worked on a wide variety of internal tools for facebook over
              the past 6 years.
            </p>
          </li>
          <li className={s.item}>
            <p className={s.companyNumber}>03</p>
            <h4 className={s.companyName}>
              <span className={s.pink}>Dribbble</span>, Graphic Designer
            </h4>
            <p className={s.companyDescription}>
              I started my design career with Dribbble. I was incharge of
              creating illustrations for the platform.
            </p>
          </li>
        </ul>
      </section>
    </>
  );
};
