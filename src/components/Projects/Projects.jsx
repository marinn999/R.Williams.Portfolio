const Projects = () => {
  return (
    <>
      <section className="projects-section" id="section-work">
        <div className="projects-section-container">
          <div className="project-title-container">
            <h2 className="projects-section-title">my projects</h2>
            <p className="projects-section-description">
              Work that I’ve done for the past 8 years
            </p>
          </div>
          <ul className="projects-section-list">
            <li className="projects-section-list-item">
              <img
                className="project-section-desktop-img"
                src="../img/projects/11.png"
                alt="wallet webservice image"
                width="680"
                height="390"
              ></img>
              <h3 className="projects-section-list-item-title">
                Wallet webservice
              </h3>
            </li>
            <li className="projects-section-list-item">
              <img
                className="project-section-desktop-img"
                src="../img/projects/12.png"
                alt="green harvest webservice image"
                width="680"
                height="390"
              ></img>
              <h3 className="projects-section-list-item-title">
                Green Harvest webservice
              </h3>
            </li>
            <li className="projects-section-list-item">
              <img
                className="project-section-desktop-img"
                src="../img/projects/13.png"
                alt="english exellence webservice image"
                width="680"
                height="390"
              ></img>
              <h3 className="projects-section-list-item-title">
                English Exellence webservice
              </h3>
            </li>
            <li className="projects-section-list-item">
              <img
                className="project-section-desktop-img"
                src="../img/projects/1.png"
                alt="power pulse webservice image"
                width="680"
                height="390"
              ></img>
              <h3 className="projects-section-list-item-title">
                Power Pulse webservice
              </h3>
            </li>
          </ul>
          <button className="projects-section-btn">view all projects</button>
        </div>
      </section>
    </>
  );
};

export default Projects;
