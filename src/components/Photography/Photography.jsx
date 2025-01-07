import { useState } from "react";
import s from "./Photography.module.css";
import img1 from "./img/italy/1.webp";
import img2 from "./img/italy/2.webp";
import img3 from "./img/italy/3.webp";
import img4 from "./img/italy/4.webp";
import img5 from "./img/australia/1.webp";
import img6 from "./img/australia/2.webp";
import img7 from "./img/australia/3.webp";
import img8 from "./img/australia/4.webp";
import img9 from "./img/india/1.webp";
import img10 from "./img/india/2.webp";
import img11 from "./img/india/3.webp";
import img12 from "./img/india/4.webp";
import img13 from "./img/brasil/1.webp";
import img14 from "./img/brasil/2.webp";
import img15 from "./img/brasil/3.webp";
import img16 from "./img/brasil/4.webp";

const Photography = () => {
  const [visibleImgs, setVisibleImgs] = useState([img1, img2, img3, img4]);
  const [activeBtn, setActiveBtn] = useState(1);

  const handleBtnClick = (btnNr) => {
    setActiveBtn(btnNr);

    switch (btnNr) {
      case 1:
        setVisibleImgs([img1, img2, img3, img4]);
        break;
      case 2:
        setVisibleImgs([img5, img6, img7, img8]);
        break;
      case 3:
        setVisibleImgs([img9, img10, img11, img12]);
        break;
      case 4:
        setVisibleImgs([img13, img14, img15, img16]);
        break;
      default:
        setVisibleImgs([img1, img2, img3, img4]);
    }
  };
  return (
    <>
      <section className={s.section} id="section-photo">
        <h2 className={s.title}>Photography</h2>
        <p className={s.text}>
          Here is a collection of my best travel pictures that I took while
          travelling places all around the world.{" "}
        </p>
        <div className={s.buttons}>
          <button
            className={`${s.btn} ${activeBtn === 1 ? s.active : ""}`}
            onClick={() => handleBtnClick(1)}
          >
            italy
          </button>
          <button
            className={`${s.btn} ${activeBtn === 2 ? s.active : ""}`}
            onClick={() => handleBtnClick(2)}
          >
            australia
          </button>
          <button
            className={`${s.btn} ${activeBtn === 3 ? s.active : ""}`}
            onClick={() => handleBtnClick(3)}
          >
            india
          </button>
          <button
            className={`${s.btn} ${activeBtn === 4 ? s.active : ""}`}
            onClick={() => handleBtnClick(4)}
          >
            brazil
          </button>
        </div>
        <div className={s.imgs}>
          {visibleImgs.map((src, id) => (
            <img
              className={s.img}
              key={id}
              src={src}
              alt={`Image ${id + 1}`}
              width="306"
              height="420"
            />
          ))}
        </div>
      </section>
    </>
  );
};

export default Photography;
