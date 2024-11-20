export const Work = () => {
  return (
    <>
      <section className="experience-section" id="section-experience">
        <h2 className="work-experience">work experience</h2>
        <h3 className="companies-experience">
          Companies I have worked for in the past
        </h3>
        <ul className="companies-experience-list">
          <li className="companies-experience-list-item">
            <p className="company-number">01</p>

            <h4 className="company-name">
              <span className="green">Google</span>, Interaction Designer
            </h4>
            <p className="company-description">
              I currently am the lead designer on the interaction design team
              for Google Play.
            </p>
          </li>
          <li className="companies-experience-list-item">
            <p className="company-number">02</p>
            <h4 className="company-name">
              <span className="blue">Facebook</span>, Product Designer
            </h4>
            <p className="company-description">
              I’ve worked on a wide variety of internal tools for facebook over
              the past 6 years.
            </p>
          </li>
          <li className="companies-experience-list-item">
            <p className="company-number">03</p>
            <h4 className="company-name">
              <span className="pink">Dribbble</span>, Graphic Designer
            </h4>
            <p className="company-description">
              I started my design career with Dribbble. I was incharge of
              creating illustrations for the platform.
            </p>
          </li>
        </ul>
      </section>
    </>
  );
};
