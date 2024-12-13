// import { useState } from "react";
import s from "./Projects.module.css";
import img1 from "./img/work1.webp";
import img2 from "./img/work2.webp";
import img3 from "./img/work3.webp";
import img4 from "./img/work4.webp";
// import Modal from "react-modal";

// Modal.setAppElement("#root");

const Projects = () => {
  // const [modalIsOpen, setModalIsOpen] = useState(false);

  // const openModal = () => {
  //   setModalIsOpen(true);
  // };
  // const closeModal = () => {
  //   setModalIsOpen(false);
  // };
  return (
    <>
      <section className={s.section} id="section-work">
        <div className={s.leftContainer}>
          <div className={s.titleContainer}>
            <h2 className={s.title}>my projects</h2>
            <p className={s.description}>
              Work that I’ve done for the past 8 years
            </p>
          </div>
          <ul className={s.list}>
            <li className={s.item}>
              <img
                className={s.img}
                src={img1}
                alt="restaurant webservice image"
                width="680"
                height="390"
              ></img>
              <h3 className={s.itemTitle}>Restaurant webservice</h3>
              <p className={s.itemText}>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Obcaecati, praesentium?
              </p>
            </li>
            <li className={s.item}>
              <img
                className={s.img}
                src={img2}
                alt="Language courses webservice image"
                width="680"
                height="390"
              ></img>
              <h3 className={s.itemTitle}>Courses webservice</h3>
              <p className={s.itemText}>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Obcaecati, praesentium?
              </p>
            </li>
          </ul>
        </div>

        <div className={s.rightContainer}>
          <ul className={s.list}>
            <li className={s.item}>
              <img
                className={s.img}
                src={img3}
                alt="Shopping time webservice image"
                width="680"
                height="390"
              ></img>
              <h3 className={s.itemTitle}>Shopping app webservice</h3>
              <p className={s.itemText}>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Obcaecati, praesentium?
              </p>
            </li>
            <li className={s.item}>
              <img
                className={s.img}
                src={img4}
                alt="gym webservice image"
                width="680"
                height="390"
              ></img>
              <h3 className={s.itemTitle}>Gym webservice</h3>
              <p className={s.itemText}>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Obcaecati, praesentium?
              </p>
            </li>
          </ul>
          <div className={s.btnContainer}>
            <button className={s.btn}>view all projects</button>
          </div>
        </div>
      </section>
    </>
  );
};

export default Projects;
