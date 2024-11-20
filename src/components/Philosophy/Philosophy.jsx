const Philosophy = () => {
  return (
    <>
      <section className="philosophy">
        <div className="philosophy-text-div">
          <div className="philosophy-text-without-link">
            <h2 className="philosophy-title">Philosophy & values</h2>
            <p className="philosophy-text">
              I think everyone wants the same thing - relationship with
              humanity, peace with the metaphysical, and experience with the
              universe. I try to grasp these things with my values:
              authenticity, creativity, & hospitality.
            </p>
          </div>
          <a className="philosophy-link" href="#skillset">
            More about me
          </a>
        </div>
        <img
          className="philosophy-mobile-img"
          src="./img/mobile img/Rectangle 39.jpg"
          alt="glass ball in hand"
          width="360"
          height="450"
        />
        <img
          className="philosophy-tablet-img"
          src="./img/tablet img/2/Rectangle 39.jpg"
          alt="glass ball in hand"
          width="384"
          height="600"
        />
        <img
          className="philosophy-desktop-img"
          src="./img/desktop img/3/3.jpg"
          alt="glass ball in hand"
          width="720"
          height="600"
        ></img>
      </section>
    </>
  );
};

export default Philosophy;
