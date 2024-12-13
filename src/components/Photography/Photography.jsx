import s from "./Photography.module.css";
import img1 from "./img/italy/1.webp";
import img2 from "./img/italy/2.webp";
import img3 from "./img/italy/3.webp";
import img4 from "./img/italy/4.webp";
// import img5 from "./img/australia/1.webp";
// import img6 from "./img/australia/2.webp";
// import img7 from "./img/australia/3.webp";
// import img8 from "./img/australia/4.webp";
// import img9 from "./img/india/1.webp";
// import img10 from "./img/india/2.webp";
// import img11 from "./img/india/3.webp";
// import img12 from "./img/india/4.webp";
// import img13 from "./img/brasil/1.webp";
// import img14 from "./img/brasil/2.webp";
// import img15 from "./img/brasil/3.webp";
// import img16 from "./img/brasil/4.webp";

const Photography = () => {
  return (
    <>
      <section className={s.section} id="section-photo">
        <h2 className={s.title}>Photography</h2>
        <p className={s.text}>
          Here is a collection of my best travel pictures that I took while
          travelling places all around the world.{" "}
        </p>
        <div className={s.buttons}>
          <button className={s.bth}>italy</button>
          <button className={s.bth}>australia</button>
          <button className={s.bth}>india</button>
          <button className={s.bth}>brazil</button>
        </div>
        <div className={s.imgs}>
          <img src={img1} alt="" width="306" height="420" />
          <img src={img2} alt="" width="306" height="420" />
          <img src={img3} alt="" width="306" height="420" />
          <img src={img4} alt="" width="306" height="420" />
        </div>
      </section>
    </>
  );
};

export default Photography;
