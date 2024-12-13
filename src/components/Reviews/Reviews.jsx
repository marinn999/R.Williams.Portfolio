import s from "./Reviews.module.css";
import img1 from "./img/2.webp";
import img2 from "./img/1.webp";
import img3 from "./img/3.webp";

const Reviews = () => {
  return (
    <>
      <section className={s.section}>
        <div className={s.leftContainer}>
          <h2 className={s.title}>This is what people say about me</h2>
          <p className={s.text}>
            Here are a few lines from people who I have worked with over the
            past 8+ years in my design career.
          </p>
          <a href="" className={s.link}>
            See all testimonials
          </a>
        </div>
        <div className={s.rightContainer}>
          <ul className={s.list}>
            <li className={s.item}>
              <img className={s.img} src={img1} width="760" height="360"></img>

              <div className={s.itemTextContainer}>
                <p className={s.itemText}>
                  ‘’Robin is one of the best designers I have worked with in my
                  entire life. He is a designer who is very capable of taking up
                  complex projects and delivers impeccable design.’’
                </p>
                <p className={s.itemTextWho}>Richard Owens</p>
                <p className={s.itemTextCompany}>CEO, Company 1</p>
              </div>
            </li>
            <li className={s.item}>
              <img className={s.img} src={img2} width="760" height="360"></img>
              <div className={s.itemTextContainer}>
                <p className={s.itemText}>
                  ‘’I think Robin has an incredible gift. It has been an
                  absolute pleasure to work with a designer of this caliber.’’
                </p>
                <p className={s.itemTextWho}>Emily Parker</p>
                <p className={s.itemTextCompany}>CEO, Company 2</p>
              </div>
            </li>
            <li className={s.item}>
              <img className={s.img} src={img3} width="760" height="360"></img>

              <div className={s.itemTextContainer}>
                <p className={s.itemText}>
                  ‘’All I can say that, Robin is a phenomenal designer. The
                  wavelength at which he thinks is astoundaing. I love the
                  focus, passion and attention to detial in the design.’’
                </p>
                <p className={s.itemTextWho}>Vincent Rudd</p>
                <p className={s.itemTextCompany}>CEO, Company 1</p>
              </div>
            </li>
          </ul>
        </div>
      </section>
    </>
  );
};

export default Reviews;
