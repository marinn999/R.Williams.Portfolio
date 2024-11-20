const Skillset = () => {
  return (
    <>
      <section className="skillset-section" id="skillset">
        <div className="skillset-div-left">
          <h2 className="skillset-title">Skillset</h2>
          <p className="skillset-text">
            With skills in over 4 different fields of design, I am the perfect
            person to hire when it comes to a full fledged project. Whatever
            your needs are, I can pretty much take on any challenge.
          </p>
        </div>
        <div className="skillset-div-right">
          <ul className="skillset-list">
            <li className="skillset-list-item">
              <svg width="32" height="32">
                <use href="../img/symbol-defs.svg#icon-4"></use>
              </svg>
              <h3 className="skillset-list-item-title">Product Design</h3>
              <p className="skillset-list-item-text">
                Working at Facebook has taught me a lot about how to understand
                users, solve problems and build great products.
              </p>
            </li>
            <li className="skillset-list-item">
              <svg width="32" height="32">
                <use href="../img/symbol-defs.svg#icon-2"></use>
              </svg>
              <h3 className="skillset-list-item-title">Visual Design</h3>
              <p className="skillset-list-item-text">
                My experience at dribbble has helped me learn to develop the eye
                for design. Colors, typography, layout and the whole package.
              </p>
            </li>
            <li className="skillset-list-item">
              <svg width="32" height="32">
                <use href="../img/symbol-defs.svg#icon-3"></use>
              </svg>
              <h3 className="skillset-list-item-title">Motion Design</h3>
              <p className="skillset-list-item-text">
                I started my design journey with motion design in my college
                days. Motion is something that really fascinates me because of
                the flexibility of story telling.{" "}
              </p>
            </li>
            <li className="skillset-list-item">
              <svg width="32" height="32">
                <use href="../img/symbol-defs.svg#icon-1"></use>
              </svg>
              <h3 className="skillset-list-item-title">Photography</h3>
              <p className="skillset-list-item-text">
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
