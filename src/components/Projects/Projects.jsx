import { useState } from "react";
import s from "./Projects.module.css";
import img1 from "./img/work1.webp";
import img2 from "./img/work2.webp";
import img3 from "./img/work3.webp";
import img4 from "./img/work4.webp";
import img5 from "./img/work5.webp";
import img6 from "./img/work6.webp";
import img7 from "./img/work7.webp";
import Modal from "react-modal";

Modal.setAppElement("#root");

const Projects = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const projects = [
    {
      id: 1,
      img: img1,
      title: "Restaurant webservice",
      text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Obcaecati, praesentium?",
    },
    {
      id: 2,
      img: img2,
      title: "Courses webservice",
      text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Obcaecati, praesentium?",
    },
    {
      id: 3,
      img: img3,
      title: "Shopping app webservice",
      text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Obcaecati, praesentium?",
    },
    {
      id: 4,
      img: img4,
      title: "Gym webservice",
      text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Obcaecati, praesentium?",
    },
    {
      id: 5,
      img: img5,
      title: "Night club webservice",
      text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Obcaecati, praesentium?",
    },
    {
      id: 6,
      img: img6,
      title: "Delivery webservice",
      text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Obcaecati, praesentium?",
    },
    {
      id: 7,
      img: img7,
      title: "Yoga webservice",
      text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Obcaecati, praesentium?",
    },
  ];

  const leftProjects = projects.slice(0, 2);
  const rightProjects = projects.slice(2, 4);

  const openModal = () => {
    setModalIsOpen(true);
  };
  const closeModal = () => {
    setModalIsOpen(false);
  };
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
            {leftProjects.map((projects) => (
              <li className={s.item} key={projects.id}>
                <img
                  className={s.img}
                  src={projects.img}
                  alt={projects.title}
                  width="680"
                  height="390"
                ></img>
                <h3 className={s.itemTitle}>{projects.title}</h3>
                <p className={s.itemText}>{projects.text}</p>
              </li>
            ))}
          </ul>
        </div>

        <div className={s.rightContainer}>
          <ul className={s.list}>
            {rightProjects.map((projects) => (
              <li className={s.item} key={projects.id}>
                <img
                  className={s.img}
                  src={projects.img}
                  alt={projects.title}
                  width="680"
                  height="390"
                ></img>
                <h3 className={s.itemTitle}>{projects.title}</h3>
                <p className={s.itemText}>{projects.text}</p>
              </li>
            ))}
          </ul>
          <div className={s.btnContainer}>
            <button className={s.btn} onClick={openModal}>
              view all projects
            </button>
          </div>
        </div>
      </section>

      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        contentLabel="All Projects"
        className={s.modal}
        overlayClassName={s.overlay}
      >
        <h2 className={s.modalTitle}>All Projects</h2>
        <ul className={s.modalList}>
          {projects.map((project) => (
            <li className={s.modalItem} key={project.id}>
              <img
                className={s.modalImg}
                src={project.img}
                alt={project.title}
              ></img>
              <h3 className={s.modalText}>{project.title}</h3>
            </li>
          ))}
        </ul>
        <button className={s.btnClose} onClick={closeModal}>
          close
        </button>
      </Modal>
    </>
  );
};

export default Projects;
