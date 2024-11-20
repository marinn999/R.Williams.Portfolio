const Reviews = () => {
  return (
    <>
      <section className="reviews-section">
        <div className="reviews-section-left">
          <h2 className="reviews-section-title">
            This is what people say about me
          </h2>
          <p className="reviews-section-text">
            Here are a few lines from people who I have worked with over the
            past 8+ years in my design career.
          </p>
          <a href="" className="reviews-section-link">
            See all testimonials
          </a>
        </div>
        <div className="reviews-section-right">
          <ul className="reviews-section-list">
            <li className="reviews-section-list-item">
              <img
                className="reviews-section-desktop-img"
                src="./img/desktop img/10/Rectangle 41.jpg"
                width="636"
                height="360"
              ></img>
              <img
                className="reviews-section-tablet-img"
                src="./img/tablet img/9/Rectangle 41.jpg"
                width="332"
                height="360"
              ></img>
              <div className="reviews-section-list-item-text-div">
                <p className="reviews-section-list-item-text">
                  ‘’Robin is one of the best designers I have worked with in my
                  entire life. He is a designer who is very capable of taking up
                  complex projects and delivers impeccable design.’’
                </p>
                <p className="reviews-section-list-item-text-who">
                  Richard Owens
                </p>
                <p className="reviews-section-list-item-text-company">
                  CEO, Company 1
                </p>
              </div>
            </li>
            <li className="reviews-section-list-item">
              <img
                className="reviews-section-desktop-img"
                src="./img/desktop img/11/Rectangle 41.jpg"
                width="636"
                height="360"
              ></img>
              <img
                className="reviews-section-tablet-img"
                src="./img/tablet img/10/Rectangle 41.jpg"
                width="332"
                height="360"
              ></img>
              <div className="reviews-section-list-item-text-div">
                <p className="reviews-section-list-item-text">
                  ‘’I think Robin has an incredible gift. It has been an
                  absolute pleasure to work with a designer of this caliber.’’
                </p>
                <p className="reviews-section-list-item-text-who">
                  Emily Parker
                </p>
                <p className="reviews-section-list-item-text-company">
                  CEO, Company 2
                </p>
              </div>
            </li>
            <li className="reviews-section-list-item">
              <img
                className="reviews-section-desktop-img"
                src="./img/desktop img/12/Rectangle 41.jpg"
                width="636"
                height="360"
              ></img>
              <img
                className="reviews-section-tablet-img"
                src="./img/tablet img/11/Rectangle 41.jpg"
                width="332"
                height="360"
              ></img>
              <div className="reviews-section-list-item-text-div">
                <p className="reviews-section-list-item-text">
                  ‘’All I can say that, Robin is a phenomenal designer. The
                  wavelength at which he thinks is astoundaing. I love the
                  focus, passion and attention to detial in the design.’’
                </p>
                <p className="reviews-section-list-item-text-who">
                  Vincent Rudd
                </p>
                <p className="reviews-section-list-item-text-company">
                  CEO, Company 1
                </p>
              </div>
            </li>
          </ul>
        </div>
      </section>
    </>
  );
};

export default Reviews;
