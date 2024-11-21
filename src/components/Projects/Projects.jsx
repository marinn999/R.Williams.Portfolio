import s from "./Projects.module.css";

const Projects = () => {
  return (
    <>
      <section className={s.section} id="section-work">
        <div className={s.mainContainer}>
          <div className={s.titleContainer}>
            <h2 className={s.title}>my projects</h2>
            <p className={s.description}>
              Work that I’ve done for the past 8 years
            </p>
          </div>
          <ul className={s.list}>
            <li className={s.item}>
              <img
                className="project-section-desktop-img"
                src="../img/projects/11.png"
                alt="wallet webservice image"
                width="680"
                height="390"
              ></img>
              <h3 className={s.itemTitle}>Wallet webservice</h3>
            </li>
            <li className={s.item}>
              <img
                className="project-section-desktop-img"
                src="../img/projects/12.png"
                alt="green harvest webservice image"
                width="680"
                height="390"
              ></img>
              <h3 className={s.itemTitle}>Green Harvest webservice</h3>
            </li>
            <li className={s.item}>
              <img
                className="project-section-desktop-img"
                src="../img/projects/13.png"
                alt="english exellence webservice image"
                width="680"
                height="390"
              ></img>
              <h3 className={s.itemTitle}>English Exellence webservice</h3>
            </li>
            <li className={s.item}>
              <img
                className="project-section-desktop-img"
                src="../img/projects/1.png"
                alt="power pulse webservice image"
                width="680"
                height="390"
              ></img>
              <h3 className={s.itemTitle}>Power Pulse webservice</h3>
            </li>
          </ul>
          <button className={s.btn}>view all projects</button>
        </div>
      </section>
    </>
  );
};

export default Projects;
