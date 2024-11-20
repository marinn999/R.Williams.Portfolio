const Instagram = () => {
  return (
    <>
      <section className="insta-section">
        <div className="insta-section-left">
          <h2 className="insta-section-title">Instagram</h2>
          <p className="insta-section-text">
            If you are a person who enjoys photography, then I highly recommend
            that you check out my Instagram. I’m an avid traveller and I capture
            the best moments that I would love to cherish with the world.
          </p>
          <a
            className="insta-section-link"
            href="https://www.instagram.com"
            target="_blank"
          >
            Follow me on IG
          </a>
        </div>
        <img
          className="insta-section-desktop-img"
          src="./img/desktop img/8/Rectangle 39.jpg"
          alt="plane"
          width="720"
          height="600"
        />
        <img
          className="insta-section-tablet-img"
          src="./img/tablet img/7/Rectangle 39.jpg"
          alt="plane"
          width="384"
          height="600"
        />
        <img
          className="insta-section-mobile-img"
          src="./img/tablet img/7/Rectangle 39.jpg"
          alt="plane"
          width="360"
          height="450"
        />
      </section>
    </>
  );
};

export default Instagram;
